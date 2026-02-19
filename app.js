const actionSeeds = [
  { text: "深呼吸を10回する。", time: "1分", cost: "0円", place: "室内" },
  { text: "冷蔵庫の中を1段だけ整える。", time: "5分", cost: "0円", place: "室内" },
  { text: "机の上のいらない紙を3枚捨てる。", time: "2分", cost: "0円", place: "室内" },
  { text: "財布の中身を一度全部出して戻す。", time: "3分", cost: "0円", place: "室内" },
  { text: "今日やらないことを1つ決める。", time: "2分", cost: "0円", place: "室内" },
  { text: "未読メールを1通だけ処理する。", time: "3分", cost: "0円", place: "室内" },
  { text: "カーテンを開けて光を浴びる。", time: "1分", cost: "0円", place: "室内" },
  { text: "白湯をゆっくり飲む。", time: "3分", cost: "0円", place: "室内" },
  { text: "背筋を伸ばして1分座る。", time: "1分", cost: "0円", place: "室内" },
  { text: "スマホを5分触らない。", time: "5分", cost: "0円", place: "室内" },
  { text: "いつもと逆方向に100歩歩く。", time: "3分", cost: "0円", place: "屋外" },
  { text: "空を見上げて雲の形を探す。", time: "2分", cost: "0円", place: "屋外" },
  { text: "コンビニで知らない商品を1つ手に取る。", time: "5分", cost: "〜500円", place: "屋外" },
  { text: "近所の花を1つ見つける。", time: "5分", cost: "0円", place: "屋外" },
  { text: "自販機のラインナップをじっくり見る。", time: "2分", cost: "0円", place: "屋外" },
  { text: "5分だけ遠回りして帰る。", time: "5分", cost: "0円", place: "屋外" },
  { text: "公園のベンチに1分座る。", time: "3分", cost: "0円", place: "屋外" },
  { text: "歩きながら好きな曲を1曲聴く。", time: "4分", cost: "0円", place: "屋外" },
  { text: "100円だけ募金する。", time: "3分", cost: "〜100円", place: "屋外" },
  { text: "貯金箱に10円入れる。", time: "1分", cost: "10円", place: "室内" },
  { text: "使ってないサブスクを確認する。", time: "5分", cost: "0円", place: "室内" },
  { text: "今日の無駄遣いを1つ減らす。", time: "1分", cost: "0円", place: "室内" },
  { text: "冷蔵庫の余り物で何か作る。", time: "10分", cost: "0円", place: "室内" },
  { text: "最近話してない人を1人思い出す。", time: "1分", cost: "0円", place: "室内" },
  { text: "ありがとうを1回多く言う。", time: "1分", cost: "0円", place: "屋内/屋外" },
  { text: "スタンプだけでも誰かに送る。", time: "2分", cost: "0円", place: "室内" },
  { text: "昔の写真を1枚見返す。", time: "2分", cost: "0円", place: "室内" },
  { text: "「元気？」と一言送る。", time: "2分", cost: "0円", place: "室内" },
  { text: "冷蔵庫の中の一番古いものを確認する。", time: "3分", cost: "0円", place: "室内" },
  { text: "今日のラッキーカラーを勝手に決める。", time: "1分", cost: "0円", place: "室内" },
  { text: "3年前の自分を思い出す。", time: "2分", cost: "0円", place: "室内" },
  { text: "未来の自分に一言考える。", time: "3分", cost: "0円", place: "室内" },
  { text: "今日よかったことを1つ書く。", time: "2分", cost: "0円", place: "室内" },
  { text: "「なんとなく」を言語化する。", time: "3分", cost: "0円", place: "室内" },
  { text: "今の気持ちに名前をつける。", time: "2分", cost: "0円", place: "室内" },
  { text: "家の中で一番高いところを見る。", time: "1分", cost: "0円", place: "室内" },
  { text: "左右逆の手で歯磨きをする。", time: "3分", cost: "0円", place: "室内" },
  { text: "エレベーターのボタンをゆっくり押す。", time: "1分", cost: "0円", place: "屋内" },
  { text: "コンビニで一番高いお菓子を値段だけ見る。", time: "3分", cost: "0円", place: "屋外" },
  { text: "知らない単語を1つ調べる。", time: "3分", cost: "0円", place: "室内" },
  { text: "テレビの音を一度消す。", time: "1分", cost: "0円", place: "室内" },
  { text: "机の上を10cmだけ片付ける。", time: "2分", cost: "0円", place: "室内" },
  { text: "知らない店に入る。", time: "10分", cost: "〜1000円", place: "屋外" },
  { text: "普段選ばないメニューを選ぶ。", time: "5分", cost: "〜1000円", place: "屋外" },
  { text: "今日1回だけ断る勇気を出す。", time: "1分", cost: "0円", place: "屋内/屋外" },
  { text: "鏡を見て10秒自分を見る。", time: "1分", cost: "0円", place: "室内" },
  { text: "エスカレーターを使わず階段にする。", time: "3分", cost: "0円", place: "屋外" }
];

function inferEnergyLevel(time) {
  const minutes = Number(time.replace("分", ""));
  if (minutes <= 2) return "低";
  if (minutes <= 5) return "中";
  return "高";
}

function inferCostLevel(cost) {
  return cost === "0円" ? "0" : "~1000";
}

function inferIndoor(place) {
  return place.includes("室内") || place.includes("屋内");
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

function spin() {
  if (isSpinning) return;
  if (!consumeDraw()) return;

  isSpinning = true;
  if (retryBtn) retryBtn.disabled = true;
  currentAction = pickAction();
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
  retryBtn.addEventListener("click", spin);
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
dialButton.addEventListener("click", spin);
dialHitArea?.addEventListener("click", spin);
machineSvg?.addEventListener("click", handleMachineAreaClick);

randomizeInnerCapsuleColors();
randomizeInnerCapsuleOrientation();
updateSoundButton();
updateDailyInfo();


