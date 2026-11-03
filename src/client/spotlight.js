// Spotlight panel: shows the focused work. Follows keyboard/remote focus, never touch or mouse taps.
// In key mode, once the panel has scrolled away (focus in a lower rail or the grid), a slim band
// (#spot-mini) slides in at the top with the same work, so the lamp's subject stays in view.
import { bi } from './util.js';

var data, el = {}, current = null, miniWork = null, raf = 0;
var root = document.documentElement;

function metaHtml(w) {
  var langs = '';
  for (var i = 0; i < w.l.length; i++) langs += '<span class="lc">' + w.l[i] + '</span>';
  var types = [];
  for (var j = 0; j < w.ty.length; j++) types.push(bi(data.ty[w.ty[j]]));
  return '<span class="spot-langs">' + langs + '</span>' + types.join('<span class="sep">, </span>');
}

function showMini(id, tile) {
  var w = data.w[id];
  if (!w || !el.mini || id === miniWork) return;
  miniWork = id;
  el.miniTitle.innerHTML = bi(w.t);
  el.miniMeta.innerHTML = metaHtml(w);
  el.miniBlurb.innerHTML = bi(w.b);
  if (w.bg) {
    el.miniCover.innerHTML = '<img alt="">';
    el.miniCover.firstChild.setAttribute('src', w.bg);
  } else {
    var cov = tile && tile.querySelector('.cover');
    el.miniCover.innerHTML = cov ? cov.innerHTML : '';
  }
}

export function showWork(id, tile) {
  var w = data.w[id];
  if (!w) return;
  showMini(id, tile);
  if (id === current) return;
  current = id;
  el.title.innerHTML = bi(w.t);
  el.title.className = 'spot-title' + (Math.max(w.t.en.length, w.t.hr.length) > 26 ? ' long' : '');
  el.meta.innerHTML = metaHtml(w);
  el.blurb.innerHTML = bi(w.b);
  el.action.innerHTML = bi(data.s[w.a.k]);
  el.action.setAttribute('href', w.a.href);
  el.action.setAttribute('data-work', id);
  if (w.bg) {
    if (el.img.getAttribute('src') !== w.bg) el.img.setAttribute('src', w.bg);
    el.bg.style.visibility = '';
  } else {
    el.bg.style.visibility = 'hidden';
  }
  el.body.className = 'spot-body';
  void el.body.offsetWidth;
  el.body.className = 'spot-body fade';
}

// The band shows only in key mode, with focus outside the panel and the panel scrolled under the band.
function updateMini() {
  raf = 0;
  if (!el.mini) return;
  var a = document.activeElement;
  var inSpot = a && a.closest ? !!a.closest('#spot') : false;
  var on = root.classList.contains('keys') && !inSpot && el.spot.getBoundingClientRect().bottom < el.mini.offsetHeight;
  if (on !== root.classList.contains('mini-on')) root.classList.toggle('mini-on', on);
}

function scheduleMini() {
  if (!raf) raf = requestAnimationFrame(updateMini);
}

export function initSpotlight(d) {
  data = d;
  el.body = document.getElementById('spot-body');
  if (!el.body) return;
  el.spot = document.getElementById('spot');
  el.bg = document.getElementById('spot-bg');
  el.img = el.bg.querySelector('img');
  el.title = document.getElementById('spot-title');
  el.meta = document.getElementById('spot-meta');
  el.blurb = document.getElementById('spot-blurb');
  el.action = document.getElementById('spot-action');
  el.mini = document.getElementById('spot-mini');
  if (el.mini) {
    el.miniCover = document.getElementById('spot-mini-cover');
    el.miniTitle = document.getElementById('spot-mini-title');
    el.miniMeta = document.getElementById('spot-mini-meta');
    el.miniBlurb = document.getElementById('spot-mini-blurb');
  }
  current = miniWork = d.f;
  document.addEventListener('focusin', function (e) {
    scheduleMini();
    if (root.classList.contains('pointer')) return;
    var tile = e.target.closest ? e.target.closest('.tile') : null;
    if (tile) showWork(tile.getAttribute('data-work'), tile);
  });
  window.addEventListener('scroll', scheduleMini, { passive: true });
  document.addEventListener('keydown', scheduleMini);
  document.addEventListener('pointerdown', scheduleMini);
  document.addEventListener('touchstart', scheduleMini, { passive: true });
  document.addEventListener('mousemove', scheduleMini);
}
