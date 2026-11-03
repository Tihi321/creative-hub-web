// Cover images load when their rail or grid nears the screen (IntersectionObserver, eager fallback).
function load(root) {
  var imgs = root.querySelectorAll('img[data-src]');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    img.src = img.getAttribute('data-src');
    img.removeAttribute('data-src');
  }
}

var io = null;

export function observeLazy(root) {
  var holders = (root || document).querySelectorAll('.rail-scroller, .grid-wrap, .work-cover');
  for (var i = 0; i < holders.length; i++) {
    if (io) io.observe(holders[i]); else load(holders[i]);
  }
}

export function loadNow(el) {
  var holder = el.closest ? el.closest('.rail-scroller, .grid-wrap, .work-cover') : null;
  if (holder) load(holder);
}

export function initLazy() {
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          load(entries[i].target);
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: '400px 0px' });
  }
  observeLazy(document);
}
