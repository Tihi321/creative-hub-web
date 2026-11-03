import { bi, t } from './lib.mjs';

const P = (en, hr) => `<p>${bi({ en, hr })}</p>`;
const H = (en, hr) => `<h2 class="doc-h">${bi({ en, hr })}</h2>`;
const row = (en, hr, aEn, aHr) =>
  `<div class="keys-row"><dt>${bi({ en, hr })}</dt><dd>${bi({ en: aEn, hr: aHr })}</dd></div>`;

export function aboutPage() {
  const prefix = '../';
  return `<main class="doc">
<a class="back" data-nav href="${prefix}">${t('library')}</a>
<h1 class="doc-title">${t('about')}</h1>
${H('What this is', 'Što je ovo')}
${P('A small library of stories, picture books, games and learning games made at home, many of them set on the Croatian coast. You can play the games here, read the books in the browser or download them.', 'Mala knjižnica priča, slikovnica, igara i igara za učenje napravljenih kod kuće, mnoge od njih smještene na hrvatsku obalu. Igre možeš igrati ovdje, knjige čitati u pregledniku ili ih preuzeti.')}
${P('Most works come in Croatian and English. A few also have German.', 'Većina djela dolazi na hrvatskom i engleskom. Nekoliko ih ima i na njemačkom.')}
${H('How it was made', 'Kako je napravljeno')}
${P('The books are written and laid out in Scriptorium, and Book Translator makes the Croatian editions. Visual novels and picture books are built in VN Studio, learning games in Edu Studio. Pictures, music and voices come from local tools running on one computer. Nothing here is generated while you watch: every page is a plain file.', 'Knjige se pišu i slažu u Scriptoriumu, a hrvatska izdanja radi Book Translator. Vizualni romani i slikovnice nastaju u VN Studiju, igre za učenje u Edu Studiju. Slike, glazba i glasovi dolaze iz lokalnih alata na jednom računalu. Ništa se ne stvara dok gledaš: svaka stranica je obična datoteka.')}
${H('Controls', 'Upravljanje')}
<dl class="keys">
${row('TV remote', 'Daljinski upravljač', 'Arrow keys move between covers and buttons. OK opens. Back returns to the previous page.', 'Strelice se kreću među naslovnicama i gumbima. OK otvara. Natrag vraća na prethodnu stranicu.')}
${row('Touch', 'Dodir', 'Swipe a row sideways to see more. Tap a cover to open it.', 'Povuci red u stranu za više. Dodirni naslovnicu da je otvoriš.')}
${row('Keyboard', 'Tipkovnica', 'Arrow keys move, Enter opens, Escape goes back.', 'Strelice se kreću, Enter otvara, Escape vraća natrag.')}
${row('Inside a game', 'U igri', 'A Library button appears at the top left when you move to the top of the screen. The Back key on a TV remote also returns to the work page.', 'Gumb Knjižnica pojavi se gore lijevo kad se pomakneš prema vrhu zaslona. Tipka Natrag na daljinskom također vraća na stranicu djela.')}
</dl>
${H('Browser notes', 'Napomene o pregledniku')}
${P('The site is built for TV browsers from about 2018 on, tablets and computers. Games load many pictures and sounds, so the first start can take a while on a TV. If a game stays silent, press a key or tap once: browsers only play sound after a first touch.', 'Stranica je napravljena za TV preglednike od otprilike 2018., tablete i računala. Igre učitavaju mnogo slika i zvukova pa prvi početak na televizoru može potrajati. Ako igra šuti, pritisni tipku ili dodirni zaslon: preglednici puštaju zvuk tek nakon prvog dodira.')}
${P('Saved progress and settings stay in this browser on this device.', 'Spremljeni napredak i postavke ostaju u ovom pregledniku na ovom uređaju.')}
</main>`;
}
