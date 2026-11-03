/*
 * hub-bridge.js - injected into every copied game and reader of the Creative hub site.
 *
 * Tag (written by scripts/publish.mjs, before </body>):
 *   <script src="<up>assets/hub-bridge.js" data-player="vn|edu|read" data-back="<up>item/<workId>/"></script>
 *
 * What it does
 *   1. A "Library" pill, fixed top-left, that leads back to the work page (data-back).
 *      Visible for 4 s after load, again on pointer move into the top 15 percent, on a touch at the
 *      top edge and while it has focus. When hidden it only has opacity 0 and pointer-events none, so it
 *      stays in the tab order: it is the first focusable element of the page (Tab reaches it, and Enter
 *      follows its link). ArrowUp reaches it as well: from the top of a menu, or when nothing is focused.
 *   2. TV Back keys (keyCode 461 webOS, 10009 Tizen, key BrowserBack / GoBack) go to data-back.
 *      Escape and Backspace are never touched (the games use them).
 *   3. D-pad assist. vn: while the main menu, an open settings/save/history/about screen, the ending
 *      card or the choice list is visible, arrows move focus spatially among its buttons and Enter clicks
 *      the focused one (capture phase, propagation stopped so the player does not also advance).
 *      edu: arrows move focus among buttons and links when the player did not handle the key itself
 *      (bubble phase, only if not defaultPrevented); Enter/Space stay native.
 *      read: no assist, arrows scroll.
 *
 * Source is ES2017-safe, has no dependencies, works in XHTML documents (elements are created in the
 * XHTML namespace, no innerHTML) and exposes only window.__hubBridge.
 */
(function () {
  'use strict';

  var VERSION = 1;
  var XHTML = 'http://www.w3.org/1999/xhtml';
  var SHOW_MS = 4000;
  var TOP_ZONE = 0.15;

  var script = document.currentScript;
  if (!script) {
    var found = document.querySelectorAll('script[src*="hub-bridge"]');
    script = found.length ? found[found.length - 1] : null;
  }
  var player = (script && script.getAttribute('data-player')) || 'read';
  var backAttr = script ? script.getAttribute('data-back') : null;
  var backUrl = null;
  if (backAttr) {
    try {
      backUrl = new URL(backAttr, document.baseURI || location.href).href;
    } catch (e) {
      backUrl = backAttr;
    }
  }

  if (window.__hubBridge) return;

  function uiLang() {
    var lang = null;
    try {
      lang = window.localStorage.getItem('chw.lang');
    } catch (e) {
      lang = null;
    }
    if (!lang) lang = navigator.language || '';
    return String(lang).toLowerCase().indexOf('hr') === 0 ? 'hr' : 'en';
  }

  function back() {
    if (backUrl) window.location.assign(backUrl);
    else window.history.back();
  }

  function el(tag) {
    return document.createElementNS(XHTML, tag);
  }

  /* ---------- the pill ---------- */

  var pill = null;
  var hideTimer = null;
  var hovered = false;

  var CSS =
    '.hubb-pill{position:fixed;left:5%;top:4%;z-index:2147483647;box-sizing:border-box;' +
    'display:inline-flex;align-items:center;justify-content:center;min-width:48px;min-height:48px;' +
    'padding:10px 24px;border-radius:999px;border:2px solid rgba(241,236,224,.35);background:#123247;color:#F1ECE0;' +
    'font:600 22px/1.2 "Atkinson Hyperlegible","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;' +
    'text-decoration:none;letter-spacing:0;opacity:0;pointer-events:none;' +
    '-webkit-transition:opacity .2s;transition:opacity .2s;}' +
    '.hubb-pill.hubb-on{opacity:1;pointer-events:auto;}' +
    '.hubb-pill:focus{opacity:1;outline:4px solid #F4B942;outline-offset:3px;}' +
    'html.hubb-kb #vno-container button:focus,html.hubb-kb #vno-container select:focus,' +
    'html.hubb-kb #vno-container input:focus,html.hubb-kb .vno-slot-card:focus,' +
    'html.hubb-kb #edu-root button:focus,html.hubb-kb #edu-root a:focus,html.hubb-kb #edu-root [tabindex]:focus,' +
    'html.hubb-kb #edu-root select:focus,html.hubb-kb #edu-root input:focus{outline:4px solid #F4B942;outline-offset:3px;}';

  function setOn(on) {
    if (!pill) return;
    var cls = pill.getAttribute('class') || '';
    var has = cls.indexOf('hubb-on') !== -1;
    if (on && !has) pill.setAttribute('class', cls + ' hubb-on');
    if (!on && has) pill.setAttribute('class', cls.replace(/\s*hubb-on/g, ''));
  }

  function showPill(ms) {
    if (!pill) return;
    setOn(true);
    if (hideTimer) window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(hideIfIdle, ms || SHOW_MS);
  }

  function hideIfIdle() {
    hideTimer = null;
    if (!pill) return;
    if (document.activeElement === pill || hovered) return;
    setOn(false);
  }

  function focusPill() {
    if (!pill) return false;
    showPill(SHOW_MS);
    pill.focus();
    return document.activeElement === pill;
  }

  function buildPill() {
    var style = el('style');
    style.setAttribute('type', 'text/css');
    style.appendChild(document.createTextNode(CSS));
    (document.head || document.documentElement).appendChild(style);

    var lang = uiLang();
    pill = el('a');
    pill.setAttribute('class', 'hubb-pill');
    pill.setAttribute('id', 'hubb-pill');
    pill.setAttribute('href', backUrl || '#');
    pill.setAttribute('lang', lang);
    pill.setAttribute('aria-label', lang === 'hr' ? 'Natrag u knjižnicu' : 'Back to the library');
    pill.appendChild(document.createTextNode(lang === 'hr' ? 'Knjižnica' : 'Library'));
    // Safe area: plain percentages first, then the env() version if the browser understands it
    // (an unsupported value is ignored and the plain one stays).
    pill.style.left = '5%';
    pill.style.top = '4%';
    pill.style.top = 'max(4%, env(safe-area-inset-top))';
    pill.style.left = 'max(5%, env(safe-area-inset-left))';
    pill.addEventListener('click', function (e) {
      if (!backUrl) {
        e.preventDefault();
        window.history.back();
      }
    });
    pill.addEventListener('focus', function () { showPill(SHOW_MS); });
    pill.addEventListener('blur', function () { showPill(1500); });
    pill.addEventListener('mouseenter', function () { hovered = true; showPill(SHOW_MS); });
    pill.addEventListener('mouseleave', function () { hovered = false; showPill(1500); });
    // First in the document so Tab reaches it before anything else.
    var body = document.body;
    body.insertBefore(pill, body.firstChild);
    showPill(SHOW_MS);
  }

  /* ---------- helpers for focus assist ---------- */

  function isShown(node) {
    if (!node || !node.getClientRects || node.getClientRects().length === 0) return false;
    var cs = window.getComputedStyle(node);
    return cs.visibility !== 'hidden' && cs.display !== 'none';
  }

  function hasClass(node, name) {
    var cls = node.getAttribute && node.getAttribute('class');
    return !!cls && (' ' + cls + ' ').indexOf(' ' + name + ' ') !== -1;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function visibleContainer(id) {
    var node = byId(id);
    return node && !hasClass(node, 'vno-hidden') && isShown(node) ? node : null;
  }

  function collect(root, selector, out) {
    var nodes = root.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.disabled || n.type === 'hidden' || n.getAttribute('aria-hidden') === 'true') continue;
      if (n.id === 'hubb-pill') continue;
      if (!isShown(n)) continue;
      var r = n.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      if (out.indexOf(n) === -1) out.push(n);
    }
    return out;
  }

  var VN_SELECTOR = 'button, select, input, .vno-slot-card';
  var VN_SCREENS = ['vno-screen-prefs', 'vno-screen-save', 'vno-screen-history', 'vno-screen-about'];

  /** The topmost VN screen that a remote cannot otherwise operate, as a list of focusable elements, or null. */
  function vnCandidates() {
    var i, root;
    for (i = 0; i < VN_SCREENS.length; i++) {
      root = visibleContainer(VN_SCREENS[i]);
      if (root) return collect(root, VN_SELECTOR, []);
    }
    root = visibleContainer('vno-screen-main-menu');
    if (root) {
      var list = collect(root, VN_SELECTOR, []);
      var lang = byId('vno-stage-language');
      if (lang && isShown(lang) && list.indexOf(lang) === -1) list.push(lang);
      return list;
    }
    root = visibleContainer('vno-ending-card');
    if (root) return collect(root, VN_SELECTOR, []);
    root = visibleContainer('vno-choice-overlay');
    if (root) return collect(root, VN_SELECTOR, []);
    return null;
  }

  var EDU_SELECTOR = 'button, a[href], [role="button"], [tabindex="0"], input:not([type="hidden"]), select, textarea';

  function eduCandidates() {
    var root = byId('edu-root');
    if (!root) return null;
    var scope = root;
    var modals = document.querySelectorAll('[aria-modal="true"], dialog[open]');
    for (var i = modals.length - 1; i >= 0; i--) {
      if (isShown(modals[i])) {
        scope = modals[i];
        break;
      }
    }
    var list = collect(scope, EDU_SELECTOR, []);
    return list.length ? list : null;
  }

  function center(node) {
    var r = node.getBoundingClientRect();
    return { x: (r.left + r.right) / 2, y: (r.top + r.bottom) / 2 };
  }

  /** Nearest candidate from `cur` in a direction (center distance, perpendicular drift weighted double). */
  function pick(cur, list, dir) {
    var a = center(cur);
    var best = null;
    var bestScore = Infinity;
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c === cur) continue;
      var b = center(c);
      var dx = b.x - a.x;
      var dy = b.y - a.y;
      var main;
      var cross;
      if (dir === 'down') { main = dy; cross = Math.abs(dx); }
      else if (dir === 'up') { main = -dy; cross = Math.abs(dx); }
      else if (dir === 'right') { main = dx; cross = Math.abs(dy); }
      else { main = -dx; cross = Math.abs(dy); }
      if (main < 2) continue;
      var score = main + 2 * cross;
      if (score < bestScore) {
        bestScore = score;
        best = c;
      }
    }
    return best;
  }

  function focusEl(node) {
    if (!node.hasAttribute('tabindex') && !/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(node.tagName.toUpperCase())) {
      node.setAttribute('tabindex', '-1');
    }
    try {
      node.focus();
      if (node.scrollIntoView) node.scrollIntoView(false);
    } catch (e) {
      /* a node that cannot take focus: ignore */
    }
  }

  var DIRS = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    Up: 'up',
    Down: 'down',
    Left: 'left',
    Right: 'right'
  };
  var DIR_CODES = { 38: 'up', 40: 'down', 37: 'left', 39: 'right' };

  function dirOf(e) {
    return DIRS[e.key] || (e.key === undefined || e.key === 'Unidentified' ? DIR_CODES[e.keyCode] : undefined);
  }

  function plain(e) {
    return !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
  }

  function markKeyboard() {
    var root = document.documentElement;
    if (!hasClass(root, 'hubb-kb')) root.setAttribute('class', ((root.getAttribute('class') || '') + ' hubb-kb').replace(/^\s+/, ''));
  }

  function unmarkKeyboard() {
    var root = document.documentElement;
    if (hasClass(root, 'hubb-kb')) root.setAttribute('class', (root.getAttribute('class') || '').replace(/\s*hubb-kb/g, ''));
  }

  function isBackKey(e) {
    return e.keyCode === 461 || e.keyCode === 10009 || e.key === 'BrowserBack' || e.key === 'GoBack';
  }

  function isRange(node) {
    return node.tagName.toUpperCase() === 'INPUT' && node.type === 'range';
  }

  /** Remote friendly "Enter" on a <select>: move to the next option and fire change. */
  function cycleSelect(sel) {
    if (!sel.options || !sel.options.length) return;
    sel.selectedIndex = (sel.selectedIndex + 1) % sel.options.length;
    var ev = document.createEvent('Event');
    ev.initEvent('change', true, false);
    sel.dispatchEvent(ev);
    ev = document.createEvent('Event');
    ev.initEvent('input', true, false);
    sel.dispatchEvent(ev);
  }

  function swallow(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
  }

  /** Move focus within `list` for a direction key. Returns true when the event was consumed. */
  function navigate(e, list, dir) {
    var cur = document.activeElement;
    var idx = list.indexOf(cur);
    if (idx === -1) {
      // Nothing of ours has focus yet: the first arrow press focuses the first element.
      focusEl(list[0]);
      markKeyboard();
      return true;
    }
    // A range slider keeps Left/Right for itself.
    if (isRange(cur) && (dir === 'left' || dir === 'right')) return false;
    markKeyboard();
    var next = pick(cur, list, dir);
    if (next) {
      focusEl(next);
    } else if (dir === 'up') {
      focusPill();
    }
    return true;
  }

  /* ---------- key handlers ---------- */

  function onKeyCapture(e) {
    if (isBackKey(e)) {
      swallow(e);
      back();
      return;
    }
    if (e.target === pill) {
      // Enter/Space on the pill follows the link; the game must not also advance.
      if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 13 || e.keyCode === 32) {
        e.stopPropagation();
        return;
      }
      var pd = dirOf(e);
      if (pd && plain(e)) {
        if (pd === 'up') {
          swallow(e);
          return;
        }
        if (player === 'vn') {
          var pl = vnCandidates();
          if (pl && pl.length) {
            swallow(e);
            pill.blur();
            focusEl(pl[0]);
            markKeyboard();
            return;
          }
        }
        // Edu: the bubble handler moves focus on from the pill; read: arrows scroll the page.
        if (player === 'read') pill.blur();
      }
      return;
    }
    if (player !== 'vn' || !plain(e)) return;

    var list = vnCandidates();
    var dir = dirOf(e);
    if (list && list.length) {
      var cur = document.activeElement;
      if (dir) {
        if (navigate(e, list, dir)) swallow(e);
        return;
      }
      if (e.key === 'Enter' || e.keyCode === 13) {
        if (list.indexOf(cur) === -1) {
          swallow(e);
          focusEl(list[0]);
          markKeyboard();
          return;
        }
        var tag = cur.tagName.toUpperCase();
        if (isRange(cur)) return;
        swallow(e);
        if (tag === 'SELECT') cycleSelect(cur);
        else cur.click();
      }
      return;
    }
    // Nothing to assist (gameplay, picture book pages): keys pass through untouched, except that
    // ArrowUp with nothing focused leads to the pill so a remote can leave the game.
    if (dir === 'up') {
      var a = document.activeElement;
      if (!a || a === document.body || a === document.documentElement) {
        if (focusPill()) swallow(e);
      }
    }
  }

  function onKeyBubble(e) {
    if (player === 'vn') return;
    if (e.defaultPrevented || !plain(e) || isBackKey(e)) return;
    var dir = dirOf(e);
    var a = document.activeElement;
    if (player === 'edu') {
      if (!dir) return;
      var tag = a && a.tagName ? a.tagName.toUpperCase() : '';
      if ((tag === 'INPUT' && !/^(button|checkbox|radio|submit)$/.test(a.type)) || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (a && a.isContentEditable) return;
      var list = eduCandidates();
      if (list) {
        if (navigate(e, list, dir)) e.preventDefault();
        return;
      }
    }
    if (dir === 'up' && (!a || a === document.body || a === document.documentElement)) {
      var top = (window.pageYOffset || document.documentElement.scrollTop || 0) <= 0;
      if (top && focusPill()) e.preventDefault();
    }
  }

  /* ---------- pointer and touch ---------- */

  function onMouseMove(e) {
    markPointer();
    if (e.clientY <= window.innerHeight * TOP_ZONE) showPill(SHOW_MS);
  }

  function onTouchStart(e) {
    markPointer();
    var t = e.touches && e.touches[0];
    if (t && t.clientY <= window.innerHeight * TOP_ZONE) showPill(SHOW_MS);
  }

  function markPointer() {
    unmarkKeyboard();
  }

  function init() {
    buildPill();
    window.addEventListener('keydown', onKeyCapture, true);
    window.addEventListener('keydown', onKeyBubble, false);
    window.addEventListener('mousemove', onMouseMove, true);
    window.addEventListener('mousedown', markPointer, true);
    window.addEventListener('touchstart', onTouchStart, true);
  }

  window.__hubBridge = {
    version: VERSION,
    player: player,
    backUrl: backUrl,
    back: back,
    showPill: showPill
  };

  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
