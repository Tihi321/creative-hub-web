// Type and language filters, kept in the query string (?type=...&lang=...).
// No filter: rails. A filter: one grid of matching works with a count.
import { loadNow } from './lazy.js';

var state = { type: 'all', lang: 'all' };
var els = {};

function parse() {
  var q = location.search.replace(/^\?/, '').split('&');
  var s = { type: 'all', lang: 'all' };
  for (var i = 0; i < q.length; i++) {
    var kv = q[i].split('=');
    var k = decodeURIComponent(kv[0] || '');
    var v = decodeURIComponent((kv[1] || '').replace(/\+/g, ' '));
    if ((k === 'type' || k === 'lang') && v) s[k] = v;
  }
  return s;
}

function chipFor(kind, id) {
  return els.filters.querySelector('[data-test="filter-' + kind + '"][data-id="' + id + '"]');
}

export function hasFilter() {
  return state.type !== 'all' || state.lang !== 'all';
}

function url() {
  var q = [];
  if (state.type !== 'all') q.push('type=' + encodeURIComponent(state.type));
  if (state.lang !== 'all') q.push('lang=' + encodeURIComponent(state.lang));
  return location.pathname + (q.length ? '?' + q.join('&') : '');
}

function countHtml(n) {
  var hr = n === 1 ? 'djelo' : 'djela';
  var en = n === 1 ? 'work' : 'works';
  return '<span lang="hr">' + n + ' ' + hr + '</span><span lang="en">' + n + ' ' + en + '</span>';
}

function render() {
  var kinds = ['type', 'lang'];
  for (var i = 0; i < kinds.length; i++) {
    var chips = els.filters.querySelectorAll('[data-test="filter-' + kinds[i] + '"]');
    // an unknown value in the URL behaves like All
    if (!chipFor(kinds[i], state[kinds[i]])) state[kinds[i]] = 'all';
    for (var j = 0; j < chips.length; j++) {
      var on = chips[j].getAttribute('data-id') === state[kinds[i]];
      chips[j].className = on ? 'chip on' : 'chip';
      chips[j].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }
  var filtered = hasFilter();
  els.rails.hidden = filtered;
  els.results.hidden = !filtered;
  if (!filtered) return;

  var grid = els.grid;
  var old = grid.querySelectorAll('.tile');
  for (var o = 0; o < old.length; o++) grid.removeChild(old[o]);
  var n = 0;
  var ids = els.order;
  for (var k = 0; k < ids.length; k++) {
    var src = els.rails.querySelector('.tile[data-work="' + ids[k] + '"]');
    if (!src) continue;
    var types = ' ' + src.getAttribute('data-types') + ' ';
    var langs = ' ' + src.getAttribute('data-langs') + ' ';
    if (state.type !== 'all' && types.indexOf(' ' + state.type + ' ') < 0) continue;
    if (state.lang !== 'all' && langs.indexOf(' ' + state.lang + ' ') < 0) continue;
    var tile = src.cloneNode(true);
    tile.setAttribute('data-rail', 'grid');
    grid.appendChild(tile);
    n++;
  }
  els.count.innerHTML = countHtml(n);
  els.empty.hidden = n !== 0;
  grid.hidden = n === 0;
  var beams = document.querySelectorAll('.beam.on');
  for (var b = 0; b < beams.length; b++) beams[b].className = 'beam';
  loadNow(grid);
}

function set(kind, id, push) {
  state[kind] = id;
  if (push) history.pushState(null, '', url());
  render();
}

export function clearFilter() {
  state = { type: 'all', lang: 'all' };
  history.pushState(null, '', url());
  render();
  var chip = chipFor('type', 'all');
  if (chip) chip.focus();
}

export function initFilters(order) {
  els.filters = document.getElementById('filters');
  els.rails = document.getElementById('rails');
  els.results = document.getElementById('results');
  els.grid = document.getElementById('grid');
  els.count = document.getElementById('results-count');
  els.empty = document.getElementById('results-empty');
  els.order = order;
  if (!els.filters) return;
  els.filters.addEventListener('click', function (e) {
    var chip = e.target.closest ? e.target.closest('.chip') : null;
    if (!chip) return;
    set(chip.getAttribute('data-test') === 'filter-type' ? 'type' : 'lang', chip.getAttribute('data-id'), true);
  });
  var showAll = document.getElementById('show-all');
  if (showAll) {
    showAll.addEventListener('click', function () {
      clearFilter();
    });
  }
  window.addEventListener('popstate', function () {
    state = parse();
    render();
  });
  state = parse();
  render();
}
