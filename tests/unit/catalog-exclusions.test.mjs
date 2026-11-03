import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const raw = fs.readFileSync(new URL('../../content/catalog.json', import.meta.url), 'utf8');
const catalog = JSON.parse(raw);

// A1: smoke, test and pilot runs, the Rovelli EPUBs and the video are not in the catalog.
test('catalog has no excluded slugs or files', () => {
  const slugs = [];
  for (const w of catalog.works) {
    slugs.push(w.id);
    for (const e of [...(w.plays || []), ...(w.reads || []), ...(w.downloads || [])]) {
      slugs.push(e.id);
      // `alias:<slug>/...` -> slug
      if (e.source) slugs.push(String(e.source).replace(/^[^:]*:/, '').split('/')[0]);
    }
  }
  const bad = slugs.filter((s) => s && (/^hub/i.test(s) || /-(smoke|pilot|test)$/i.test(s)));
  assert.deepEqual(bad, []);
  assert.doesNotMatch(raw, /rovelli|final\.mp4/i);
});
