# creative-hub-web

A static library site for the creative hub's finished stories, picture books, choice games,
learning games and books, published on GitHub Pages at
`https://tihi321.github.io/creative-hub-web/`. It is made to be used from a sofa with a TV
remote, as well as on a tablet or a computer, in Croatian and English.

- `content/catalog.json` is the source of truth: works, their plays, online readers and downloads.
- `npm run publish` copies the builds and files from the tool folders into `public/`
  (re-encoded copies, never touching the originals) and writes `content/publish-manifest.json`.
- `npm run build` renders the pages from the catalog and the manifest into `dist/`.
- `npm run check` checks links (exact case), game asset references, old-browser syntax,
  banned CSS features and the size budget.
- GitHub Actions (`.github/workflows/pages.yml`) builds, checks and deploys on a push to `master`.
  It never runs `publish`: `public/` is committed.

## Setup

Node 24 (`.nvmrc`) and npm. ffmpeg on PATH for `publish`.

```sh
npm ci
npx playwright install chromium   # only for publish's smoke check and the e2e tests
```

The source folders are named by aliases (`vn`, `scriptorium`, `translator`, `edu`).
`content/sources.example.json` only holds placeholders, so publishing needs your own paths: copy it to
`content/sources.local.json` (ignored by git) and replace each `<path to ...>` with the real folder on
your machine. Building and checking the site do not need it; only `npm run publish` does.

## Add a work

1. Add an entry to `works` in `content/catalog.json` (see an existing work for the shape):
   - `id`: lowercase letters, digits and dashes, unique across works, plays, reads and downloads.
   - `title` and `blurb` in `en` and `hr`; `order` sets its place in the rails.
   - `cover` (optional, e.g. `scriptorium:<slug>/out/cover.png`); without one a cover is generated.
   - `plays`: `type` is `visual-novel`, `picture-book`, `choice-game` or `edu-game`; `player` is
     `vn` or `edu`; `source` is the build folder (`vn:<slug>/game/game`, `edu:<slug>/build`).
   - `reads`: an HTML reader folder and its `entry` (`scriptorium:<slug>/out/reader`, `index.html`).
   - `downloads`: `format` `epub`, `pdf` or `docx`; `group` `book`, `gamebook` or `vn-export`;
     put a Croatian edition right after its original in the same group.
2. `node scripts/lib/catalog.mjs --check` lists every problem at once.

## Publish, build, check, push

```sh
npm run publish            # --only <workId>, --force, --dry-run, --skip-smoke, --catalog <file>
npm run build
npm run check
npm run test:e2e           # optional, Playwright over dist/
git add public content && git commit
git push origin master
```

`publish` is cached: a second run with no source change writes nothing. A play whose assets do not
resolve or that throws a page error in headless Chromium fails the smoke check and the run exits 1;
fix the build in its tool or remove the play from the catalog.

### Size budget

`site.budgetMB` in the catalog (600 MiB) caps `public/` plus 5 MiB for the site itself. Over budget,
or any file over 95 MB, `publish` exits 2 and prints the totals, the largest works and files and the
split by type. The files stay so you can look; do not commit them. Options: leave a work out, or lower
the audio bitrate (one constant in `scripts/lib/encode.mjs`, 96 kb/s today) and run
`npm run publish -- --force`.

## GitHub Pages

Repository Settings, Pages, Build and deployment, Source: GitHub Actions. Each push to `master`
deploys.

## Layout

```
content/      catalog.json, sources.example.json, publish-manifest.json, fixtures/
public/       published copies (play/, read/, files/, covers/), committed
scripts/      publish.mjs, build-site.mjs, check-site.mjs, lib/
src/          templates/, client/ (remote navigation), bridge/ (back-to-library in games),
              styles/, fonts/ (OFL), i18n/
tests/        e2e/ (Playwright), unit/
```
