// Home page: spotlight, filter row, rails, and the (initially empty) filtered grid.
import {
  esc, bi, t, TYPE_LABELS, RAIL_TYPES, FILTER_LANGS, shelfTypes, typeLabel, typeList, langChips,
  coverHtml, coverFile, itemHref, playHref, readHref, jsonForScript, strings,
} from './lib.mjs';

function action(work, prefix) {
  if (work.plays && work.plays.length) return { k: 'play', href: playHref(work.plays[0], prefix) };
  if (work.reads && work.reads.length) return { k: 'read', href: readHref(work.reads[0], prefix) };
  return { k: 'open', href: itemHref(work, prefix) };
}

export function tileHtml(work, ctx, rail, prefix) {
  const types = shelfTypes(ctx.deriveTypes(work));
  const langs = ctx.deriveLanguages(work);
  return `<a class="tile" data-nav data-test="tile" data-work="${esc(work.id)}" data-types="${types.join(' ')}" data-langs="${langs.join(' ')}" data-rail="${rail}" href="${itemHref(work, prefix)}">` +
    coverHtml(work, ctx, { size: 480, prefix }) +
    `<span class="tile-title">${bi(work.title)}</span>` +
    `<span class="tile-langs">${langChips(langs)}</span></a>`;
}

function spotlightData(work, ctx, prefix) {
  const types = ctx.deriveTypes(work);
  const bg = coverFile(work, ctx);
  const a = action(work, prefix);
  return {
    t: work.title,
    b: work.blurb,
    l: ctx.deriveLanguages(work),
    ty: types,
    bg: bg ? prefix + bg : null,
    a,
  };
}

export function homePage(ctx) {
  const { site, works } = ctx;
  const prefix = '';
  const featured = works.find((w) => w.id === site.featured) || works[0];
  const fd = spotlightData(featured, ctx, prefix);
  const fTypes = ctx.deriveTypes(featured);

  const data = { w: {}, s: {}, ty: {} };
  for (const w of works) data.w[w.id] = spotlightData(w, ctx, prefix);
  for (const k of ['play', 'read', 'open']) data.s[k] = strings[k];
  for (const k of Object.keys(TYPE_LABELS)) data.ty[k] = TYPE_LABELS[k].one;
  data.plural = Object.fromEntries(RAIL_TYPES.map((k) => [k, TYPE_LABELS[k].many]));
  data.f = site.featured;

  const typeChips = ['<div class="chip-row" data-nav-group data-nav-axis="x" data-nav-join data-group="filter-type">',
    `<button class="chip" type="button" data-nav data-test="filter-type" data-id="all">${t('filter_all')}</button>`,
    ...RAIL_TYPES.filter((ty) => works.some((w) => shelfTypes(ctx.deriveTypes(w)).includes(ty))).map(
      (ty) => `<button class="chip" type="button" data-nav data-test="filter-type" data-id="${ty}">${bi(typeLabel(ty, true))}</button>`,
    ),
    '</div>',
  ].join('\n');
  const present = new Set(works.flatMap((w) => ctx.deriveLanguages(w)));
  const langChipsHtml = ['<div class="chip-row" data-nav-group data-nav-axis="x" data-nav-join data-group="filter-lang">',
    `<button class="chip" type="button" data-nav data-test="filter-lang" data-id="all">${t('filter_all')}</button>`,
    ...FILTER_LANGS.filter((l) => present.has(l.id)).map(
      (l) => `<button class="chip" type="button" data-nav data-test="filter-lang" data-id="${l.id}">${esc(l.name)}</button>`,
    ),
    '</div>',
  ].join('\n');

  const rails = RAIL_TYPES.map((ty) => {
    const list = works.filter((w) => shelfTypes(ctx.deriveTypes(w)).includes(ty));
    if (!list.length) return '';
    return `<section class="rail-section" data-rail-section="${ty}">
<h2 class="rail-title">${bi(typeLabel(ty, true))}</h2>
<div class="rail-scroller" data-nav-group data-nav-axis="x" data-rail="${ty}">
<div class="rail-track"><i class="beam" aria-hidden="true"></i>
${list.map((w) => tileHtml(w, ctx, ty, prefix)).join('\n')}
</div>
</div>
</section>`;
  }).join('\n');

  const content = `<main>
<h1 class="sr">${bi(site.title)}</h1>
<section class="spot" id="spot">
<div class="spot-bg" id="spot-bg" aria-hidden="true"><img alt=""${fd.bg ? ` src="${esc(fd.bg)}"` : ''}></div>
<div class="spot-body" id="spot-body">
<h2 class="spot-title${Math.max(featured.title.en.length, featured.title.hr.length) > 26 ? ' long' : ''}" id="spot-title">${bi(featured.title)}</h2>
<p class="spot-meta" id="spot-meta"><span class="spot-langs">${langChips(fd.l)}</span>${typeList(fTypes)}</p>
<p class="spot-blurb" id="spot-blurb">${bi(featured.blurb)}</p>
<div class="spot-actions" data-nav-group data-nav-axis="x" data-group="spotlight">
<a class="btn primary" id="spot-action" data-nav data-test="spotlight-action" data-work="${esc(featured.id)}" href="${esc(fd.a.href)}">${t(fd.a.k)}</a>
</div>
</div>
</section>
<div class="spot-mini" id="spot-mini" aria-hidden="true">
<span class="spot-mini-cover" id="spot-mini-cover">${fd.bg ? `<img alt="" src="${esc(fd.bg)}">` : coverHtml(featured, ctx, { size: 480, prefix }).replace(/^<span class="cover">|<\/span>$/g, '')}</span>
<div class="spot-mini-text">
<p class="spot-mini-title" id="spot-mini-title">${bi(featured.title)}</p>
<p class="spot-mini-meta" id="spot-mini-meta"><span class="spot-langs">${langChips(fd.l)}</span>${typeList(fTypes)}</p>
<p class="spot-mini-blurb" id="spot-mini-blurb">${bi(featured.blurb)}</p>
</div>
</div>
<div class="filters" id="filters">
${typeChips}
<span class="filters-gap" aria-hidden="true"></span>
${langChipsHtml}
</div>
<div id="rails">
${rails}
</div>
<section class="results" id="results" hidden>
<p class="results-count" id="results-count"></p>
<div class="grid-wrap" id="grid" data-nav-group data-nav-axis="grid" data-rail="grid"><i class="beam" aria-hidden="true"></i></div>
<div class="results-empty" id="results-empty" hidden>
<p>${t('no_results')}</p>
<button class="btn" type="button" id="show-all" data-nav>${t('show_all')}</button>
</div>
</section>
</main>
<script type="application/json" id="works-data">${jsonForScript(data)}</script>`;
  return content;
}
