import { readData } from './util.js';
import { initLang } from './lang.js';
import { initLazy } from './lazy.js';
import { initFilters } from './filters.js';
import { initSpotlight } from './spotlight.js';
import { initNav } from './nav.js';

var data = readData();
initLang();
initLazy();
if (data) {
  initFilters(Object.keys(data.w));
  initSpotlight(data);
}
initNav();
