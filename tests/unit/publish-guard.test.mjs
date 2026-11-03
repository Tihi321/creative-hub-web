import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { assertWritable, assertSourceOutsideRepo, upPrefix, bridgeTag, fixCssFontUrls } from '../../scripts/lib/encode.mjs';

const publicDir = path.resolve('/repo/public');
const manifestPath = path.resolve('/repo/content/publish-manifest.json');

test('path guard: outputs stay inside public/ or are the manifest, sources stay outside the repo', () => {
  assert.doesNotThrow(() => assertWritable('/repo/public/play/x/index.html', { publicDir, manifestPath }));
  assert.doesNotThrow(() => assertWritable(manifestPath, { publicDir, manifestPath }));
  assert.throws(() => assertWritable('/repo/public/../src/x.js', { publicDir, manifestPath }));
  assert.throws(() => assertWritable('/repo/public', { publicDir, manifestPath }));
  assert.throws(() => assertWritable('/elsewhere/file', { publicDir, manifestPath }));
  assert.throws(() => assertSourceOutsideRepo('/repo/content/x', '/repo'));
  assert.doesNotThrow(() => assertSourceOutsideRepo('/other/books/x', '/repo'));
});

test('bridge prefix follows the file depth under the site root', () => {
  assert.equal(upPrefix('play/x/index.html'), '../../');
  assert.equal(upPrefix('read/x/text/ch01.xhtml'), '../../../');
  assert.equal(
    bridgeTag('read/x/text/ch01.xhtml', { player: 'read', workId: 'w' }),
    '<script src="../../../assets/hub-bridge.js" data-player="read" data-back="../../../item/w/"></script>',
  );
  assert.equal(
    bridgeTag('play/x/index.html', { player: 'vn', workId: 'w' }),
    '<script src="../../assets/hub-bridge.js" data-player="vn" data-back="../../item/w/"></script>',
  );
});

test('play CSS: a font url that only resolves without its leading fonts/ is rewritten, others stay', () => {
  const exists = (p) => p === 'X.ttf' || p === 'fonts/Y.ttf';
  const css = 'a{src:url("fonts/X.ttf")} b{src:url(fonts/Y.ttf)} c{src:url(data:font/ttf;base64,AA)} d{src:url(fonts/Z.ttf)}';
  const r = fixCssFontUrls(css, exists);
  assert.equal(r.changed, 1);
  assert.equal(r.css, 'a{src:url("X.ttf")} b{src:url(fonts/Y.ttf)} c{src:url(data:font/ttf;base64,AA)} d{src:url(fonts/Z.ttf)}');
});
