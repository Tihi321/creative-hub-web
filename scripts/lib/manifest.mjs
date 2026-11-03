// Publish manifest: content/publish-manifest.json, written by scripts/publish.mjs, read by build-site.
//
// Deterministic: keys sorted, 2-space JSON, trailing newline, no timestamps.
//
// {
//   "version": 1,
//   "items": {                       // keyed by playId | readId | downloadId
//     "<id>": {
//       "kind": "play" | "read" | "download",
//       "workId": "<work id>",
//       "path": "play/<id>/" | "read/<id>/" | "files/<workId>/<filename>",   // public-relative
//       "size": <bytes of all published files of the item>,
//       "files": <file count>,
//       "smoke": "ok" | "failed" | "skipped" | null    // plays only; null for reads and downloads
//     }
//   },
//   "covers": {                      // keyed by workId; absent when the work has no published cover
//     "<workId>": { "type": "webp", "480": "covers/<id>-480.webp", "960": "covers/<id>-960.webp" }
//             | { "type": "svg", "path": "covers/<id>.svg" }
//   },
//   "files": {                       // keyed by public-relative output path
//     "<path>": {
//       "src": "<alias form, e.g. vn:slug/game/game/player.js>",   // absent for generated covers
//       "srcSize", "srcMtimeMs", "srcHash" (sha256),
//       "recipe": "<name>@<version>[:params]",
//       "outHash" (sha256), "outSize",
//       "jsTarget": "chrome61" | "chrome64" | "chrome80"            // .js files only
//     }
//   }
// }
import fs from 'node:fs';
import path from 'node:path';

export function emptyManifest() {
  return { version: 1, items: {}, covers: {}, files: {} };
}

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === 'object') {
    const out = {};
    for (const k of Object.keys(value).sort()) {
      if (value[k] !== undefined) out[k] = sortKeys(value[k]);
    }
    return out;
  }
  return value;
}

export function stringifyManifest(manifest) {
  return JSON.stringify(sortKeys(manifest), null, 2) + '\n';
}

export function loadManifest(file) {
  if (!fs.existsSync(file)) return emptyManifest();
  const m = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (m.version !== 1) throw new Error(`${file}: unsupported manifest version ${m.version}`);
  return { ...emptyManifest(), ...m };
}

// Writes only when the text differs. Returns true when the file was written.
export function writeManifestIfChanged(file, manifest) {
  const text = stringifyManifest(manifest);
  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === text) return false;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
  return true;
}
