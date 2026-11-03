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
  let settings = {
    textSpeed: 50,
    autoDelay: 4,
    volMusic: 80,
    volSfx: 80,
    volVoice: 90,
    skipUnseen: false
  };
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
  function loadGameData(data) {
    gameData = data;
    currentLang = gameData.primaryLang || "en";
    currentEdition = gameData.editions ? gameData.editions[currentLang] : null;
    populateLanguageSelect(dom.stageLanguage);
    populateLanguageSelect(dom.prefLanguage);
    applyLanguageTypography();
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
  function ui(key, fallback) {
    if (currentEdition && currentEdition.ui && currentEdition.ui[key]) {
      return currentEdition.ui[key];
    }
    return fallback !== void 0 ? fallback : key;
  }
  function setElemText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function updateUiStrings() {
    if (!gameData) return;
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
    setElemText("vno-history-title", ui("History", "History"));
    setElemText("vno-prefs-title", ui("Preferences", "Preferences"));
    setElemText("vno-about-title", ui("About", "About"));
    setElemText("vno-pref-label-display", ui("Display", "Display"));
    setElemText("vno-pref-fullscreen", ui("Fullscreen", "Toggle Fullscreen"));
    setElemText("vno-pref-label-language", ui("Language", "Language"));
    setElemText("vno-pref-label-text-speed", ui("Text Speed", "Text Speed"));
    setElemText("vno-pref-label-auto-delay", ui("Auto-Forward Time", "Auto-Forward Delay"));
    setElemText("vno-pref-label-vol-music", ui("Music Volume", "Music Volume"));
    setElemText("vno-pref-label-vol-sfx", ui("Sound Volume", "Sound Effects Volume"));
    setElemText("vno-pref-label-vol-voice", ui("Voice Volume", "Voice Volume"));
    const langLabel = ui("Language", "Language");
    if (dom.langBar) dom.langBar.title = langLabel;
    if (dom.stageLanguage) dom.stageLanguage.setAttribute("aria-label", langLabel);
  }
  function refreshActiveScreens() {
    if (!gameData) return;
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
  function applyAudioVolumes() {
    if (dom.audioMusic) dom.audioMusic.volume = settings.volMusic / 100;
    if (dom.audioAmbience) dom.audioAmbience.volume = settings.volSfx / 100;
    if (dom.audioSfx) dom.audioSfx.volume = settings.volSfx / 100;
    if (dom.audioVoice) dom.audioVoice.volume = settings.volVoice / 100;
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
    document.getElementById("vno-mm-load").addEventListener("click", () => openSaveScreen(false));
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
    document.getElementById("vno-pref-fullscreen").addEventListener("click", toggleFullscreen);
    bindRange("vno-pref-text-speed", "textSpeed");
    bindRange("vno-pref-auto-delay", "autoDelay");
    bindRange("vno-pref-vol-music", "volMusic", applyAudioVolumes);
    bindRange("vno-pref-vol-sfx", "volSfx", applyAudioVolumes);
    bindRange("vno-pref-vol-voice", "volVoice", applyAudioVolumes);
  }
  function bindRange(elemId, key, callback) {
    const el = document.getElementById(elemId);
    if (!el) return;
    el.value = settings[key];
    el.addEventListener("input", (e) => {
      settings[key] = Number(e.target.value);
      saveSettings();
      if (callback) callback();
    });
  }
  function bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.target && (e.target.tagName === "SELECT" || e.target.tagName === "INPUT")) return;
      if (dom.mainMenu && !dom.mainMenu.classList.contains("vno-hidden")) return;
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
    if (settings.textSpeed >= 100) {
      dom.dialogueText.innerHTML = htmlText;
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
    dom.audioVoice.play().catch(() => {
    });
  }
  function stopVoice() {
    if (dom.audioVoice) dom.audioVoice.pause();
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
    loadFromSlot("quick");
  }
  function saveToSlot(slotId) {
    const key = (gameData.saveDir || "vno-save") + "_" + slotId;
    const ch = gameData.chapters[currentChapterIdx];
    const data = {
      timestamp: Date.now(),
      title: ch ? ch.title : "",
      text: dom.dialogueText.textContent.slice(0, 60),
      chIdx: currentChapterIdx,
      scIdx: currentSceneIdx,
      beatIdx: currentBeatIdx,
      lang: currentLang
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  function loadFromSlot(slotId) {
    const key = (gameData.saveDir || "vno-save") + "_" + slotId;
    const raw = localStorage.getItem(key);
    if (!raw) return;
    const data = JSON.parse(raw);
    closeAllScreens();
    currentChapterIdx = data.chIdx;
    currentSceneIdx = data.scIdx;
    currentBeatIdx = data.beatIdx - 1;
    if (data.lang) switchLanguage(data.lang);
    advance();
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
  function loadSettings() {
    const raw = localStorage.getItem("vno_settings");
    if (raw) {
      try {
        Object.assign(settings, JSON.parse(raw));
      } catch (e) {
      }
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
        lang: currentLang
      };
    },
    getLanguages: function() {
      return gameData && gameData.languages ? gameData.languages : [];
    },
    switchLanguage,
    loadGameData,
    advance
  };
  document.addEventListener("DOMContentLoaded", init);
})();
