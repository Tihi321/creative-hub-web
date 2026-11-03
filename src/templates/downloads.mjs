// Downloads page: every file in a table, grouped by work.
import { esc, bi, t, langName, fmtSize, downloadHref, itemHref } from './lib.mjs';
import { groupDownloads, groupTitle } from './item.mjs';

export function downloadsPage(ctx) {
  const prefix = '../';
  const bodies = ctx.works
    .filter((w) => (w.downloads || []).length)
    .map((w) => {
      const rows = groupDownloads(w.downloads)
        .map((g) =>
          g.rows
            .map((d) => {
              const entry = ctx.manifest.items && ctx.manifest.items[d.id];
              const size = entry ? fmtSize(entry.size) : null;
              return `<tr data-test="download" data-id="${esc(d.id)}" data-work="${esc(w.id)}"${entry ? ` data-size="${entry.size}"` : ''}>
<td><a data-nav href="${esc(downloadHref(w, d, prefix))}" download="${esc(d.filename)}">${bi(d.label)}</a></td>
<td>${groupTitle(g.group)}</td>
<td>${bi(langName(d.language))}</td>
<td class="fmt">${esc(d.format.toUpperCase())}</td>
<td class="num">${size ? esc(size) : t('size_unknown')}</td>
</tr>`;
            })
            .join('\n'),
        )
        .join('\n');
      return `<tbody>
<tr class="dl-work"><th scope="rowgroup" colspan="5"><a data-nav href="${esc(itemHref(w, prefix))}">${bi(w.title)}</a></th></tr>
<tr class="dl-head"><th scope="col">${t('dl_edition')}</th><th scope="col">${t('dl_kind')}</th><th scope="col">${t('dl_language')}</th><th scope="col">${t('dl_format')}</th><th scope="col" class="num">${t('dl_size')}</th></tr>
${rows}
</tbody>`;
    })
    .join('\n');
  return `<main class="doc">
<a class="back" data-nav href="${prefix}">${t('library')}</a>
<h1 class="doc-title">${t('downloads')}</h1>
<p class="doc-lead">${t('dl_intro')}</p>
<div class="table-wrap"><table class="dl-table">
${bodies}
</table></div>
</main>`;
}
