import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { assertWritable, assertSourceOutsideRepo, upPrefix, bridgeTag, fixCssFontUrls, isMusic, recipeFor, audioPlan } from '../../scripts/lib/encode.mjs';

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

test('music gets its own audio recipe and threshold; speech and SFX keep q2 / 96k', () => {
  assert.equal(isMusic('play/g/assets/mus-menu/v1.ogg'), true);
  assert.equal(isMusic('play/b/audio/music_01.mp3'), true);
  assert.equal(isMusic('play/g/assets/sfx-click/v1.ogg'), false);
  assert.equal(isMusic('play/b/audio/voice_01.ogg'), false);
  assert.equal(recipeFor('play/g/assets/mus-menu/v1.ogg'), 'ogg-music@1:q5');
  assert.equal(recipeFor('play/b/audio/music_01.mp3'), 'mp3-music@1:160k');
  assert.equal(recipeFor('play/g/assets/vo-1/v1.ogg'), 'ogg@1:q2');
  assert.equal(audioPlan('play/g/assets/mus-menu/v1.ogg', 'ogg').threshold, 192);
  assert.equal(audioPlan('play/g/assets/vo-1/v1.ogg', 'ogg').threshold, 112);
}
);
