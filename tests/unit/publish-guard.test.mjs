import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { assertWritable, assertSourceOutsideRepo, upPrefix, bridgeTag } from '../../scripts/lib/encode.mjs';

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
