const actionSeeds = [
  { text: "ご飯をいつもよりゆっくり食べる。", time: "30分", cost: "0円", place: "室内" },
  { text: "靴下を左右逆に履いてみる。", time: "1分", cost: "0円", place: "室内" },
  { text: "冷蔵庫を開けて3秒考えて閉める。", time: "1分", cost: "0円", place: "室内" },
  { text: "家の中で一番丸いものを探す。", time: "3分", cost: "0円", place: "室内" },
  { text: "自分の名前を心の中で3回言う。", time: "1分", cost: "0円", place: "室内" },
  { text: "今日のテーマカラーを勝手に決める。", time: "1分", cost: "0円", place: "室内" },
  { text: "スマホを裏返して置く。", time: "10分", cost: "0円", place: "室内" },
  { text: "利き手じゃない方でコップを持つ。", time: "1分", cost: "0円", place: "室内" },
  { text: "家の中の音を30秒聞く。", time: "1分", cost: "0円", place: "室内" },
  { text: "窓の外を1分だけ観察する。", time: "1分", cost: "0円", place: "室内" },
  { text: "机の上の物を1つだけ動かす。", time: "1分", cost: "0円", place: "室内" },
  { text: "お茶をゆっくり飲む。", time: "10分", cost: "0円", place: "室内" },
  { text: "お風呂でスマホを使わない。", time: "10分", cost: "0円", place: "浴室" },
  { text: "鼻歌を歌う。", time: "1分", cost: "0円", place: "室内" },
  { text: "翌月のカレンダーを見る。", time: "1分", cost: "0円", place: "室内" },
  { text: "空を見上げて雲に名前をつける。", time: "2分", cost: "0円", place: "屋外" },
  { text: "信号待ちで深呼吸する。", time: "1分", cost: "0円", place: "屋外" },
  { text: "公園のベンチを一瞬使う。", time: "2分", cost: "0円", place: "屋外" },
  { text: "建物の影を見て形を想像する。", time: "2分", cost: "0円", place: "屋外" },
  { text: "風の音を10秒聞く。", time: "1分", cost: "0円", place: "屋外" },
  { text: "足音に意識を向けて歩く。", time: "2分", cost: "0円", place: "屋外" },
  { text: "その場でジャンプをする。", time: "1秒", cost: "0円", place: "屋外" },
  { text: "ゴミを見つけたら拾って捨てる。", time: "5分", cost: "0円", place: "屋外" },
  { text: "ニヤリとしてみる。", time: "1分", cost: "0円", place: "室内" },
  { text: "一旦諦める。", time: "3秒", cost: "0円", place: "室内" },
  { text: "今日のラッキーナンバーを決める。", time: "1分", cost: "0円", place: "室内" },
  { text: "家の中で一番古いところを見る。", time: "1分", cost: "0円", place: "室内" },
  { text: "3年前の今日を想像する。", time: "2分", cost: "0円", place: "室内" },
  { text: "好きな単語を1つ選ぶ。", time: "1分", cost: "0円", place: "室内" },
  { text: "5秒だけ姿勢を正す。", time: "1分", cost: "0円", place: "室内" },
  { text: "今日の自分にタイトルをつける。", time: "2分", cost: "0円", place: "室内" },
  { text: "鏡に向かって軽く会釈する。", time: "1分", cost: "0円", place: "室内" },
  { text: "スマホの明るさを少し下げる。", time: "1分", cost: "0円", place: "室内" },
  { text: "決めセリフを言う。", time: "1分", cost: "0円", place: "室内" },
  { text: "普段読まないカテゴリーの本を買う。", time: "5分", cost: "〜1000円", place: "屋外" },
  { text: "白湯をゆっくり飲む。", time: "3分", cost: "0円", place: "室内" },
  { text: "窓を少しだけ開ける。", time: "1分", cost: "0円", place: "室内" },
  { text: "目を閉じて30秒静かにする。", time: "1分", cost: "0円", place: "室内" },
  { text: "手を温める。", time: "1分", cost: "0円", place: "室内" },
  { text: "背伸びをする。", time: "1分", cost: "0円", place: "室内" },
  { text: "今日は少しだけ遠回りする。", time: "5分", cost: "0円", place: "屋外" },
  { text: "いつもと違う順番で準備する。", time: "3分", cost: "0円", place: "室内" },
  { text: "今日の気分に色をつける。", time: "2分", cost: "0円", place: "室内" },
  { text: "何もしない時間を1分作る。", time: "1分", cost: "0円", place: "室内" },
];
function inferEnergyLevel(time) {
  // Support both "N分" and "N秒" labels without misclassifying seconds as high energy.
  const normalized = String(time).trim();
  if (normalized.includes("秒")) return "低";
  const minutes = Number(normalized.replace("分", ""));
  if (!Number.isFinite(minutes)) return "低";
  if (minutes <= 2) return "低";
  if (minutes <= 5) return "中";
  return "高";
}

function inferCostLevel(cost) {
  return cost === "0円" ? "0" : "~1000";
}

function inferIndoor(place) {
  return place.includes("室内") || place.includes("屋内") || place.includes("浴室");
}

function inferCategory(text, place, cost) {
  if (/送る|言う|人/.test(text)) return "人";
  if (/メール|スマホ|サブスク|調べる|テレビ/.test(text)) return "デジタル";
  if (/気持ち|思い出|未来|よかった|言語化|深呼吸|決める/.test(text)) return "内省";
  if (cost !== "0円") return "お金";
  if (place.includes("屋外")) return "外";
  return "家";
}

const actions = actionSeeds.map((item, i) => ({
  id: i + 1,
  category: inferCategory(item.text, item.place, item.cost),
  energy_level: inferEnergyLevel(item.time),
  cost_level: inferCostLevel(item.cost),
  indoor: inferIndoor(item.place),
  text: item.text,
  time: item.time,
  cost: item.cost,
  place: item.place
}));

const machine = document.querySelector(".machine");
const capsule = document.getElementById("capsule");
const result = document.getElementById("result");
const card = document.getElementById("card");
const actionsArea = document.getElementById("actions");
const actionText = document.getElementById("actionText");
const metaTime = document.getElementById("metaTime");
const metaCost = document.getElementById("metaCost");
const metaPlace = document.getElementById("metaPlace");
const retryBtn = document.getElementById("retryBtn");
const tryBtn = document.getElementById("tryBtn");
const shareBtn = document.getElementById("shareBtn");
const dailyInfo = document.getElementById("dailyInfo");
const brandLogo = document.getElementById("brandLogo");
const soundToggle = document.getElementById("soundToggle");
const chips = [...document.querySelectorAll(".chip")];
const dialButton = document.getElementById("dialButton");
const dialHitArea = document.getElementById("dialHitArea");
const machineSvg = document.querySelector(".machine-svg");
const painComment = document.getElementById("painComment");
const DIAL_SPIN_MS = 1000;
const CAPSULE_DROP_MS = 620;
const CAPSULE_OPEN_MS = 170;
const CAPSULE_FADE_MS = 150;
const PAIN_PATTERN_COUNT = 100;
const SOUND_GAIN_BOOST = 4;
const capsuleColorClasses = [
  "cap-red",
  "cap-blue",
  "cap-green",
  "cap-yellow",
  "cap-pink",
  "cap-purple",
  "cap-orange"
];
const bubbleToneClasses = [
  "tone-red",
  "tone-blue",
  "tone-green",
  "tone-yellow",
  "tone-pink",
  "tone-purple",
  "tone-orange"
];
const innerColorClasses = ["b1", "b2", "b3", "b4", "b5", "b6"];
const painPatterns = buildPainPatterns(PAIN_PATTERN_COUNT);
const mobilePainPatterns = [
  { x: 28, y: 26, tail: "bottom", rotate: -4 },
  { x: 50, y: 22, tail: "bottom", rotate: 2 },
  { x: 72, y: 26, tail: "bottom", rotate: 4 },
  { x: 24, y: 46, tail: "right", rotate: -3 },
  { x: 76, y: 46, tail: "left", rotate: 3 }
];

const SPIN_USER_ID_KEY = "ga_spin_user_id";
const SPIN_COUNT_KEY = "ga_spin_count";
let currentAction = null;
let isSpinning = false;
let soundEnabled = false;
let audioCtx = null;
let masterGainNode = null;
let painCommentTimer = null;
let lastPainPatternIndex = -1;
let lastMobilePainPatternIndex = -1;
let lastSoundToggleAt = 0;
let prefs = {
  low_energy: false,
  zero_cost: false,
  indoor_only: false
};

function updateDailyInfo() {
  if (dailyInfo) {
    dailyInfo.textContent = "無料で何回でも回せます";
  }
  if (retryBtn) retryBtn.disabled = false;
}

function weightedPick(list) {
  const weighted = [];

  for (const item of list) {
    let weight = 1;
    if (prefs.low_energy && item.energy_level === "低") weight += 3;
    if (prefs.zero_cost && item.cost_level === "0") weight += 3;
    if (prefs.indoor_only && item.indoor) weight += 4;

    for (let i = 0; i < weight; i++) weighted.push(item);
  }

  return weighted[Math.floor(Math.random() * weighted.length)] || list[0];
}

function pickAction() {
  const filtered = prefs.indoor_only ? actions.filter(a => a.indoor) : actions;
  return weightedPick(filtered.length ? filtered : actions);
}

function consumeDraw() {
  return true;
}

function setRandomCapsuleColor() {
  capsule.classList.remove(...capsuleColorClasses);
  const next = capsuleColorClasses[Math.floor(Math.random() * capsuleColorClasses.length)];
  capsule.classList.add(next);
  const tone = next.replace("cap-", "tone-");
  result.classList.remove(...bubbleToneClasses);
  result.classList.add(tone);
}

function randomizeInnerCapsuleOrientation() {
  const beads = document.querySelectorAll(".inner-beads .bead");
  beads.forEach((bead) => {
    const deg = Math.floor(Math.random() * 360);
    bead.style.transform = `rotate(${deg}deg)`;
  });
}

function randomizeInnerCapsuleColors() {
  const beads = [...document.querySelectorAll(".inner-beads .bead")];
  if (!beads.length) return;

  // Assign colors in a stable spatial order so nearby capsules don't cluster.
  beads.sort((a, b) => {
    const ay = Number(a.getAttribute("cy"));
    const by = Number(b.getAttribute("cy"));
    if (ay !== by) return ay - by;
    const ax = Number(a.getAttribute("cx"));
    const bx = Number(b.getAttribute("cx"));
    return ax - bx;
  });

  let previous = "";
  let beforePrevious = "";
  beads.forEach((bead) => {
    let candidates = innerColorClasses.filter((c) => c !== previous && c !== beforePrevious);
    if (!candidates.length) candidates = innerColorClasses.filter((c) => c !== previous);
    if (!candidates.length) candidates = [...innerColorClasses];

    const picked = candidates[Math.floor(Math.random() * candidates.length)];
    innerColorClasses.forEach((c) => bead.classList.remove(c));
    bead.classList.add(picked);
    beforePrevious = previous;
    previous = picked;
  });
}

function ensureAudioContext() {
  if (audioCtx) return audioCtx;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  audioCtx = new Ctx();
  masterGainNode = audioCtx.createGain();
  masterGainNode.gain.setValueAtTime(3.4, audioCtx.currentTime);
  masterGainNode.connect(audioCtx.destination);
  return audioCtx;
}

function playTone(freq, durationMs, type = "sine", gainValue = 0.025, delayMs = 0) {
  if (!soundEnabled) return;
  const ctx = ensureAudioContext();
  if (!ctx) return;
  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const start = ctx.currentTime + delayMs / 1000;
  const end = start + durationMs / 1000;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(gainValue * SOUND_GAIN_BOOST, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);
  osc.connect(gain);
  gain.connect(masterGainNode || ctx.destination);
  osc.start(start);
  osc.stop(end + 0.01);
}

function playDialSound() {
  // 心地よい連続音: 三和音寄りの高域を短く
  const seq = [392.0, 523.25, 659.25];
  for (let i = 0; i < 9; i += 1) {
    const t = i * 85;
    playTone(seq[i % seq.length], 44, "triangle", 0.012, t);
  }
}

function playDropSound() {
  // やわらかい「ぽこん」
  playTone(523.25, 58, "triangle", 0.015, 0);
  playTone(392.0, 120, "sine", 0.013, 38);
}

function playOpenSound() {
  // パカッ: Cメジャー系で明るく
  playTone(659.25, 70, "triangle", 0.015, 0);
  playTone(783.99, 95, "triangle", 0.014, 45);
  playTone(1046.5, 120, "sine", 0.013, 95);
}

function playPopupSound() {
  // パンパカパーン: C-E-G-C
  playTone(523.25, 120, "triangle", 0.016, 0);
  playTone(659.25, 120, "triangle", 0.016, 130);
  playTone(783.99, 130, "triangle", 0.016, 260);
  playTone(1046.5, 320, "sine", 0.017, 390);
}

function updateSoundButton() {
  soundToggle.setAttribute("aria-label", soundEnabled ? "サウンドON" : "サウンドOFF");
  soundToggle.classList.toggle("on", soundEnabled);
  soundToggle.classList.toggle("muted", !soundEnabled);
}

function hashNoise(seed) {
  const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453123;
  return value - Math.floor(value);
}

function buildPainPatterns(count) {
  const patterns = [];
  const perSide = Math.max(1, Math.floor(count / 4));

  for (let i = 0; i < count; i += 1) {
    const side = i % 4;
    const lane = Math.floor(i / 4);
    const t = (lane + 0.5) / perSide;
    const n1 = hashNoise(i + 1);
    const n2 = hashNoise(i + 197);
    const n3 = hashNoise(i + 401);

    let x = 50;
    let y = 50;
    let tail = "bottom";

    if (side === 0) {
      x = 16 + t * 68 + (n1 - 0.5) * 3;
      y = 2 + n2 * 6;
      tail = "bottom";
    } else if (side === 1) {
      x = 83 + n1 * 7;
      y = 18 + t * 62 + (n2 - 0.5) * 3;
      tail = "left";
    } else if (side === 2) {
      x = 16 + t * 68 + (n1 - 0.5) * 3;
      y = 80 + n2 * 7;
      tail = "top";
    } else {
      x = 10 + n1 * 7;
      y = 18 + t * 62 + (n2 - 0.5) * 3;
      tail = "right";
    }

    const rotate = (n3 - 0.5) * 8;
    patterns.push({ x, y, tail, rotate });
  }

  return patterns;
}

function pickPainPattern() {
  if (!painPatterns.length) {
    return { x: 96, y: 24, tail: "left", rotate: 0 };
  }

  let index = Math.floor(Math.random() * painPatterns.length);
  if (painPatterns.length > 1 && index === lastPainPatternIndex) {
    index = (index + 1) % painPatterns.length;
  }
  lastPainPatternIndex = index;
  return painPatterns[index];
}

function pickMobilePainPattern() {
  let index = Math.floor(Math.random() * mobilePainPatterns.length);
  if (mobilePainPatterns.length > 1 && index === lastMobilePainPatternIndex) {
    index = (index + 1) % mobilePainPatterns.length;
  }
  lastMobilePainPatternIndex = index;
  return mobilePainPatterns[index];
}

function showPainComment() {
  if (!painComment) return;
  const isMobile = window.matchMedia("(max-width: 560px)").matches;
  const pattern = isMobile ? pickMobilePainPattern() : pickPainPattern();
  painComment.style.setProperty("--bubble-rotate", `${pattern.rotate}deg`);
  painComment.dataset.tail = pattern.tail;
  painComment.style.left = `${pattern.x}%`;
  painComment.style.top = `${pattern.y}%`;

  if (machine) {
    const machineRect = machine.getBoundingClientRect();
    const commentRect = painComment.getBoundingClientRect();
    const viewport = window.visualViewport;
    const viewportW = viewport?.width || window.innerWidth;
    const viewportH = viewport?.height || window.innerHeight;
    const viewportX = viewport?.offsetLeft || 0;
    const viewportY = viewport?.offsetTop || 0;
    const margin = 8;

    const desiredCenterX = (pattern.x / 100) * machineRect.width;
    const desiredCenterY = (pattern.y / 100) * machineRect.height;

    const minCenterX = viewportX + margin + commentRect.width / 2 - machineRect.left;
    const maxCenterX = viewportX + viewportW - margin - commentRect.width / 2 - machineRect.left;
    const minCenterY = viewportY + margin + commentRect.height / 2 - machineRect.top;
    const maxCenterY = viewportY + viewportH - margin - commentRect.height / 2 - machineRect.top;

    const safeCenterX = Math.min(Math.max(desiredCenterX, minCenterX), maxCenterX);
    const safeCenterY = Math.min(Math.max(desiredCenterY, minCenterY), maxCenterY);

    painComment.style.left = `${(safeCenterX / machineRect.width) * 100}%`;
    painComment.style.top = `${(safeCenterY / machineRect.height) * 100}%`;
  }

  painComment.classList.remove("show");
  void painComment.offsetWidth;
  painComment.classList.add("show");

  if (painCommentTimer) clearTimeout(painCommentTimer);
  painCommentTimer = setTimeout(() => {
    painComment.classList.remove("show");
    painCommentTimer = null;
  }, 1200);
}

function handleMachineAreaClick(event) {
  if (!machineSvg) return;
  const rect = machineSvg.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const x = ((event.clientX - rect.left) / rect.width) * 320;
  const y = ((event.clientY - rect.top) / rect.height) * 300;

  const inPainArea = x >= 80 && x <= 240 && y >= 20 && y <= 186;
  if (inPainArea) showPainComment();
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (_) {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

function generateAnonymousUserId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `u_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getOrCreateAnonymousUserId() {
  let id = safeStorageGet(SPIN_USER_ID_KEY);
  if (!id) {
    id = generateAnonymousUserId();
    safeStorageSet(SPIN_USER_ID_KEY, id);
  }
  return id;
}

function incrementSpinCount() {
  const current = Number(safeStorageGet(SPIN_COUNT_KEY) || "0");
  const next = Number.isFinite(current) ? current + 1 : 1;
  safeStorageSet(SPIN_COUNT_KEY, String(next));
  return next;
}

function trackSpinEvent(action, trigger, spinCount) {
  if (typeof window.gtag !== "function") return;
  const userId = getOrCreateAnonymousUserId();
  window.gtag("set", "user_id", userId);
  window.gtag("set", "user_properties", { anonymous_user_id: userId });
  window.gtag("event", "gacha_spin", {
    spin_count: spinCount,
    spin_trigger: trigger,
    action_id: action?.id,
    action_category: action?.category,
    action_energy_level: action?.energy_level,
    action_cost_level: action?.cost_level,
    action_indoor: action?.indoor ? 1 : 0
  });
}
function resetViewForSpin() {
  result.classList.add("hidden");
  card.classList.add("hidden");
  if (actionsArea) actionsArea.classList.add("hidden");
  card.classList.remove("pop-in");
  if (actionsArea) actionsArea.classList.remove("pop-in");
  capsule.classList.remove("opened");
  capsule.classList.remove("vanishing");
}

function renderCard(action) {
  actionText.textContent = action.text;
  metaTime.textContent = `所要: ${action.time}`;
  metaCost.textContent = `予算: ${action.cost}`;
  metaPlace.textContent = action.place;
}

function spin(trigger = "unknown") {
  if (isSpinning) return;
  if (!consumeDraw()) return;

  isSpinning = true;
  if (retryBtn) retryBtn.disabled = true;
  currentAction = pickAction();
  const spinCount = incrementSpinCount();
  trackSpinEvent(currentAction, trigger, spinCount);
  resetViewForSpin();
  randomizeInnerCapsuleColors();
  setRandomCapsuleColor();
  machine.classList.add("spin");
  capsule.classList.remove("dropping");

  // Reflow to restart animation
  void capsule.offsetWidth;

  setTimeout(() => {
    capsule.classList.add("dropping");
    playDropSound();
  }, DIAL_SPIN_MS);

  setTimeout(() => {
    capsule.classList.add("opened");
    playOpenSound();
  }, DIAL_SPIN_MS + CAPSULE_DROP_MS);

  setTimeout(() => {
    capsule.classList.add("vanishing");
  }, DIAL_SPIN_MS + CAPSULE_DROP_MS + CAPSULE_OPEN_MS);

  setTimeout(() => {
    machine.classList.remove("spin");
    isSpinning = false;
    updateDailyInfo();
    renderCard(currentAction);
    result.classList.remove("hidden");
    card.classList.remove("hidden");
    if (actionsArea) actionsArea.classList.remove("hidden");
    card.classList.add("pop-in");
    if (actionsArea) actionsArea.classList.add("pop-in");
    playPopupSound();
  }, DIAL_SPIN_MS + CAPSULE_DROP_MS + CAPSULE_OPEN_MS + CAPSULE_FADE_MS);

  playDialSound();
}

function shareToX() {
  if (!currentAction) return;

  const lines = [
    "今日の一歩",
    currentAction.text,
    `${metaTime.textContent}　${metaCost.textContent}　${metaPlace.textContent}`,
    "",
    "#さて"
  ];

  const text = lines.join("\n");
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(intent, "_blank", "noopener,noreferrer");
}

function goTopAndReload() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.location.reload();
}

if (retryBtn) {
  retryBtn.addEventListener("click", () => spin("retry_button"));
}

if (tryBtn) {
  tryBtn.addEventListener("click", () => {
    tryBtn.classList.toggle("done");
    tryBtn.textContent = tryBtn.classList.contains("done") ? "✅ やる予定にした" : "✅ やってみる";
  });
}

shareBtn.addEventListener("click", shareToX);
brandLogo?.addEventListener("click", goTopAndReload);

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const key = chip.dataset.pref;
    prefs[key] = !prefs[key];
    chip.classList.toggle("active", prefs[key]);
  });
});

function handleSoundToggle() {
  const now = performance.now();
  if (now - lastSoundToggleAt < 220) return;
  lastSoundToggleAt = now;

  soundEnabled = !soundEnabled;
  updateSoundButton();
  if (soundEnabled) {
    playTone(520, 90, "triangle", 0.015, 0);
  }
}

soundToggle.addEventListener("pointerdown", handleSoundToggle);
soundToggle.addEventListener("click", handleSoundToggle);
dialButton.addEventListener("click", () => spin("dial_button"));
dialHitArea?.addEventListener("click", () => spin("dial_hit_area"));
machineSvg?.addEventListener("click", handleMachineAreaClick);

randomizeInnerCapsuleColors();
randomizeInnerCapsuleOrientation();
updateSoundButton();
updateDailyInfo();


