// Work page: cover, text, actions (plays, reads), downloads grouped.
import {
  esc, bi, t, strings, typeList, langName, coverHtml, fmtSize, playHref, readHref, downloadHref, langChips,
} from './lib.mjs';

export function downloadRow(work, dl, ctx, prefix) {
  const entry = ctx.manifest.items && ctx.manifest.items[dl.id];
  const size = entry ? fmtSize(entry.size) : null;
  const fmt = dl.format.toUpperCase();
  const meta = size ? `${fmt}, ${size}` : fmt;
  const metaHtml = size ? esc(meta) : `${esc(fmt)}, ${t('size_unknown')}`;
  return `<li><a class="dl-row" data-nav data-test="download" data-id="${esc(dl.id)}" data-format="${esc(dl.format)}"${entry ? ` data-size="${entry.size}"` : ''} href="${esc(downloadHref(work, dl, prefix))}" download="${esc(dl.filename)}">` +
    `<span class="dl-label">${bi(dl.label)}</span>` +
    `<span class="dl-lang">${bi(langName(dl.language))}</span>` +
    `<span class="dl-meta">${metaHtml}</span></a></li>`;
}

export function groupTitle(group) {
  const s = strings[`group_${group}`];
  return s ? bi(s) : esc(group);
}

// Group order: first appearance in the catalog; rows keep catalog order inside a group.
export function groupDownloads(downloads) {
  const groups = [];
  for (const d of downloads) {
    let g = groups.find((x) => x.group === d.group);
    if (!g) groups.push((g = { group: d.group, rows: [] }));
    g.rows.push(d);
  }
  return groups;
}

export function itemPage(work, ctx) {
  const prefix = '../../';
  const types = ctx.deriveTypes(work);
  const langs = ctx.deriveLanguages(work);
  const plays = (work.plays || [])
    .map(
      (p) => `<a class="btn primary" data-nav data-test="play" data-id="${esc(p.id)}" href="${esc(playHref(p, prefix))}">${t('play')}<span class="btn-sep"> </span><span class="btn-label">${bi(p.label)}</span><span class="btn-langs">${langChips(p.languages)}</span></a>`,
    )
    .join('\n');
  const reads = (work.reads || [])
    .map(
      (r) => `<a class="btn" data-nav data-test="read" data-id="${esc(r.id)}" href="${esc(readHref(r, prefix))}">${t('read')}<span class="btn-sep"> </span><span class="btn-label">${bi(r.label)}</span><span class="btn-langs">${langChips(r.languages)}</span></a>`,
    )
    .join('\n');
  const groups = groupDownloads(work.downloads || [])
    .map(
      (g) => `<div class="dl-group" data-group="${esc(g.group)}">
<h3 class="dl-title">${groupTitle(g.group)}</h3>
<ul class="dl-list">
${g.rows.map((d) => downloadRow(work, d, ctx, prefix)).join('\n')}
</ul>
</div>`,
    )
    .join('\n');

  return `<main class="work">
<a class="back" data-nav href="${prefix}">${t('library')}</a>
<div class="work-grid">
<div class="work-cover">${coverHtml(work, ctx, { size: 960, prefix })}</div>
<div class="work-body">
<h1 class="work-title">${bi(work.title)}</h1>
<p class="work-meta"><span class="work-langs">${langs.map((c) => `<span class="lc">${bi(langName(c))}</span>`).join('')}</span>${typeList(types)}</p>
<p class="work-blurb">${bi(work.blurb)}</p>
${plays ? `<div class="actions">\n${plays}\n</div>` : ''}
${reads ? `<div class="actions">\n${reads}\n</div>` : ''}
</div>
</div>
${groups ? `<section class="downloads" aria-labelledby="dl-h"><h2 class="rail-title" id="dl-h">${t('downloads')}</h2>\n${groups}\n</section>` : ''}
</main>`;
}
