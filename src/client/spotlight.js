// Spotlight panel: shows the focused work. Follows keyboard/remote focus, never touch or mouse taps.
import { bi } from './util.js';

var data, el = {}, current = null;

function metaHtml(w) {
  var langs = '';
  for (var i = 0; i < w.l.length; i++) langs += '<span class="lc">' + w.l[i] + '</span>';
  var types = [];
  for (var j = 0; j < w.ty.length; j++) types.push(bi(data.ty[w.ty[j]]));
  return '<span class="spot-langs">' + langs + '</span>' + types.join('<span class="sep">, </span>');
}

export function showWork(id) {
  var w = data.w[id];
  if (!w || id === current) return;
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

export function initSpotlight(d) {
  data = d;
  el.body = document.getElementById('spot-body');
  if (!el.body) return;
  el.bg = document.getElementById('spot-bg');
  el.img = el.bg.querySelector('img');
  el.title = document.getElementById('spot-title');
  el.meta = document.getElementById('spot-meta');
  el.blurb = document.getElementById('spot-blurb');
  el.action = document.getElementById('spot-action');
  current = d.f;
  document.addEventListener('focusin', function (e) {
    if (document.documentElement.classList.contains('pointer')) return;
    var tile = e.target.closest ? e.target.closest('.tile') : null;
    if (tile) showWork(tile.getAttribute('data-work'));
  });
}
