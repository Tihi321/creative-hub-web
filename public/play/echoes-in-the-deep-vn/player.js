(function() {
  "use strict";
  let gameData = null;
  let currentLang = "en";
  let currentEdition = null;
  let currentChapterIdx = 0;
  let currentSceneIdx = 0;
  let currentBeatIdx = -1;
  let typewriterTimer = null;
  let autoTimer = null;
  let isTyping = false;
  let currentFullText = "";
  let activeChoices = null;
  let activeEndingMsg = null;
  let activePuzzle = null;
  let activeSaveScreen = { page: 1, isSaving: false };
  let presentation = "visual-novel";
  let pictureBook = false;
  let pageIdx = 0;
  let pageVoices = [];
  let pageVoiceIdx = 0;
  let settings = {
    textSpeed: 50,
    autoDelay: 4,
    volMusic: 48,
    volSfx: 80,
    volVoice: 90,
    storyTextSize: 100,
    uiLang: "en",
    schema: 2
  };
  let voiceActive = false;
  const stateHistory = [];
  const dialogueHistory = [];
  const seenBeats = /* @__PURE__ */ new Set();
  const puzzleHandlers = /* @__PURE__ */ new Map();
  const beatHandlers = /* @__PURE__ */ new Map();
  let dom = {};
  function init() {
    cacheDom();
    setupVirtualStage();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    if (typeof ResizeObserver !== "undefined" && dom.container) {
      new ResizeObserver(handleResize).observe(dom.container);
    }
    setupAutoplayUnlock();
    handleResize();
    loadSettings();
    bindKeyboardShortcuts();
    bindUiEvents();
    if (window.VNO_GAME_DATA) {
      loadGameData(window.VNO_GAME_DATA);
    } else {
      fetch("game-data.json").then((res) => res.json()).then((data) => loadGameData(data)).catch((err) => {
        console.warn("Could not fetch game-data.json, relying on window.VNO_GAME_DATA:", err);
      });
    }
  }
  function cacheDom() {
    dom.container = document.getElementById("vno-container");
    dom.stage = document.getElementById("vno-stage");
    dom.bgImage = document.getElementById("vno-bg-image");
    dom.blackCurtain = document.getElementById("vno-black-curtain");
    dom.slotLeft = document.getElementById("vno-slot-left");
    dom.slotCenter = document.getElementById("vno-slot-center");
    dom.slotRight = document.getElementById("vno-slot-right");
    dom.cgLayer = document.getElementById("vno-cg-layer");
    dom.cgOverlay = document.getElementById("vno-cg-overlay");
    dom.insertCard = document.getElementById("vno-insert-card");
    dom.insertImg = document.getElementById("vno-insert-img");
    dom.chapterCard = document.getElementById("vno-chapter-card");
    dom.chapterCardText = document.getElementById("vno-chapter-card-text");
    dom.endingCard = document.getElementById("vno-ending-card");
    dom.endingCardText = document.getElementById("vno-ending-card-text");
    dom.pageLayer = document.getElementById("vno-page-layer");
    dom.pageImageArea = document.getElementById("vno-page-image-area");
    dom.pageImage = document.getElementById("vno-page-image");
    dom.pagePlaceholder = document.getElementById("vno-page-placeholder");
    dom.pageCaption = document.getElementById("vno-page-caption");
    dom.pageCaptionArea = document.getElementById("vno-page-caption-area");
    dom.pageCounter = document.getElementById("vno-page-counter");
    dom.pagePrev = document.getElementById("vno-page-prev");
    dom.pageNext = document.getElementById("vno-page-next");
    dom.pageReplay = document.getElementById("vno-page-replay");
    dom.pageMenu = document.getElementById("vno-page-menu");
    dom.textboxContainer = document.getElementById("vno-textbox-container");
    dom.textbox = document.getElementById("vno-textbox");
    dom.sceneTitle = document.getElementById("vno-scene-title");
    dom.namebox = document.getElementById("vno-namebox");
    dom.speakerName = document.getElementById("vno-speaker-name");
    dom.dialogueText = document.getElementById("vno-dialogue-text");
    dom.indicator = document.getElementById("vno-typewriter-indicator");
    dom.choiceOverlay = document.getElementById("vno-choice-overlay");
    dom.choiceContainer = document.getElementById("vno-choice-container");
    dom.puzzleOverlay = document.getElementById("vno-puzzle-overlay");
    dom.puzzleTitle = document.getElementById("vno-puzzle-title");
    dom.puzzleBody = document.getElementById("vno-puzzle-body");
    dom.mainMenu = document.getElementById("vno-screen-main-menu");
    dom.screenSave = document.getElementById("vno-screen-save");
    dom.screenPrefs = document.getElementById("vno-screen-prefs");
    dom.screenHistory = document.getElementById("vno-screen-history");
    dom.screenAbout = document.getElementById("vno-screen-about");
    dom.langBar = document.getElementById("vno-lang-bar");
    dom.stageLanguage = document.getElementById("vno-stage-language");
    dom.prefLanguage = document.getElementById("vno-pref-language");
    dom.prefUiLanguage = document.getElementById("vno-pref-ui-language");
    dom.prefUiLanguageRow = document.getElementById("vno-pref-row-ui-language");
    dom.prefStoryTextSize = document.getElementById("vno-pref-story-text-size");
    dom.audioMusic = document.getElementById("vno-audio-music");
    dom.audioAmbience = document.getElementById("vno-audio-ambience");
    dom.audioSfx = document.getElementById("vno-audio-sfx");
    dom.audioVoice = document.getElementById("vno-audio-voice");
  }
  function setupVirtualStage() {
    if (!dom.stage) return;
    dom.stage.style.width = "1920px";
    dom.stage.style.height = "1080px";
  }
  function handleResize() {
    if (!dom.stage) return;
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const scale = Math.min(ww / 1920, wh / 1080);
    dom.stage.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
    dom.stage.style.left = "50%";
    dom.stage.style.top = "50%";
  }
  function setupAutoplayUnlock() {
    const unlock = () => {
      if (dom.audioMusic && dom.audioMusic.paused && dom.audioMusic.src) {
        dom.audioMusic.play().catch(() => {
        });
      }
    };
    ["click", "pointerdown", "keydown"].forEach((evt) => {
      window.addEventListener(evt, unlock);
    });
  }
  function populateLanguageSelect(selectEl) {
    if (!selectEl || !gameData || !gameData.languages) return;
    selectEl.innerHTML = "";
    gameData.languages.forEach((l) => {
      const opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = l.nativeName && l.nativeName !== l.name ? l.nativeName + " (" + l.name + ")" : l.nativeName || l.name || l.code;
      if (l.code === currentLang) opt.selected = true;
      selectEl.appendChild(opt);
    });
  }
  function getUiLanguages() {
    if (!gameData) return [];
    const list = gameData.uiLanguages;
    if (!Array.isArray(list)) return [];
    return list.filter((l) => Boolean(l && l.code));
  }
  function populateUiLanguageSelect(selectEl) {
    const row = dom.prefUiLanguageRow || document.getElementById("vno-pref-row-ui-language");
    const list = getUiLanguages();
    if (!list.length) {
      if (row && row.classList) row.classList.add("vno-hidden");
      return;
    }
    if (row && row.classList) row.classList.remove("vno-hidden");
    if (!selectEl) return;
    selectEl.innerHTML = "";
    list.forEach((l) => {
      const opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = l.nativeName && l.nativeName !== l.name ? l.nativeName + " (" + l.name + ")" : l.nativeName || l.name || l.code;
      if (l.code === settings.uiLang) opt.selected = true;
      selectEl.appendChild(opt);
    });
    const label = ui("Interface Language", "Interface Language");
    selectEl.title = label;
    selectEl.setAttribute("aria-label", label);
  }
  function normalizeUiLang() {
    const list = getUiLanguages();
    if (!list.length) {
      settings.uiLang = "en";
      return;
    }
    const known = list.some((l) => l.code === settings.uiLang);
    if (!known) settings.uiLang = "en";
  }
  function updateLangBarVisibility() {
    if (!dom.langBar || !dom.langBar.classList) return;
    const count = gameData && gameData.languages ? gameData.languages.length : 0;
    if (count < 2) dom.langBar.classList.add("vno-hidden");
    else dom.langBar.classList.remove("vno-hidden");
  }
  function loadGameData(data) {
    gameData = data;
    currentLang = gameData.primaryLang || "en";
    currentEdition = gameData.editions ? gameData.editions[currentLang] : null;
    presentation = gameData.presentation === "picture-book" ? "picture-book" : "visual-novel";
    pictureBook = presentation === "picture-book";
    if (document.body && document.body.classList) {
      if (pictureBook) document.body.classList.add("vno-picturebook");
      else document.body.classList.remove("vno-picturebook");
    }
    if (pictureBook && dom.pageLayer) dom.pageLayer.classList.add("vno-hidden");
    normalizeUiLang();
    populateLanguageSelect(dom.stageLanguage);
    populateLanguageSelect(dom.prefLanguage);
    populateUiLanguageSelect(dom.prefUiLanguage);
    updateLangBarVisibility();
    applyLanguageTypography();
    applyTextScale();
    updateUiStrings();
    applyAudioVolumes();
    if (gameData.audio && gameData.audio.music && gameData.audio.music.music_01) {
      playMusic("music_01");
    }
  }
  function switchLanguage(langCode) {
    if (!gameData || !gameData.editions || !gameData.editions[langCode]) return;
    currentLang = langCode;
    currentEdition = gameData.editions[langCode];
    if (dom.stageLanguage && dom.stageLanguage.value !== langCode) {
      dom.stageLanguage.value = langCode;
    }
    if (dom.prefLanguage && dom.prefLanguage.value !== langCode) {
      dom.prefLanguage.value = langCode;
    }
    applyLanguageTypography();
    updateUiStrings();
    refreshActiveScreens();
  }
  function switchUiLanguage(code) {
    const list = getUiLanguages();
    if (list.length) {
      if (!list.some((l) => l.code === code)) return;
    } else if (code !== "en") {
      return;
    }
    settings.uiLang = code;
    saveSettings();
    if (dom.prefUiLanguage && dom.prefUiLanguage.value !== code) {
      dom.prefUiLanguage.value = code;
    }
    updateUiStrings();
    refreshActiveScreens();
  }
  function applyLanguageTypography() {
    if (!gameData) return;
    const isRtl = Boolean(
      gameData.rtlLangs && gameData.rtlLangs.includes(currentLang) || gameData.languages && gameData.languages.some((l) => l.code === currentLang && l.rtl)
    );
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentLang);
    const langEntry = gameData.languages ? gameData.languages.find((l) => l.code === currentLang) : null;
    const fontFamily = langEntry && langEntry.fontFamily || "var(--vno-font-text, sans-serif)";
    if (dom.stage) dom.stage.style.fontFamily = fontFamily;
    if (dom.dialogueText) dom.dialogueText.style.fontFamily = fontFamily;
  }
  function uiTable() {
    const list = getUiLanguages();
    if (list.length) {
      const entry = list.find((l) => l.code === settings.uiLang);
      return entry && entry.ui ? entry.ui : {};
    }
    if (currentEdition && currentEdition.ui) return currentEdition.ui;
    return {};
  }
  function ui(key, fallback) {
    const table = uiTable();
    if (table && table[key]) return table[key];
    return fallback !== void 0 ? fallback : key;
  }
  function setElemText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function updateUiStrings() {
    if (!gameData) return;
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute("data-ui-lang", settings.uiLang);
    }
    const bookTitle = currentEdition && currentEdition.title || gameData.title || "Visual Novel";
    document.title = bookTitle;
    setElemText("vno-mm-title", bookTitle);
    setElemText("vno-about-book-title", bookTitle);
    setElemText("vno-mm-start", ui("Start", "Start"));
    setElemText("vno-mm-load", ui("Load", "Load"));
    setElemText("vno-mm-prefs", ui("Preferences", "Preferences"));
    setElemText("vno-mm-about", ui("About", "About"));
    setElemText("vno-qm-back", ui("Back", "Back"));
    setElemText("vno-qm-history", ui("History", "History"));
    setElemText("vno-qm-skip", ui("Skip", "Skip"));
    setElemText("vno-qm-auto", ui("Auto", "Auto"));
    setElemText("vno-qm-save", ui("Save", "Save"));
    setElemText("vno-qm-qsave", ui("Q.Save", "Q.Save"));
    setElemText("vno-qm-qload", ui("Q.Load", "Q.Load"));
    setElemText("vno-qm-prefs", ui("Prefs", "Prefs"));
    setElemText("vno-qm-menu", ui("Menu", "Menu"));
    setElemText("vno-btn-restart", ui("Start again", "Restart"));
    setElemText("vno-btn-ending-menu", ui("Main Menu", "Main Menu"));
    if (pictureBook) {
      setElemText("vno-page-menu", ui("Menu", "Menu"));
      const readAloud = ui("Read aloud", "Read aloud");
      if (dom.pageReplay) {
        dom.pageReplay.title = readAloud;
        dom.pageReplay.setAttribute("aria-label", readAloud);
      }
      if (dom.pagePrev) dom.pagePrev.title = ui("Previous", "Previous");
      if (dom.pageNext) dom.pageNext.title = ui("Next", "Next");
    }
    setElemText("vno-history-title", ui("History", "History"));
    setElemText("vno-prefs-title", ui("Preferences", "Preferences"));
    setElemText("vno-about-title", ui("About", "About"));
    setElemText("vno-pref-h-display", ui("Display", "Display"));
    setElemText("vno-pref-h-language", ui("Language", "Language"));
    setElemText("vno-pref-h-text", ui("Text", "Text"));
    setElemText("vno-pref-h-audio", ui("Audio", "Audio"));
    setElemText("vno-pref-label-display", ui("Display", "Display"));
    setElemText("vno-pref-fullscreen", ui("Fullscreen", "Toggle Fullscreen"));
    setElemText("vno-pref-label-ui-language", ui("Interface Language", "Interface Language"));
    setElemText("vno-pref-label-language", ui("Story Language", "Story Language"));
    setElemText("vno-pref-label-text-speed", ui("Text Speed", "Text Speed"));
    setElemText("vno-pref-label-auto-delay", ui("Auto-Forward Time", "Auto-Forward Delay"));
    setElemText("vno-pref-label-story-text-size", ui("Story Text Size", "Story Text Size"));
    setElemText("vno-pref-label-vol-music", ui("Music Volume", "Music Volume"));
    setElemText("vno-pref-label-vol-sfx", ui("Sound Volume", "Sound Effects Volume"));
    setElemText("vno-pref-label-vol-voice", ui("Voice Volume", "Voice Volume"));
    const closeLabel = ui("Close", "Close");
    document.querySelectorAll(".vno-screen-close").forEach((btn) => {
      if (btn && btn.setAttribute) btn.setAttribute("aria-label", closeLabel);
    });
    const uiLanguageLabel = ui("Interface Language", "Interface Language");
    if (dom.prefUiLanguage) {
      dom.prefUiLanguage.title = uiLanguageLabel;
      dom.prefUiLanguage.setAttribute("aria-label", uiLanguageLabel);
    }
    const langLabel = ui("Language", "Language");
    if (dom.langBar) dom.langBar.title = langLabel;
    if (dom.stageLanguage) dom.stageLanguage.setAttribute("aria-label", langLabel);
  }
  function storyTextScale() {
    return settingsNumber(settings.storyTextSize, 80, 140, 100) / 100;
  }
  function applyTextScale() {
    const scale = storyTextScale();
    const root = document.documentElement;
    if (root && root.style) {
      if (typeof root.style.setProperty === "function") {
        root.style.setProperty("--vno-story-text-scale", String(scale));
      } else {
        root.style["--vno-story-text-scale"] = String(scale);
      }
    }
    fitCaption();
    fitDialogue();
  }
  function baseFontPx(el, fallbackPx) {
    if (el && el.style) el.style.fontSize = "";
    if (typeof getComputedStyle === "function") {
      try {
        const measured = parseFloat(getComputedStyle(el).fontSize);
        if (measured && isFinite(measured)) return measured;
      } catch (err) {
      }
    }
    return fallbackPx;
  }
  function verticalPaddingPx(el) {
    if (!el || typeof getComputedStyle !== "function") return 0;
    try {
      const cs = getComputedStyle(el);
      if (!cs) return 0;
      const top = parseFloat(cs.paddingTop);
      const bottom = parseFloat(cs.paddingBottom);
      const sum = (isFinite(top) ? top : 0) + (isFinite(bottom) ? bottom : 0);
      return sum > 0 ? sum : 0;
    } catch (err) {
      return 0;
    }
  }
  function fitTextBlock(el, container, basePx, minPx, scrollHost, reservePx) {
    if (!el || !container) return;
    if (scrollHost && scrollHost.classList) scrollHost.classList.remove("vno-caption-scroll");
    if (typeof el.scrollHeight !== "number" || typeof container.clientHeight !== "number") return;
    if (container.clientHeight <= 0 || el.scrollHeight <= 0) return;
    if (el.style) el.style.fontSize = "";
    const base = basePx > 0 ? basePx : 16;
    const floor = minPx > 0 ? minPx : 12;
    const reserve = typeof reservePx === "number" && reservePx > 0 ? reservePx : 0;
    const available = container.clientHeight - verticalPaddingPx(container) - reserve - 2;
    const factors = [1, 0.92, 0.85, 0.78, 0.72, 0.66, 0.6, 0.55];
    let fits = false;
    for (let i = 0; i < factors.length; i++) {
      const px = Math.max(floor, Math.round(base * factors[i]));
      if (el.style) el.style.fontSize = px + "px";
      if (el.scrollHeight <= available) {
        fits = true;
        break;
      }
    }
    if (!fits && scrollHost && scrollHost.classList) scrollHost.classList.add("vno-caption-scroll");
  }
  function fitCaption() {
    if (!dom.pageCaption || !dom.pageCaptionArea) return;
    const footer = document.getElementById("vno-page-footer");
    const reserve = footer && typeof footer.offsetHeight === "number" ? footer.offsetHeight : 0;
    fitTextBlock(dom.pageCaption, dom.pageCaptionArea, baseFontPx(dom.pageCaption, 52 * storyTextScale()), 30, dom.pageCaptionArea, reserve);
  }
  function fitDialogue() {
    if (!dom.dialogueText || !dom.textbox) return;
    fitTextBlock(dom.dialogueText, dom.textbox, baseFontPx(dom.dialogueText, 33 * storyTextScale()), 14);
  }
  function refreshActiveScreens() {
    if (!gameData) return;
    if (pictureBook) {
      refreshPictureBookScreens();
      return;
    }
    updateCurrentDialogueDisplay();
    if (dom.mainMenu && !dom.mainMenu.classList.contains("vno-hidden")) {
      hideSceneTitle();
    } else {
      const ch = gameData.chapters[currentChapterIdx];
      const sc = ch ? ch.scenes[currentSceneIdx] : null;
      if (sc) showSceneTitle(sc);
    }
    if (dom.chapterCard && !dom.chapterCard.classList.contains("vno-hidden")) {
      const ch = gameData.chapters[currentChapterIdx];
      dom.chapterCardText.textContent = getLocalizedChapterTitle(currentChapterIdx, ch ? ch.title : "");
    }
    if (dom.choiceOverlay && !dom.choiceOverlay.classList.contains("vno-hidden") && activeChoices) {
      showChoices(activeChoices);
    }
    if (dom.endingCard && !dom.endingCard.classList.contains("vno-hidden")) {
      const ch = gameData.chapters[currentChapterIdx];
      const localizedEnding = currentEdition && currentEdition.endings && ch && currentEdition.endings[ch.number] || activeEndingMsg || ui("The End", "The End");
      dom.endingCardText.textContent = localizedEnding;
    }
    if (dom.puzzleOverlay && !dom.puzzleOverlay.classList.contains("vno-hidden") && activePuzzle) {
      renderBuiltinPuzzle(activePuzzle.pz, activePuzzle.onFail, activePuzzle.struckClues);
    }
    if (dom.screenHistory && !dom.screenHistory.classList.contains("vno-hidden")) {
      renderHistoryList();
    }
    if (dom.screenSave && !dom.screenSave.classList.contains("vno-hidden") && activeSaveScreen) {
      setElemText("vno-save-screen-title", activeSaveScreen.isSaving ? ui("Save", "Save Game") : ui("Load", "Load Game"));
      renderSaveSlots(activeSaveScreen.page, activeSaveScreen.isSaving);
    }
  }
  function channelGain(value) {
    const n = Number(value);
    const v = isFinite(n) ? Math.max(0, Math.min(100, n)) : 0;
    return Math.pow(v / 100, 1.6);
  }
  function setVolumeSmooth(el, target) {
    if (!el) return;
    const n = Number(target);
    const to = isFinite(n) ? Math.max(0, Math.min(1, n)) : 0;
    if (typeof requestAnimationFrame !== "function") {
      el.volume = to;
      return;
    }
    const token = (el.__vnoVolumeRamp || 0) + 1;
    el.__vnoVolumeRamp = token;
    const from = typeof el.volume === "number" ? el.volume : 0;
    const started = typeof performance !== "undefined" && performance && typeof performance.now === "function" ? performance.now() : null;
    const duration = 180;
    const step = (now) => {
      if (el.__vnoVolumeRamp !== token) return;
      const t = started === null ? 1 : Math.min(1, Math.max(0, (typeof now === "number" ? now : started) - started) / duration);
      el.volume = from + (to - from) * t;
      if (t < 1) requestAnimationFrame(step);
      else el.volume = to;
    };
    requestAnimationFrame(step);
  }
  function setVoiceActive(active) {
    const next = Boolean(active);
    if (voiceActive === next) return;
    voiceActive = next;
    applyAudioVolumes();
  }
  function applyAudioVolumes() {
    if (dom.audioMusic) setVolumeSmooth(dom.audioMusic, channelGain(settings.volMusic) * (voiceActive ? 0.35 : 1));
    if (dom.audioAmbience) setVolumeSmooth(dom.audioAmbience, channelGain(settings.volSfx) * (voiceActive ? 0.7 : 1));
    if (dom.audioSfx) setVolumeSmooth(dom.audioSfx, channelGain(settings.volSfx));
    if (dom.audioVoice) setVolumeSmooth(dom.audioVoice, channelGain(settings.volVoice));
  }
  function bindUiEvents() {
    if (dom.langBar) {
      ["click", "mousedown", "mouseup", "touchstart", "keydown"].forEach((evt) => {
        dom.langBar.addEventListener(evt, (e) => e.stopPropagation());
      });
    }
    if (dom.stageLanguage) {
      dom.stageLanguage.addEventListener("change", (e) => switchLanguage(e.target.value));
    }
    if (dom.prefLanguage) {
      dom.prefLanguage.addEventListener("change", (e) => switchLanguage(e.target.value));
    }
    dom.textboxContainer.addEventListener("click", onAdvanceClick);
    document.getElementById("vno-mm-start").addEventListener("click", startGame);
    document.getElementById("vno-mm-load").addEventListener("click", () => {
      if (pictureBook) {
        if (!quickLoad()) startPictureBook();
        return;
      }
      openSaveScreen(false);
    });
    document.getElementById("vno-mm-prefs").addEventListener("click", () => openScreen(dom.screenPrefs));
    document.getElementById("vno-mm-about").addEventListener("click", () => openScreen(dom.screenAbout));
    document.getElementById("vno-btn-restart").addEventListener("click", startGame);
    document.getElementById("vno-btn-ending-menu").addEventListener("click", returnToMainMenu);
    document.getElementById("vno-qm-back").addEventListener("click", rollback);
    document.getElementById("vno-qm-history").addEventListener("click", openHistoryScreen);
    document.getElementById("vno-qm-save").addEventListener("click", () => openSaveScreen(true));
    document.getElementById("vno-qm-qsave").addEventListener("click", quickSave);
    document.getElementById("vno-qm-qload").addEventListener("click", quickLoad);
    document.getElementById("vno-qm-prefs").addEventListener("click", () => openScreen(dom.screenPrefs));
    document.getElementById("vno-qm-menu").addEventListener("click", returnToMainMenu);
    document.querySelectorAll(".vno-screen-close").forEach((btn) => {
      btn.addEventListener("click", closeAllScreens);
    });
    if (dom.prefUiLanguage) {
      dom.prefUiLanguage.addEventListener("change", (e) => switchUiLanguage(e.target.value));
    }
    document.getElementById("vno-pref-fullscreen").addEventListener("click", toggleFullscreen);
    bindRange("vno-pref-text-speed", "textSpeed");
    bindRange("vno-pref-auto-delay", "autoDelay");
    bindRange("vno-pref-story-text-size", "storyTextSize", applyTextScale, (v) => String(v) + "%");
    bindRange("vno-pref-vol-music", "volMusic", applyAudioVolumes);
    bindRange("vno-pref-vol-sfx", "volSfx", applyAudioVolumes);
    bindRange("vno-pref-vol-voice", "volVoice", applyAudioVolumes);
    if (dom.pageImageArea) dom.pageImageArea.addEventListener("click", nextPage);
    if (dom.pageCaption) dom.pageCaption.addEventListener("click", nextPage);
    if (dom.pageNext) dom.pageNext.addEventListener("click", (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      nextPage();
    });
    if (dom.pagePrev) dom.pagePrev.addEventListener("click", (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      prevPage();
    });
    if (dom.pageReplay) dom.pageReplay.addEventListener("click", (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      replayPageVoice();
    });
    if (dom.pageMenu) dom.pageMenu.addEventListener("click", (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      returnToMainMenu();
    });
    if (dom.stage && dom.stage.addEventListener) {
      let touchStartX = null;
      dom.stage.addEventListener("touchstart", (e) => {
        const t = e.touches && e.touches[0] ? e.touches[0] : e;
        touchStartX = typeof t.clientX === "number" ? t.clientX : null;
      });
      dom.stage.addEventListener("touchend", (e) => {
        if (!pictureBook || touchStartX === null) return;
        const start = touchStartX;
        touchStartX = null;
        const t = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0] : e;
        if (typeof t.clientX !== "number") return;
        if (t.clientX < start - 40) nextPage();
        else if (t.clientX > start + 40) prevPage();
      });
    }
  }
  function updateRangeOutput(elemId, key, formatter) {
    const out = document.getElementById(elemId + "-value");
    if (!out) return;
    const value = settings[key];
    const text = formatter ? formatter(value) : String(value);
    if ("value" in out) out.value = text;
    out.textContent = text;
  }
  function bindRange(elemId, key, callback, formatter) {
    const el = document.getElementById(elemId);
    if (!el) return;
    el.value = String(settings[key]);
    updateRangeOutput(elemId, key, formatter);
    el.addEventListener("input", (e) => {
      settings[key] = Number(e.target.value);
      saveSettings();
      updateRangeOutput(elemId, key, formatter);
      if (callback) callback();
    });
  }
  function firstOpenScreen() {
    const screens = [dom.screenPrefs, dom.screenSave, dom.screenHistory, dom.screenAbout];
    for (let i = 0; i < screens.length; i++) {
      const screen = screens[i];
      if (screen && screen.classList && !screen.classList.contains("vno-hidden")) return screen;
    }
    return null;
  }
  function closeScreenOnEscape(openScreen2) {
    closeAllScreens();
    let target = openScreen2 && openScreen2.querySelector ? openScreen2.querySelector(".vno-screen-close") : null;
    if (!target && document.querySelectorAll) {
      const closers = document.querySelectorAll(".vno-screen-close");
      if (closers && closers.length) target = closers[0];
    }
    if (target && typeof target.focus === "function") target.focus();
  }
  function bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e && e.code === "Escape") {
        const open = firstOpenScreen();
        if (open) {
          e.preventDefault();
          closeScreenOnEscape(open);
          return;
        }
      }
      if (e.target && (e.target.tagName === "SELECT" || e.target.tagName === "INPUT")) return;
      if (dom.mainMenu && !dom.mainMenu.classList.contains("vno-hidden")) return;
      if (pictureBook) {
        if (e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter") {
          e.preventDefault();
          nextPage();
        } else if (e.code === "ArrowLeft" || e.code === "PageUp") {
          e.preventDefault();
          prevPage();
        } else if (e.code === "Escape") {
          e.preventDefault();
          returnToMainMenu();
        } else if (e.key === "f" || e.key === "F" || e.code === "F11") {
          e.preventDefault();
          toggleFullscreen();
        }
        return;
      }
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        onAdvanceClick();
      } else if (e.code === "PageUp" || e.code === "ArrowLeft") {
        e.preventDefault();
        rollback();
      } else if (e.code === "Escape") {
        e.preventDefault();
        if (!dom.screenPrefs.classList.contains("vno-hidden")) closeAllScreens();
        else openScreen(dom.screenPrefs);
      } else if (e.key === "f" || e.key === "F" || e.code === "F11") {
        e.preventDefault();
        toggleFullscreen();
      }
    });
  }
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
      });
    } else {
      document.exitFullscreen().catch(() => {
      });
    }
  }
  function startGame() {
    if (pictureBook) {
      startPictureBook();
      return;
    }
    closeAllScreens();
    dom.mainMenu.classList.add("vno-hidden");
    dom.endingCard.classList.add("vno-hidden");
    dom.choiceOverlay.classList.add("vno-hidden");
    dom.puzzleOverlay.classList.add("vno-hidden");
    activeChoices = null;
    activeEndingMsg = null;
    activePuzzle = null;
    currentChapterIdx = 0;
    currentSceneIdx = 0;
    currentBeatIdx = -1;
    stateHistory.length = 0;
    dialogueHistory.length = 0;
    seenBeats.clear();
    playChapter(0);
  }
  function returnToMainMenu() {
    closeAllScreens();
    dom.endingCard.classList.add("vno-hidden");
    dom.choiceOverlay.classList.add("vno-hidden");
    dom.puzzleOverlay.classList.add("vno-hidden");
    dom.chapterCard.classList.add("vno-hidden");
    activeChoices = null;
    activeEndingMsg = null;
    activePuzzle = null;
    dom.mainMenu.classList.remove("vno-hidden");
    if (dom.pageLayer) dom.pageLayer.classList.add("vno-hidden");
    stopVoice();
    hideSceneTitle();
    if (gameData && gameData.audio && gameData.audio.music && gameData.audio.music.music_01) {
      playMusic("music_01");
    }
  }
  function playChapter(chIdx) {
    if (!gameData.chapters[chIdx]) {
      returnToMainMenu();
      return;
    }
    currentChapterIdx = chIdx;
    currentSceneIdx = 0;
    currentBeatIdx = -1;
    const ch = gameData.chapters[chIdx];
    showChapterCard(ch.title, () => {
      playScene(0);
    });
  }
  function showChapterCard(title, onFinish) {
    if (!title || !title.trim()) {
      onFinish();
      return;
    }
    dom.chapterCardText.textContent = getLocalizedChapterTitle(currentChapterIdx, title);
    dom.chapterCard.classList.remove("vno-hidden");
    dom.chapterCard.onclick = () => {
      dom.chapterCard.classList.add("vno-hidden");
      dom.chapterCard.onclick = null;
      onFinish();
    };
    setTimeout(() => {
      if (!dom.chapterCard.classList.contains("vno-hidden")) {
        dom.chapterCard.classList.add("vno-hidden");
        dom.chapterCard.onclick = null;
        onFinish();
      }
    }, 2500);
  }
  function playScene(scIdx) {
    const ch = gameData.chapters[currentChapterIdx];
    if (!ch || !ch.scenes[scIdx]) return;
    currentSceneIdx = scIdx;
    currentBeatIdx = -1;
    const scene = ch.scenes[scIdx];
    dom.slotLeft.innerHTML = "";
    if (dom.slotLeft.setAttribute) dom.slotLeft.setAttribute("data-char", "");
    dom.slotCenter.innerHTML = "";
    if (dom.slotCenter.setAttribute) dom.slotCenter.setAttribute("data-char", "");
    dom.slotRight.innerHTML = "";
    if (dom.slotRight.setAttribute) dom.slotRight.setAttribute("data-char", "");
    dom.cgLayer.classList.add("vno-hidden");
    dom.cgOverlay.classList.add("vno-hidden");
    dom.insertCard.classList.add("vno-hidden");
    if (scene.bgPath) {
      dom.bgImage.style.backgroundImage = 'url("' + scene.bgPath + '")';
    } else {
      dom.bgImage.style.backgroundImage = "none";
    }
    showSceneTitle(scene);
    if (scene.music) {
      playMusic(scene.music, scene.musicLoopStartSec);
    } else if (scene.music === null && scene.musicExplicitNull) {
      stopMusic();
    }
    if (scene.ambience) {
      playAmbience(scene.ambience);
    }
    advance();
  }
  function onAdvanceClick() {
    if (isTyping) {
      completeTypewriter();
      return;
    }
    advance();
  }
  function advance() {
    if (pictureBook) {
      nextPage();
      return;
    }
    clearTimeout(autoTimer);
    const ch = gameData.chapters[currentChapterIdx];
    if (!ch) return;
    const sc = ch.scenes[currentSceneIdx];
    if (!sc) return;
    currentBeatIdx++;
    if (currentBeatIdx >= sc.beats.length) {
      if (currentSceneIdx + 1 < ch.scenes.length) {
        playScene(currentSceneIdx + 1);
      } else {
        finishChapter(ch);
      }
      return;
    }
    const beat = sc.beats[currentBeatIdx];
    seenBeats.add(beat.id);
    saveSnapshot();
    if (beatHandlers.has(beat.type)) {
      beatHandlers.get(beat.type)(beat, () => advance());
      return;
    }
    renderBeat(beat);
  }
  function renderBeat(beat) {
    if (beat.stage) {
      applyStagePlan(beat.stage);
    }
    if (beat.stage && beat.stage.sfx) {
      playSfx(beat.stage.sfx);
    }
    if (beat.stage && beat.stage.ambience !== void 0) {
      playAmbience(beat.stage.ambience);
    }
    stopVoice();
    if (beat.type === "puzzle") {
      launchPuzzle(beat.puzzleKey, beat.onFail);
      return;
    }
    if (beat.type === "cast") {
      advance();
      return;
    }
    dom.textboxContainer.classList.remove("vno-hidden");
    if (beat.type === "line") {
      const char = beat.speaker ? gameData.characters[beat.speaker] : null;
      const displayName = getLocalizedCharacterName(beat, beat.speakerLabel);
      dom.speakerName.textContent = displayName;
      dom.namebox.classList.remove("vno-hidden");
      if (char && char.color) {
        dom.speakerName.style.color = char.color;
      }
    } else {
      dom.namebox.classList.add("vno-hidden");
    }
    playVoiceForBeat(beat.id);
    const rawText = getLocalizedBeatText(beat.id, beat.text);
    const htmlText = formatBeatHtml(rawText);
    startTypewriter(htmlText);
    dialogueHistory.push({
      beatId: beat.id,
      type: beat.type,
      speaker: beat.speaker || null,
      speakerAliasKey: beat.speakerAliasKey || null,
      speakerLabel: beat.speakerLabel || "",
      fallbackText: beat.text || ""
    });
  }
  function applyStagePlan(stage) {
    if (!stage) return;
    if (stage.hides) {
      stage.hides.forEach((charKey) => {
        clearSlotByChar(charKey);
      });
    }
    if (stage.shows) {
      stage.shows.forEach((item) => {
        const slotEl = item.slot === "left" ? dom.slotLeft : item.slot === "right" ? dom.slotRight : dom.slotCenter;
        clearSlotByChar(item.charKey, slotEl);
        const char = gameData.characters[item.charKey];
        const spritePath = char && char.sprites ? char.sprites[item.expression] || char.sprites["neutral"] || Object.values(char.sprites)[0] : null;
        if (spritePath) {
          slotEl.innerHTML = '<img class="vno-sprite-img" data-char="' + item.charKey + '" src="' + spritePath + '" alt="' + item.charKey + '">';
          if (slotEl.setAttribute) slotEl.setAttribute("data-char", item.charKey);
        } else {
          const existingChar = getSlotCharKey(slotEl);
          if (existingChar && existingChar !== item.charKey) {
            slotEl.innerHTML = "";
            if (slotEl.setAttribute) slotEl.setAttribute("data-char", "");
          }
        }
      });
    }
    if (stage.cg === null) {
      dom.cgLayer.classList.add("vno-hidden");
      dom.insertCard.classList.add("vno-hidden");
    } else if (stage.cg) {
      const cg = gameData.cgs[stage.cg];
      if (cg) {
        dom.cgLayer.classList.remove("vno-hidden");
        if (cg.display === "insert") {
          dom.cgOverlay.style.backgroundImage = "none";
          dom.insertImg.src = cg.path;
          dom.insertCard.classList.remove("vno-hidden");
        } else {
          dom.insertCard.classList.add("vno-hidden");
          dom.cgOverlay.classList.remove("vno-hidden");
          dom.cgOverlay.style.backgroundImage = 'url("' + cg.path + '")';
        }
      }
    }
  }
  function getSlotCharKey(slot) {
    if (!slot) return null;
    const img = slot.querySelector ? slot.querySelector("img") : null;
    if (img) {
      const dc = img.getAttribute ? img.getAttribute("data-char") : null;
      if (dc) return dc;
      if (img.alt) return img.alt;
    }
    const dcAttr = slot.getAttribute ? slot.getAttribute("data-char") : null;
    if (dcAttr) return dcAttr;
    const m = /data-char="([^"]+)"/.exec(slot.innerHTML || "") || /alt="([^"]+)"/.exec(slot.innerHTML || "");
    return m ? m[1] : null;
  }
  function clearSlotByChar(charKey, exceptSlot) {
    [dom.slotLeft, dom.slotCenter, dom.slotRight].forEach((slot) => {
      if (!slot || slot === exceptSlot) return;
      const img = slot.querySelector ? slot.querySelector("img") : null;
      const imgChar = img ? img.getAttribute && img.getAttribute("data-char") || img.alt : getSlotCharKey(slot);
      if (imgChar === charKey) {
        slot.innerHTML = "";
        if (slot.setAttribute) slot.setAttribute("data-char", "");
      }
    });
  }
  function startTypewriter(htmlText) {
    clearInterval(typewriterTimer);
    dom.indicator.classList.add("vno-hidden");
    currentFullText = htmlText;
    dom.dialogueText.innerHTML = htmlText;
    fitDialogue();
    if (settings.textSpeed >= 100) {
      isTyping = false;
      dom.indicator.classList.remove("vno-hidden");
      return;
    }
    isTyping = true;
    let charIdx = 0;
    const plain = htmlText.replace(/<[^>]+>/g, "");
    const interval = Math.max(10, 100 - settings.textSpeed);
    typewriterTimer = setInterval(() => {
      charIdx++;
      if (charIdx >= plain.length) {
        completeTypewriter();
      } else {
        dom.dialogueText.textContent = plain.slice(0, charIdx);
      }
    }, interval);
  }
  function completeTypewriter() {
    clearInterval(typewriterTimer);
    isTyping = false;
    dom.dialogueText.innerHTML = currentFullText;
    fitDialogue();
    dom.indicator.classList.remove("vno-hidden");
  }
  function finishChapter(ch) {
    if (ch.choices && ch.choices.length > 0) {
      showChoices(ch.choices);
    } else if (ch.ending) {
      showEnding(ch.ending.message);
    } else if (ch.nextChapterLabel) {
      const nextN = parseInt(ch.nextChapterLabel.replace("ch_", ""), 10);
      const nextIdx = gameData.chapters.findIndex((c) => c.number === nextN);
      if (nextIdx >= 0) playChapter(nextIdx);
      else returnToMainMenu();
    } else {
      returnToMainMenu();
    }
  }
  function showChoices(choices) {
    activeChoices = choices;
    dom.choiceContainer.innerHTML = "";
    const ch = gameData.chapters[currentChapterIdx];
    const chNum = ch ? ch.number : currentChapterIdx + 1;
    choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.className = "vno-choice-btn";
      const key = chNum + ":" + i;
      btn.textContent = currentEdition && currentEdition.choices && currentEdition.choices[key] || c.text;
      btn.addEventListener("click", () => {
        activeChoices = null;
        dom.choiceOverlay.classList.add("vno-hidden");
        const targetIdx = gameData.chapters.findIndex((item) => item.number === c.targetChapterId);
        if (targetIdx >= 0) playChapter(targetIdx);
        else returnToMainMenu();
      });
      dom.choiceContainer.appendChild(btn);
    });
    dom.choiceOverlay.classList.remove("vno-hidden");
  }
  function showEnding(msg) {
    activeEndingMsg = msg || "";
    const ch = gameData.chapters[currentChapterIdx];
    const localizedEnding = currentEdition && currentEdition.endings && ch && currentEdition.endings[ch.number] || msg || ui("The End", "The End");
    dom.endingCardText.textContent = localizedEnding;
    dom.endingCard.classList.remove("vno-hidden");
  }
  function launchPuzzle(puzzleKey, onFail) {
    const pz = gameData.puzzles[puzzleKey];
    if (!pz) {
      advance();
      return;
    }
    if (puzzleHandlers.has(pz.kind)) {
      puzzleHandlers.get(pz.kind)(pz, onFail, onPuzzleSolved, onPuzzleFailed);
      return;
    }
    const BUILTIN_PUZZLE_KINDS = ["murdle", "logic", "knights", "testimony", "quiz"];
    renderBuiltinPuzzle(pz, onFail);
  }
  function renderBuiltinPuzzle(pz, onFail, existingStruckClues) {
    const struckClues = existingStruckClues || (activePuzzle && activePuzzle.pz === pz ? activePuzzle.struckClues : /* @__PURE__ */ new Set());
    activePuzzle = { pz, onFail, struckClues };
    const edPz = currentEdition && currentEdition.puzzles ? currentEdition.puzzles[pz.key] : null;
    const pzText = Object.assign({}, pz.text || {}, edPz && edPz.text || {});
    const pzNames = Object.assign({}, pz.names || {}, edPz && edPz.names || {});
    dom.puzzleTitle.textContent = edPz && edPz.title || pz.title || pz.kind.toUpperCase() + " PUZZLE";
    dom.puzzleOverlay.classList.remove("vno-hidden");
    dom.puzzleOverlay.setAttribute("data-puzzle-kind", pz.kind);
    dom.puzzleBody.innerHTML = "";
    const leftCol = document.createElement("div");
    leftCol.className = "vno-puzzle-left-col";
    const rightCol = document.createElement("div");
    rightCol.className = "vno-puzzle-right-col";
    const introNote = pzText.murder || pzText.intro;
    if (introNote) {
      const introEl = document.createElement("div");
      introEl.className = "vno-puzzle-intro";
      introEl.textContent = introNote;
      leftCol.appendChild(introEl);
    }
    const cluesTitle = document.createElement("h3");
    cluesTitle.textContent = ui("Clues", "Clues");
    leftCol.appendChild(cluesTitle);
    const addClueRow = (clueId, fallbackText) => {
      const item = document.createElement("div");
      item.className = "vno-clue-item" + (struckClues.has(clueId) ? " struck" : "");
      item.setAttribute("data-clue-id", clueId);
      item.textContent = pzText[clueId] || fallbackText || "Clue " + clueId;
      item.onclick = () => {
        if (struckClues.has(clueId)) {
          struckClues.delete(clueId);
          item.classList.remove("struck");
        } else {
          struckClues.add(clueId);
          item.classList.add("struck");
        }
      };
      leftCol.appendChild(item);
    };
    if (pz.data && Array.isArray(pz.data.clues)) {
      pz.data.clues.forEach((c) => addClueRow(c.id, c.text));
    } else if (pz.data && Array.isArray(pz.data.statements)) {
      pz.data.statements.forEach((s) => {
        const speakerName = s.speaker ? pzNames[s.speaker] || s.speaker : "";
        const stmtText = pzText[s.id] || s.text || "Statement " + s.id;
        addClueRow(s.id, speakerName ? speakerName + ": " + stmtText : stmtText);
      });
    } else if (pz.data && Array.isArray(pz.data.questions)) {
      pz.data.questions.forEach((q) => addClueRow(q.id, q.prompt || q.text));
    } else {
      Object.keys(pzText).forEach((k) => {
        if (k !== "murder" && k !== "intro") {
          addClueRow(k, pzText[k]);
        }
      });
    }
    if (pz.data && Array.isArray(pz.data.evidence)) {
      pz.data.evidence.forEach((ev) => {
        const evName = pzNames[ev.id] || ev.id;
        const evText = pzText[ev.id] || "";
        addClueRow(ev.id, evName && evText ? evName + " — " + evText : evText || evName);
      });
    }
    const nameKeys = Object.keys(pzNames);
    if (nameKeys.length > 0) {
      const namesList = document.createElement("div");
      namesList.className = "vno-puzzle-names";
      nameKeys.forEach((k) => {
        const badge = document.createElement("span");
        badge.className = "vno-puzzle-name-item";
        badge.setAttribute("data-item-id", k);
        badge.textContent = pzNames[k];
        namesList.appendChild(badge);
      });
      rightCol.appendChild(namesList);
    }
    const btnSubmit = document.createElement("button");
    btnSubmit.id = "vno-puzzle-btn-submit";
    btnSubmit.className = "vno-button";
    btnSubmit.style.marginTop = "20px";
    btnSubmit.textContent = pz.kind === "murdle" ? ui("Accuse", "Accuse") : ui("Submit", "Submit");
    btnSubmit.onclick = () => {
      onPuzzleSolved();
    };
    leftCol.appendChild(btnSubmit);
    const btnHint = document.getElementById("vno-puzzle-btn-hint");
    if (btnHint) btnHint.textContent = ui("Hint", "Hint");
    const btnGiveUp = document.getElementById("vno-puzzle-btn-giveup");
    if (btnGiveUp) {
      btnGiveUp.textContent = ui("Give Up", "Give Up");
      btnGiveUp.onclick = () => {
        onPuzzleFailed(onFail);
      };
    }
    dom.puzzleBody.appendChild(leftCol);
    dom.puzzleBody.appendChild(rightCol);
  }
  function onPuzzleSolved() {
    activePuzzle = null;
    dom.puzzleOverlay.classList.add("vno-hidden");
    advance();
  }
  function onPuzzleFailed(onFail) {
    activePuzzle = null;
    dom.puzzleOverlay.classList.add("vno-hidden");
    if (onFail && onFail.mode === "chapter" && onFail.to) {
      const targetIdx = gameData.chapters.findIndex((c) => c.number === onFail.to);
      if (targetIdx >= 0) playChapter(targetIdx);
      else advance();
    } else {
      advance();
    }
  }
  function playMusic(trackId, loopStart) {
    if (!gameData.audio || !gameData.audio.music || !gameData.audio.music[trackId]) return;
    const item = gameData.audio.music[trackId];
    if (typeof loopStart !== "number" && typeof item.loopStartSec === "number") {
      loopStart = item.loopStartSec;
    }
    if (dom.audioMusic.src.includes(item.path) && !dom.audioMusic.paused) return;
    dom.audioMusic.src = item.path;
    dom.audioMusic.currentTime = 0;
    dom.audioMusic.ontimeupdate = null;
    dom.audioMusic.onended = null;
    if (typeof loopStart === "number" && loopStart > 0) {
      dom.audioMusic.loop = false;
      dom.audioMusic.ontimeupdate = () => {
        if (dom.audioMusic.currentTime >= dom.audioMusic.duration - 0.25) {
          dom.audioMusic.currentTime = loopStart;
        }
      };
      dom.audioMusic.onended = () => {
        dom.audioMusic.currentTime = loopStart;
        dom.audioMusic.play().catch(() => {
        });
      };
    } else {
      dom.audioMusic.loop = true;
    }
    dom.audioMusic.play().catch(() => {
    });
  }
  function stopMusic() {
    if (!dom.audioMusic) return;
    dom.audioMusic.pause();
    dom.audioMusic.currentTime = 0;
    dom.audioMusic.src = "";
    dom.audioMusic.ontimeupdate = null;
    dom.audioMusic.onended = null;
  }
  function playAmbience(ambKey) {
    if (!ambKey || !gameData.audio || !gameData.audio.ambience || !gameData.audio.ambience[ambKey]) {
      dom.audioAmbience.pause();
      return;
    }
    const rel = gameData.audio.ambience[ambKey];
    dom.audioAmbience.src = rel;
    dom.audioAmbience.play().catch(() => {
    });
  }
  function playSfx(sfxKey) {
    if (!sfxKey || !gameData.audio || !gameData.audio.sfx || !gameData.audio.sfx[sfxKey]) return;
    const rel = gameData.audio.sfx[sfxKey];
    dom.audioSfx.src = rel;
    dom.audioSfx.play().catch(() => {
    });
  }
  function playVoiceForBeat(beatId) {
    if (!currentEdition || !currentEdition.voice || !currentEdition.voice[beatId]) return;
    const rel = currentEdition.voice[beatId];
    dom.audioVoice.src = rel;
    const previous = dom.audioVoice.onended;
    dom.audioVoice.onended = function() {
      dom.audioVoice.onended = null;
      setVoiceActive(false);
      if (typeof previous === "function") previous();
    };
    setVoiceActive(true);
    dom.audioVoice.play().catch(() => {
      setVoiceActive(false);
    });
  }
  function stopVoice() {
    if (dom.audioVoice) {
      dom.audioVoice.onended = null;
      dom.audioVoice.pause();
    }
    setVoiceActive(false);
    pageVoices = [];
    pageVoiceIdx = 0;
  }
  function formatBeatHtml(text) {
    if (!text) return "";
    let s = String(text).replace(/\[\[/g, "[").replace(/\{\{/g, "{").replace(/\\"/g, '"').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    s = s.replace(/\{b\}([\s\S]*?)\{\/b\}/g, "<strong>$1</strong>");
    s = s.replace(/\{i\}([\s\S]*?)\{\/i\}/g, "<em>$1</em>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    s = s.replace(/\r?\n/g, "<br/>");
    return s;
  }
  function getLocalizedChapterTitle(chIdx, def) {
    var _a;
    const n = (_a = gameData.chapters[chIdx]) == null ? void 0 : _a.number;
    return currentEdition && currentEdition.chapterTitles && currentEdition.chapterTitles[n] || def;
  }
  function getLocalizedSceneTitle(sceneId, def) {
    const titles = currentEdition && currentEdition.sceneTitles ? currentEdition.sceneTitles : null;
    return titles && titles[sceneId] || def || "";
  }
  function showSceneTitle(scene) {
    if (!dom.sceneTitle || !scene) return;
    const title = getLocalizedSceneTitle(scene.id, scene.title);
    if (!title) {
      dom.sceneTitle.textContent = "";
      dom.sceneTitle.classList.add("vno-hidden");
      return;
    }
    dom.sceneTitle.textContent = title;
    dom.sceneTitle.classList.remove("vno-hidden");
  }
  function hideSceneTitle() {
    if (!dom.sceneTitle) return;
    dom.sceneTitle.textContent = "";
    dom.sceneTitle.classList.add("vno-hidden");
  }
  function getLocalizedCharacterName(beatOrKey, def) {
    const names = currentEdition && currentEdition.characterNames ? currentEdition.characterNames : null;
    if (beatOrKey && typeof beatOrKey === "object") {
      if (beatOrKey.speakerAliasKey && names && names[beatOrKey.speakerAliasKey]) {
        return names[beatOrKey.speakerAliasKey];
      }
      if (beatOrKey.speaker && names && names[beatOrKey.speaker]) {
        return names[beatOrKey.speaker];
      }
      return def || beatOrKey.speakerLabel || beatOrKey.speaker || "";
    }
    const charKey = beatOrKey;
    return names && charKey && names[charKey] || def || charKey || "";
  }
  function getLocalizedBeatText(beatId, def) {
    return currentEdition && currentEdition.beats && currentEdition.beats[beatId] || def || "";
  }
  function updateCurrentDialogueDisplay() {
    if (!gameData) return;
    const ch = gameData.chapters[currentChapterIdx];
    if (!ch) return;
    const sc = ch.scenes[currentSceneIdx];
    if (!sc || currentBeatIdx < 0 || !sc.beats[currentBeatIdx]) return;
    const b = sc.beats[currentBeatIdx];
    if (b.type !== "line" && b.type !== "narration") return;
    const htmlText = formatBeatHtml(getLocalizedBeatText(b.id, b.text));
    if (isTyping) {
      clearInterval(typewriterTimer);
      isTyping = false;
      if (dom.indicator) dom.indicator.classList.remove("vno-hidden");
    }
    currentFullText = htmlText;
    dom.dialogueText.innerHTML = htmlText;
    fitDialogue();
    if (b.type === "line") {
      dom.speakerName.textContent = getLocalizedCharacterName(b, b.speakerLabel);
    }
  }
  function saveSnapshot() {
    stateHistory.push({
      chIdx: currentChapterIdx,
      scIdx: currentSceneIdx,
      beatIdx: currentBeatIdx,
      slotLeft: dom.slotLeft.innerHTML,
      slotCenter: dom.slotCenter.innerHTML,
      slotRight: dom.slotRight.innerHTML,
      bg: dom.bgImage.style.backgroundImage,
      cgLayer: dom.cgLayer.classList.contains("vno-hidden"),
      cgOverlay: dom.cgOverlay.style.backgroundImage,
      insertImg: dom.insertImg.src
    });
    if (stateHistory.length > 50) stateHistory.shift();
  }
  function rollback() {
    if (stateHistory.length <= 1) return;
    stateHistory.pop();
    const snap = stateHistory.pop();
    currentChapterIdx = snap.chIdx;
    currentSceneIdx = snap.scIdx;
    currentBeatIdx = snap.beatIdx - 1;
    dom.slotLeft.innerHTML = snap.slotLeft;
    dom.slotCenter.innerHTML = snap.slotCenter;
    dom.slotRight.innerHTML = snap.slotRight;
    dom.bgImage.style.backgroundImage = snap.bg;
    if (snap.cgLayer) dom.cgLayer.classList.add("vno-hidden");
    else dom.cgLayer.classList.remove("vno-hidden");
    dom.cgOverlay.style.backgroundImage = snap.cgOverlay;
    dom.insertImg.src = snap.insertImg;
    advance();
  }
  function quickSave() {
    saveToSlot("quick");
  }
  function quickLoad() {
    return loadFromSlot("quick");
  }
  function saveToSlot(slotId) {
    const key = (gameData.saveDir || "vno-save") + "_" + slotId;
    const ch = gameData.chapters[currentChapterIdx];
    const data = {
      timestamp: Date.now(),
      title: ch ? ch.title : "",
      text: (pictureBook && dom.pageCaption ? dom.pageCaption.textContent : dom.dialogueText.textContent).slice(0, 60),
      chIdx: currentChapterIdx,
      scIdx: currentSceneIdx,
      beatIdx: currentBeatIdx,
      // a picture book resumes at the page it was on; a visual novel ignores this field
      pageIdx: pictureBook ? pageIdx : void 0,
      presentation,
      lang: currentLang
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  function loadFromSlot(slotId) {
    const key = (gameData.saveDir || "vno-save") + "_" + slotId;
    const raw = localStorage.getItem(key);
    if (!raw) return false;
    const data = JSON.parse(raw);
    closeAllScreens();
    if (pictureBook) {
      dom.mainMenu.classList.add("vno-hidden");
      dom.endingCard.classList.add("vno-hidden");
      dom.choiceOverlay.classList.add("vno-hidden");
      if (data.lang) switchLanguage(data.lang);
      const pages = pictureBookPages();
      const at = typeof data.pageIdx === "number" ? Math.max(0, Math.min(data.pageIdx, pages.length - 1)) : 0;
      showPage(at);
      return true;
    }
    currentChapterIdx = data.chIdx;
    currentSceneIdx = data.scIdx;
    currentBeatIdx = data.beatIdx - 1;
    if (data.lang) switchLanguage(data.lang);
    advance();
    return true;
  }
  function openSaveScreen(isSaving) {
    activeSaveScreen = { page: 1, isSaving };
    document.getElementById("vno-save-screen-title").textContent = isSaving ? ui("Save", "Save Game") : ui("Load", "Load Game");
    renderSaveSlots(1, isSaving);
    openScreen(dom.screenSave);
  }
  function renderSaveSlots(page, isSaving) {
    activeSaveScreen = { page, isSaving };
    const grid = document.getElementById("vno-save-slots-grid");
    if (!grid) return;
    grid.innerHTML = "";
    const emptyLabel = ui("empty slot", "Empty");
    for (let i = 1; i <= 6; i++) {
      const slotId = page + "_" + i;
      const key = (gameData.saveDir || "vno-save") + "_" + slotId;
      const raw = localStorage.getItem(key);
      const card = document.createElement("div");
      card.className = "vno-slot-card";
      if (raw) {
        const item = JSON.parse(raw);
        card.innerHTML = "<h4>Slot " + slotId + "</h4><p>" + new Date(item.timestamp).toLocaleString() + "</p><p>" + item.text + "...</p>";
      } else {
        card.innerHTML = "<h4>Slot " + slotId + "</h4><p>" + emptyLabel + "</p>";
      }
      card.onclick = () => {
        if (isSaving) {
          saveToSlot(slotId);
          renderSaveSlots(page, isSaving);
        } else {
          loadFromSlot(slotId);
        }
      };
      grid.appendChild(card);
    }
  }
  function renderHistoryList() {
    const list = document.getElementById("vno-history-list");
    if (!list) return;
    list.innerHTML = "";
    if (dialogueHistory.length === 0) {
      const empty = document.createElement("div");
      empty.className = "vno-history-empty";
      empty.textContent = ui("The dialogue history is empty.", "The dialogue history is empty.");
      list.appendChild(empty);
      return;
    }
    dialogueHistory.forEach((d) => {
      const row = document.createElement("div");
      row.className = "vno-history-item";
      row.style.marginBottom = "16px";
      const htmlText = d.beatId ? formatBeatHtml(getLocalizedBeatText(d.beatId, d.fallbackText)) : d.text || "";
      const speakerName = d.type === "line" ? getLocalizedCharacterName(d, d.speakerLabel) : d.speaker && !d.beatId ? d.speaker : "";
      if (speakerName) row.innerHTML = "<strong>" + speakerName + ":</strong> " + htmlText;
      else row.innerHTML = htmlText;
      list.appendChild(row);
    });
  }
  function openHistoryScreen() {
    renderHistoryList();
    openScreen(dom.screenHistory);
  }
  function openScreen(screenEl) {
    closeAllScreens();
    screenEl.classList.remove("vno-hidden");
  }
  function closeAllScreens() {
    [dom.screenSave, dom.screenPrefs, dom.screenHistory, dom.screenAbout].forEach((s) => {
      if (s) s.classList.add("vno-hidden");
    });
  }
  function pictureBookPages() {
    const pages = [];
    if (!gameData || !gameData.chapters) return pages;
    gameData.chapters.forEach((ch) => {
      (ch.scenes || []).forEach((sc) => pages.push({ chapter: ch, scene: sc }));
    });
    return pages;
  }
  function pageLayerVisible() {
    return !!(dom.pageLayer && !dom.pageLayer.classList.contains("vno-hidden"));
  }
  function startPictureBook() {
    closeAllScreens();
    dom.mainMenu.classList.add("vno-hidden");
    dom.endingCard.classList.add("vno-hidden");
    dom.choiceOverlay.classList.add("vno-hidden");
    dom.puzzleOverlay.classList.add("vno-hidden");
    dom.chapterCard.classList.add("vno-hidden");
    activeChoices = null;
    activeEndingMsg = null;
    activePuzzle = null;
    currentChapterIdx = 0;
    currentSceneIdx = 0;
    currentBeatIdx = -1;
    dialogueHistory.length = 0;
    seenBeats.clear();
    pageIdx = 0;
    showPage(0);
  }
  function showPage(index) {
    const pages = pictureBookPages();
    if (!pages.length) {
      returnToMainMenu();
      return;
    }
    pageIdx = Math.max(0, Math.min(index, pages.length - 1));
    dom.pageLayer.classList.remove("vno-hidden");
    renderPage(pageIdx);
  }
  function renderPage(index, keepAudio) {
    const pages = pictureBookPages();
    if (!pages.length) return;
    pageIdx = Math.max(0, Math.min(index, pages.length - 1));
    const entry = pages[pageIdx];
    const scene = entry.scene;
    const chapterIdx = gameData.chapters.indexOf(entry.chapter);
    if (chapterIdx >= 0) currentChapterIdx = chapterIdx;
    currentSceneIdx = (entry.chapter.scenes || []).indexOf(scene);
    currentBeatIdx = -1;
    if (scene.bgPath) {
      dom.pageImage.style.backgroundImage = 'url("' + scene.bgPath + '")';
      dom.pageImage.classList.remove("vno-hidden");
      dom.pagePlaceholder.classList.add("vno-hidden");
    } else {
      dom.pageImage.style.backgroundImage = "none";
      dom.pageImage.classList.add("vno-hidden");
      dom.pagePlaceholder.classList.remove("vno-hidden");
    }
    renderPageCaption(scene);
    const counter = ui("Page {} of {}", "Page {} of {}").replace("{}", String(pageIdx + 1)).replace("{}", String(pages.length));
    if (dom.pageCounter) dom.pageCounter.textContent = counter;
    if (dom.pagePrev) dom.pagePrev.disabled = pageIdx <= 0;
    if (dom.pageNext) dom.pageNext.disabled = pageIdx >= pages.length - 1;
    if (!keepAudio) {
      if (scene.music) playMusic(scene.music, scene.musicLoopStartSec);
      else if (scene.music === null && scene.musicExplicitNull) stopMusic();
      if (scene.ambience) playAmbience(scene.ambience);
    }
    if (keepAudio) updatePageReplay(scene);
    else playPageVoice(scene);
    if (!keepAudio) quickSave();
  }
  function renderPageCaption(scene) {
    if (!dom.pageCaption) return;
    const html = pageCaption(scene);
    dom.pageCaption.innerHTML = html;
    fitCaption();
  }
  function pageCaption(scene) {
    const parts = [];
    (scene.beats || []).forEach((beat) => {
      if (beat.type === "line") {
        const name = escapePageText(getLocalizedCharacterName(beat, beat.speakerLabel));
        const text = formatBeatHtml(getLocalizedBeatText(beat.id, beat.text));
        parts.push('<div class="vno-page-line"><span class="vno-page-speaker">' + name + ":</span> " + text + "</div>");
      } else if (beat.type === "narration") {
        const text = formatBeatHtml(getLocalizedBeatText(beat.id, beat.text));
        parts.push('<div class="vno-page-line">' + text + "</div>");
      }
    });
    return parts.join("");
  }
  function escapePageText(s) {
    return String(s === null || s === void 0 ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function refreshPictureBookScreens() {
    if (!gameData) return;
    if (dom.endingCard && !dom.endingCard.classList.contains("vno-hidden")) {
      dom.endingCardText.textContent = ui("The End", "The End");
    }
    if (pageLayerVisible() && dom.mainMenu && dom.mainMenu.classList.contains("vno-hidden")) renderPage(pageIdx, true);
    if (dom.screenSave && !dom.screenSave.classList.contains("vno-hidden") && activeSaveScreen) {
      setElemText("vno-save-screen-title", activeSaveScreen.isSaving ? ui("Save", "Save Game") : ui("Load", "Load Game"));
      renderSaveSlots(activeSaveScreen.page, activeSaveScreen.isSaving);
    }
  }
  function nextPage() {
    const pages = pictureBookPages();
    if (!pages.length) return;
    if (pageIdx + 1 >= pages.length) {
      finishPictureBook(pages[pages.length - 1]);
      return;
    }
    showPage(pageIdx + 1);
  }
  function prevPage() {
    if (pageIdx <= 0) return;
    showPage(pageIdx - 1);
  }
  function finishPictureBook(lastEntry) {
    stopVoice();
    const ch = lastEntry ? lastEntry.chapter : null;
    if (ch && ch.choices && ch.choices.length > 0) {
      showChoices(ch.choices);
      return;
    }
    activeEndingMsg = ui("The End", "The End");
    if (dom.endingCardText) dom.endingCardText.textContent = activeEndingMsg;
    if (dom.pageLayer) dom.pageLayer.classList.add("vno-hidden");
    if (dom.endingCard) dom.endingCard.classList.remove("vno-hidden");
  }
  function pageVoiceClips(scene) {
    const clips = [];
    const voice = currentEdition && currentEdition.voice ? currentEdition.voice : null;
    if (!voice) return clips;
    (scene.beats || []).forEach((beat) => {
      if (beat.type !== "line" && beat.type !== "narration") return;
      const rel = voice[beat.id];
      if (rel) clips.push(rel);
    });
    return clips;
  }
  function updatePageReplay(scene) {
    pageVoices = pageVoiceClips(scene);
    pageVoiceIdx = 0;
    const has = pageVoices.length > 0;
    if (dom.pageReplay) {
      if (has) dom.pageReplay.classList.remove("vno-hidden");
      else dom.pageReplay.classList.add("vno-hidden");
    }
  }
  function playPageVoice(scene) {
    stopVoice();
    updatePageReplay(scene);
    playNextPageVoiceClip();
  }
  function playNextPageVoiceClip() {
    if (!pageVoices || pageVoiceIdx >= pageVoices.length) return;
    const rel = pageVoices[pageVoiceIdx];
    pageVoiceIdx++;
    if (!rel || !dom.audioVoice) return;
    dom.audioVoice.src = rel;
    const previous = dom.audioVoice.onended;
    dom.audioVoice.onended = function() {
      dom.audioVoice.onended = null;
      setVoiceActive(false);
      if (typeof previous === "function") previous();
      playNextPageVoiceClip();
    };
    setVoiceActive(true);
    dom.audioVoice.play().catch(() => {
      setVoiceActive(false);
    });
  }
  function replayPageVoice() {
    const pages = pictureBookPages();
    const entry = pages[pageIdx];
    if (entry) playPageVoice(entry.scene);
  }
  function settingsNumber(value, min, max, fallback) {
    const n = Number(value);
    if (!isFinite(n)) return fallback;
    return Math.max(min, Math.min(max, n));
  }
  function loadSettings() {
    let stored = null;
    try {
      const raw = localStorage.getItem("vno_settings");
      if (raw) stored = JSON.parse(raw);
    } catch (err) {
      stored = null;
    }
    if (stored && typeof stored === "object") {
      Object.keys(stored).forEach((key) => {
        settings[key] = stored[key];
      });
    }
    settings.textSpeed = settingsNumber(settings.textSpeed, 1, 100, 50);
    settings.autoDelay = settingsNumber(settings.autoDelay, 1, 10, 4);
    settings.volMusic = settingsNumber(settings.volMusic, 0, 100, 48);
    settings.volSfx = settingsNumber(settings.volSfx, 0, 100, 80);
    settings.volVoice = settingsNumber(settings.volVoice, 0, 100, 90);
    settings.storyTextSize = settingsNumber(settings.storyTextSize, 80, 140, 100);
    if (typeof settings.uiLang !== "string" || !settings.uiLang) settings.uiLang = "en";
    if (!stored || stored.schema === void 0 || stored.schema === null) {
      settings.volMusic = Math.min(settingsNumber(settings.volMusic, 0, 100, 48), 60);
      settings.schema = 2;
      saveSettings();
    }
  }
  function saveSettings() {
    localStorage.setItem("vno_settings", JSON.stringify(settings));
  }
  window.VNOEngine = {
    registerPuzzleKind: function(kind, handler) {
      puzzleHandlers.set(kind, handler);
    },
    registerBeatHandler: function(type, handler) {
      beatHandlers.set(type, handler);
    },
    getState: function() {
      return {
        chapterIdx: currentChapterIdx,
        sceneIdx: currentSceneIdx,
        beatIdx: currentBeatIdx,
        pageIdx,
        presentation,
        lang: currentLang,
        uiLang: settings.uiLang
      };
    },
    getLanguages: function() {
      return gameData && gameData.languages ? gameData.languages : [];
    },
    getUiLanguages: function() {
      return getUiLanguages();
    },
    switchLanguage,
    switchUiLanguage,
    loadGameData,
    advance
  };
  document.addEventListener("DOMContentLoaded", init);
})();
