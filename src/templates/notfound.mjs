import { t } from './lib.mjs';

export function notFoundPage() {
  return `<main class="doc">
<h1 class="doc-title">${t('not_found_title')}</h1>
<p class="doc-lead">${t('not_found_text')}</p>
<p><a class="btn primary" data-nav href="./">${t('home_link')}</a></p>
</main>`;
}
