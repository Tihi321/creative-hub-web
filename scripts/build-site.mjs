// Static site generator: catalog + publish manifest -> dist/.
//
//   node scripts/build-site.mjs [--catalog <path>] [--out <dir>]
//
// Writes dist/index.html, item/<id>/index.html, downloads/, about/, 404.html, .nojekyll,
// assets/site.js, assets/hub-bridge.js, assets/site.css, assets/fonts/*, and a copy of public/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { loadCatalog, deriveTypes, deriveLanguages } from './lib/catalog.mjs';
import { layout } from '../src/templates/layout.mjs';
import { homePage } from '../src/templates/home.mjs';
import { itemPage } from '../src/templates/item.mjs';
import { downloadsPage } from '../src/templates/downloads.mjs';
import { aboutPage } from '../src/templates/about.mjs';
import { notFoundPage } from '../src/templates/notfound.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const a = { catalog: null, out: 'dist' };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--catalog') a.catalog = argv[++i];
    else if (argv[i] === '--out') a.out = argv[++i];
    else throw new Error(`unknown argument: ${argv[i]}`);
  }
  return a;
}

const args = parseArgs(process.argv.slice(2));
const started = Date.now();
const warnings = [];

let catalogPath = args.catalog;
if (!catalogPath) {
  catalogPath = fs.existsSync(path.join(repoRoot, 'content/catalog.json'))
    ? 'content/catalog.json'
    : 'content/fixtures/catalog.sample.json';
}
const catalog = loadCatalog({ repoRoot, catalogPath, checkSources: false });

let manifest = { items: {}, covers: {} };
const manifestFile = path.join(repoRoot, 'content/publish-manifest.json');
if (fs.existsSync(manifestFile)) {
  manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
  manifest.items = manifest.items || {};
  manifest.covers = manifest.covers || {};
} else {
  warnings.push('content/publish-manifest.json not found: sizes shown as unknown, covers generated');
}

const works = [...catalog.works].sort(
  (a, b) => (a.order ?? 1e9) - (b.order ?? 1e9) || a.title.en.localeCompare(b.title.en),
);
const ctx = { site: catalog.site, works, manifest, deriveTypes, deriveLanguages };

const outDir = path.resolve(repoRoot, args.out);
if (path.relative(repoRoot, outDir).startsWith('..') || outDir === repoRoot) {
  throw new Error(`refusing to clean ${outDir}: output must be a folder inside the repository`);
}
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, 'assets', 'fonts'), { recursive: true });

function write(rel, text) {
  const file = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
}

// pages
write('index.html', layout({ site: ctx.site, depth: 0, page: 'home', content: homePage(ctx) }));
for (const w of works) {
  write(
    `item/${w.id}/index.html`,
    layout({ site: ctx.site, depth: 2, page: 'item', title: w.title, content: itemPage(w, ctx) }),
  );
}
write(
  'downloads/index.html',
  layout({ site: ctx.site, depth: 1, page: 'downloads', title: { hr: 'Preuzimanja', en: 'Downloads' }, content: downloadsPage(ctx) }),
);
write(
  'about/index.html',
  layout({ site: ctx.site, depth: 1, page: 'about', title: { hr: 'O stranici', en: 'About' }, content: aboutPage() }),
);
write(
  '404.html',
  layout({ site: ctx.site, depth: 0, page: 'notfound', title: { hr: 'Nije pronađeno', en: 'Not found' }, content: notFoundPage(), is404: true }),
);
write('.nojekyll', '');

// public/ copy
const publicDir = path.join(repoRoot, 'public');
if (fs.existsSync(publicDir)) fs.cpSync(publicDir, outDir, { recursive: true });

// css and fonts
fs.copyFileSync(path.join(repoRoot, 'src/styles/site.css'), path.join(outDir, 'assets/site.css'));
for (const f of fs.readdirSync(path.join(repoRoot, 'src/fonts'))) {
  if (f.endsWith('.woff2') || f.startsWith('OFL')) {
    fs.copyFileSync(path.join(repoRoot, 'src/fonts', f), path.join(outDir, 'assets/fonts', f));
  }
}

// scripts
const common = { bundle: true, format: 'iife', target: ['chrome61', 'safari12'], minify: true, legalComments: 'none', logLevel: 'warning' };
await build({ ...common, entryPoints: [path.join(repoRoot, 'src/client/main.js')], outfile: path.join(outDir, 'assets/site.js') });
const bridgeSrc = path.join(repoRoot, 'src/bridge/hub-bridge.js');
if (fs.existsSync(bridgeSrc)) {
  await build({ ...common, entryPoints: [bridgeSrc], outfile: path.join(outDir, 'assets/hub-bridge.js') });
} else {
  warnings.push('src/bridge/hub-bridge.js not found: assets/hub-bridge.js skipped');
}

for (const w of warnings) console.warn(`warning: ${w}`);
console.log(`built ${works.length} works from ${catalogPath} into ${path.relative(repoRoot, outDir) || '.'} in ${Date.now() - started} ms`);
