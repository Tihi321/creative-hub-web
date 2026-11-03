// Small shared helpers.
export function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Both languages as spans; the site CSS hides the one that is not the UI language.
export function bi(obj) {
  return '<span lang="hr">' + esc(obj.hr || obj.en) + '</span><span lang="en">' + esc(obj.en || obj.hr) + '</span>';
}

export function reducedMotion() {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

export function safeGet(store, key) {
  try { return store.getItem(key); } catch (e) { return null; }
}
export function safeSet(store, key, value) {
  try { store.setItem(key, value); } catch (e) { /* storage unavailable */ }
}

export function readData() {
  var el = document.getElementById('works-data');
  if (!el) return null;
  try { return JSON.parse(el.textContent); } catch (e) { return null; }
}
