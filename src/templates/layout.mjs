// Page shell: head, header, main slot, script.
import { esc, t, bi, prefixFor } from './lib.mjs';

const HEAD_SCRIPT = `(function(){var d=document.documentElement,l,u=navigator.userAgent;try{l=localStorage.getItem('chw.lang')}catch(e){}if(l!=='hr'&&l!=='en'){l=/^hr/i.test(navigator.language||'')?'hr':'en'}d.setAttribute('data-ui',l);d.setAttribute('lang',l);d.className='js'+(/Tizen|Web0S|webOS|SMART-TV|SmartTV|BRAVIA|HbbTV|AFT|CrKey|NetCast/i.test(u)?' tv':'');var e=document.querySelector('title[data-hr]');if(e){document.title=e.getAttribute('data-'+l)}})();`;

// 404.html is served for any missing path at any depth, so it finds the site root at run time.
const BASE_SCRIPT = `(function(){var p=location.pathname.split('/'),h=location.hostname,b=/github\\.io$/.test(h)&&p[1]?'/'+p[1]+'/':'/';document.write('<base href="'+b+'">')})();`;

export function layout({ site, depth, page, title, content, is404 = false }) {
  const prefix = prefixFor(depth);
  const home = prefix || './';
  const siteTitle = site.title;
  const docTitle = title
    ? { hr: `${title.hr || title.en} - ${siteTitle.hr}`, en: `${title.en || title.hr} - ${siteTitle.en}` }
    : { hr: siteTitle.hr, en: siteTitle.en };
  return `<!doctype html>
<html lang="en" data-ui="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="theme-color" content="#123247">
<title data-hr="${esc(docTitle.hr)}" data-en="${esc(docTitle.en)}">${esc(docTitle.en)}</title>
<script>${HEAD_SCRIPT}</script>
${is404 ? `<script>${BASE_SCRIPT}</script>\n` : ''}<link rel="preload" href="${prefix}assets/fonts/atkinson-hyperlegible-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${prefix}assets/fonts/bricolage-grotesque.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${prefix}assets/site.css">
</head>
<body data-page="${page}" data-home="${home}">
<div class="page">
<header class="top">
<div class="top-bar" data-nav-group data-nav-axis="x" data-group="header">
<a class="brand" data-nav href="${home}">${bi(siteTitle)}</a>
<div class="top-links">
<button class="link-btn" type="button" data-nav data-test="lang-toggle">${t('switch_to')}</button>
<a class="link-btn" data-nav href="${prefix}downloads/">${t('downloads')}</a>
<a class="link-btn" data-nav href="${prefix}about/">${t('about')}</a>
</div>
</div>
</header>
${content}
</div>
<script src="${prefix}assets/site.js"></script>
</body>
</html>
`;
}
