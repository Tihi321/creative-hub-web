// Spatial navigation for remotes, keyboards and touch (plan section 10).
//
// [data-nav]        focusable item
// [data-nav-group]  group, with data-nav-axis="x" (rail, chip row, header) or "grid"
// Left/Right in an x group step through items and stop at the ends. Up/Down jump to the nearest
// item above or below; a rail remembers its last index. Grids and pages without groups use
// rectangle geometry. Enter is never intercepted.
import { reducedMotion, safeGet, safeSet } from './util.js';
import { hasFilter, clearFilter } from './filters.js';
import { loadNow } from './lazy.js';

var SEL = '[data-nav]';
var root = document.documentElement;
var memory = new WeakMap();
var sawPointer = false;
var tweens = {};

function visible(el) {
  if (el.disabled) return false;
  var r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0;
}

function items(scope) {
  var all = (scope || document).querySelectorAll(SEL);
  var out = [];
  for (var i = 0; i < all.length; i++) if (visible(all[i])) out.push(all[i]);
  return out;
}

function groupOf(el) {
  return el.closest('[data-nav-group]');
}

function axisOf(group) {
  return group ? group.getAttribute('data-nav-axis') : null;
}

function center(r) {
  return { x: (r.left + r.right) / 2, y: (r.top + r.bottom) / 2 };
}

function current() {
  var a = document.activeElement;
  return a && a.closest ? a.closest(SEL) : null;
}

// ---- finding the next item ----

function geometric(cur, dir, pool) {
  var cr = cur.getBoundingClientRect();
  var cc = center(cr);
  var best = null;
  var bestScore = Infinity;
  for (var i = 0; i < pool.length; i++) {
    var c = pool[i];
    if (c === cur) continue;
    var r = c.getBoundingClientRect();
    var k = center(r);
    var primary, secondary, ok;
    if (dir === 'right' || dir === 'left') {
      var band = (cr.height + r.height) / 2;
      ok = (dir === 'right' ? k.x > cc.x + 2 : k.x < cc.x - 2) && Math.abs(k.y - cc.y) < band * 0.75;
      primary = dir === 'right' ? Math.max(0, r.left - cr.right) : Math.max(0, cr.left - r.right);
      secondary = Math.abs(k.y - cc.y);
    } else {
      ok = dir === 'down' ? r.top > cc.y : r.bottom < cc.y;
      primary = dir === 'down' ? Math.max(0, r.top - cr.bottom) : Math.max(0, cr.top - r.bottom);
      secondary = Math.abs(k.x - cc.x);
    }
    if (!ok) continue;
    var score = primary * 4 + secondary;
    if (score < bestScore) { bestScore = score; best = c; }
  }
  return best;
}

function next(cur, dir) {
  var group = groupOf(cur);
  var axis = axisOf(group);
  var horizontal = dir === 'left' || dir === 'right';
  if (axis === 'x' && horizontal) {
    var list = items(group);
    var j = list.indexOf(cur) + (dir === 'right' ? 1 : -1);
    return list[j] || null;
  }
  var pool;
  if (horizontal) pool = axis === 'grid' ? items(group) : items(document);
  else {
    pool = items(document);
    if (axis === 'x') pool = pool.filter(function (el) { return groupOf(el) !== group; });
  }
  var best = geometric(cur, dir, pool);
  if (!best) return null;
  // a rail remembers where you were
  var bg = groupOf(best);
  if (!horizontal && bg && bg !== group && bg.hasAttribute('data-rail') && axisOf(bg) === 'x' && memory.has(bg)) {
    var rl = items(bg);
    var idx = Math.min(memory.get(bg), rl.length - 1);
    if (rl[idx]) return rl[idx];
  }
  return best;
}

// ---- scrolling ----

function tween(key, from, to, apply) {
  if (tweens[key]) cancelAnimationFrame(tweens[key]);
  if (reducedMotion() || Math.abs(to - from) < 2) { apply(to); tweens[key] = 0; return; }
  var start = null;
  var dur = 160;
  function step(ts) {
    if (start === null) start = ts;
    var p = Math.min(1, (ts - start) / dur);
    var e = 1 - Math.pow(1 - p, 3);
    apply(from + (to - from) * e);
    tweens[key] = p < 1 ? requestAnimationFrame(step) : 0;
  }
  tweens[key] = requestAnimationFrame(step);
}

var scrollerId = 0;
function keepInView(el, instant) {
  var group = groupOf(el);
  var scroller = group && axisOf(group) === 'x' && group.scrollWidth > group.clientWidth ? group : null;
  if (scroller) {
    var margin = el.offsetWidth;
    var left = el.offsetLeft - scroller.scrollLeft;
    var right = left + el.offsetWidth;
    var target = scroller.scrollLeft;
    if (left < margin) target = scroller.scrollLeft + (left - margin);
    else if (right > scroller.clientWidth - margin) target = scroller.scrollLeft + (right - (scroller.clientWidth - margin));
    target = Math.max(0, Math.min(target, scroller.scrollWidth - scroller.clientWidth));
    if (!scroller.__nid) scroller.__nid = 's' + (++scrollerId);
    if (instant) scroller.scrollLeft = target;
    else tween(scroller.__nid, scroller.scrollLeft, target, function (v) { scroller.scrollLeft = v; });
  }
  var cov = el.querySelector ? el.querySelector('.cover') : null;
  var r = (cov || el).getBoundingClientRect();
  var ref = (axisOf(group) === 'grid' ? el : el.closest('.rail-section')) || group || el;
  var vh = window.innerHeight;
  if (r.top >= vh * 0.04 && r.bottom <= vh * (cov ? 1 : 0.97)) return; // for a tile the cover counts, the caption may run off
  var y = window.pageYOffset;
  var want = r.bottom + y <= vh * (cov ? 1 : 0.97) ? 0 : ref.getBoundingClientRect().top + y - vh * 0.33;
  want = Math.max(0, want);
  if (instant) window.scrollTo(0, want);
  else tween('page', y, want, function (v) { window.scrollTo(0, v); });
}

function focusItem(el, instant) {
  loadNow(el);
  try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
  keepInView(el, instant);
}

// ---- lamp, memory, last focus ----

function onFocusIn(e) {
  var el = e.target.closest ? e.target.closest(SEL) : null;
  if (!el) return;
  var group = groupOf(el);
  if (group && group.hasAttribute('data-rail')) memory.set(group, items(group).indexOf(el));
  var beams = document.querySelectorAll('.beam.on');
  for (var i = 0; i < beams.length; i++) beams[i].className = 'beam';
  if (el.classList.contains('tile')) {
    var holder = el.parentNode;
    var beam = holder.querySelector('.beam');
    if (beam) {
      var ty = el.offsetTop - beam.offsetHeight + 3;
      beam.style.width = el.offsetWidth + 'px';
      beam.style.webkitTransform = beam.style.transform = 'translate3d(' + el.offsetLeft + 'px,' + ty + 'px,0)';
      beam.className = 'beam on';
    }
    safeSet(sessionStorage, 'chw.lastFocus', JSON.stringify({ work: el.getAttribute('data-work'), rail: el.getAttribute('data-rail') }));
  }
}

function restoreFocus() {
  var raw = safeGet(sessionStorage, 'chw.lastFocus');
  if (!raw) return false;
  var nav = '';
  try { nav = performance.getEntriesByType('navigation')[0].type; } catch (e) { /* old browser */ }
  var back = nav === 'back_forward' || (window.performance && performance.navigation && performance.navigation.type === 2);
  var fromItem = document.referrer.indexOf(location.origin) === 0 && /\/item\//.test(document.referrer);
  if (!back && !fromItem) return false;
  var last;
  try { last = JSON.parse(raw); } catch (e) { return false; }
  var tiles = document.querySelectorAll('.tile[data-work="' + last.work + '"]');
  var pick = null;
  for (var i = 0; i < tiles.length; i++) {
    if (!visible(tiles[i])) continue;
    if (!pick || tiles[i].getAttribute('data-rail') === last.rail) pick = tiles[i];
  }
  if (!pick) return false;
  focusItem(pick, true);
  return true;
}

// ---- keys ----

function isBackKey(e) {
  if (e.key === 'Escape' || e.key === 'GoBack' || e.key === 'BrowserBack') return true;
  if (e.keyCode === 461 || e.keyCode === 10009) return true;
  return e.key === 'Backspace' && !isTextTarget(e.target);
}

function isTextTarget(t) {
  var n = t && t.nodeName;
  return n === 'INPUT' || n === 'TEXTAREA' || n === 'SELECT' || (t && t.isContentEditable);
}

function goBack() {
  var home = document.body.getAttribute('data-home') || './';
  var ref = document.referrer;
  var fromSite = ref.indexOf(location.origin) === 0 && !/\/(play|read)\//.test(ref);
  if (fromSite && history.length > 1) history.back();
  else location.href = home;
}

var ARROWS = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down', 37: 'left', 39: 'right', 38: 'up', 40: 'down' };

function onKeyDown(e) {
  if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
  if (isBackKey(e)) {
    if (isTextTarget(e.target) && e.key !== 'Escape') return;
    var page = document.body.getAttribute('data-page');
    if (page === 'home') {
      if (hasFilter()) { e.preventDefault(); clearFilter(); }
      return; // no filter: leave the key to the TV so it can exit the browser
    }
    e.preventDefault();
    goBack();
    return;
  }
  var dir = ARROWS[e.key] || ARROWS[e.keyCode];
  if (!dir || isTextTarget(e.target)) return;
  if (!sawPointer) root.classList.add('tv');
  root.classList.add('keys');
  root.classList.remove('pointer');
  var cur = current();
  if (!cur) {
    e.preventDefault();
    var first = document.getElementById('spot-action');
    first = first && visible(first) ? first : items(document)[0];
    if (first) focusItem(first);
    return;
  }
  var target = next(cur, dir);
  e.preventDefault();
  if (target) focusItem(target);
}

function onPointer() {
  sawPointer = true;
  root.classList.add('pointer');
  root.classList.remove('keys');
}

function initialFocus() {
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches && !root.classList.contains('tv');
  if (coarse) return;
  var page = document.body.getAttribute('data-page');
  if (page === 'home') {
    if (restoreFocus()) return;
    var a = document.getElementById('spot-action');
    if (a) { try { a.focus({ preventScroll: true }); } catch (e) { a.focus(); } }
  } else if (page === 'item') {
    var f = document.querySelector('[data-test="play"]') || document.querySelector('[data-test="read"]') || document.querySelector('.back');
    if (f) { try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); } }
  }
}

export function initNav() {
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('focusin', onFocusIn);
  document.addEventListener('pointerdown', onPointer);
  document.addEventListener('touchstart', onPointer, { passive: true });
  var lastX = -1, lastY = -1;
  document.addEventListener('mousemove', function (e) {
    if (Math.abs(e.screenX - lastX) + Math.abs(e.screenY - lastY) > 3 && lastX !== -1) onPointer();
    lastX = e.screenX; lastY = e.screenY;
  });
  window.addEventListener('pageshow', function (e) {
    if (e.persisted && document.body.getAttribute('data-page') === 'home') restoreFocus();
  });
  initialFocus();
}
