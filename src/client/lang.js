// UI language toggle (hr/en), remembered in localStorage['chw.lang'].
import { safeSet } from './util.js';

export function setLang(l) {
  var d = document.documentElement;
  d.setAttribute('data-ui', l);
  d.setAttribute('lang', l);
  safeSet(localStorage, 'chw.lang', l);
  var t = document.querySelector('title[data-hr]');
  if (t) document.title = t.getAttribute('data-' + l);
}

export function initLang() {
  var btn = document.querySelector('[data-test="lang-toggle"]');
  if (!btn) return;
  btn.addEventListener('click', function () {
    setLang(document.documentElement.getAttribute('data-ui') === 'hr' ? 'en' : 'hr');
  });
}
