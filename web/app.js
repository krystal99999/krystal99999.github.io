(function () {
  const appVersion = "20260616-9";
  const data = window.BigTechTestData;
  const companies = data.companies;
  const questions = data.questions;
  const talentDimensions = data.talentDimensions;
  const talentNames = data.talentNames;
  const workDimensions = data.workDimensions;
  const dealDimensions = data.dealDimensions;
  const letters = ["A", "B", "C", "D"];
  const rewardDimensions = ["pay", "growth", "resume"];
  const costDimensions = ["lowCost", "boundary"];
  const evaluationDimensions = ["clearEval", "comfort"];
  const stabilityDimensions = ["stability", "lowChange"];
  const companySignals = [
    [{ alibaba: 2, baidu: 1, zhihu: 1 }, { bytedance: 2, boss: 1 }, { tencent: 1, xiaohongshu: 4, kuaishou: 5 }, { alibaba: 1, jd: 2, didi: 2, qihoo: 1 }],
    [{ baidu: 2, zhihu: 5 }, { bytedance: 2, meituan: 1, boss: 1 }, { dewu: 2, xiaohongshu: 2, vip: 2 }, { jd: 1, ctrip: 1, qihoo: 1 }],
    [{ baidu: 2, zhihu: 1 }, { tencent: 1, xiaohongshu: 4, netease: 2, bilibili: 3, dewu: 1, iqiyi: 2 }, { pdd: 2, meituan: 2, vip: 1, boss: 1 }, { alibaba: 1, jd: 2, didi: 3, qihoo: 3 }],
    [{ bytedance: 1, baidu: 1 }, { alibaba: 1, jd: 1, netease: 1 }, { bytedance: 2, pdd: 1, boss: 1 }, { alibaba: 1, zhihu: 6, weibo: 6 }],
    [{ bytedance: 1, baidu: 1, zhihu: 1 }, { bytedance: 2, boss: 2, pdd: 1 }, { tencent: 1, xiaohongshu: 3, kuaishou: 6 }, { alibaba: 2, jd: 1, didi: 1 }],
    [{ alibaba: 2, tencent: 1 }, { bytedance: 2, pdd: 1, meituan: 1 }, { tencent: 2, bilibili: 2, netease: 1 }, { jd: 2, didi: 4, ctrip: 1, qihoo: 2 }],
    [{ tencent: 2, xiaohongshu: 4, kuaishou: 6 }, { baidu: 1, zhihu: 1 }, { alibaba: 2, jd: 1 }, { pdd: 1, boss: 4, iqiyi: 6 }],
    [{ alibaba: 2, zhihu: 7 }, { meituan: 1, jd: 1 }, { alibaba: 1, boss: 1 }, { baidu: 1, netease: 3, qihoo: 3 }],
    [{ netease: 3, dewu: 4, xiaohongshu: 3 }, { tencent: 2, xiaohongshu: 1 }, { meituan: 1, pdd: 1, vip: 1 }, { bytedance: 2, boss: 1 }],
    [{ pdd: 2, bytedance: 1, boss: 1 }, { bytedance: 2, alibaba: 1 }, { tencent: 1, ctrip: 2, weibo: 7, qihoo: 3 }, { ctrip: 2, netease: 2, weibo: 7 }],
    [{ pdd: 2, bytedance: 1 }, { bytedance: 2, boss: 1 }, { tencent: 1, ctrip: 2, jd: 1 }, { ctrip: 2, weibo: 2, qihoo: 4, netease: 2 }],
    [{ bytedance: 2, pdd: 1, boss: 1 }, { alibaba: 2, tencent: 1 }, { ctrip: 2, netease: 2, baidu: 1, weibo: 6, qihoo: 2 }, { pdd: 1, bytedance: 1 }],
    [{ alibaba: 1, zhihu: 5 }, { jd: 1, ctrip: 1 }, { pdd: 2, meituan: 1 }, { bytedance: 1, boss: 4, weibo: 6 }],
    [{ bytedance: 4, boss: 2, pdd: 1 }, { alibaba: 4, jd: 1 }, { tencent: 3, xiaohongshu: 4, bilibili: 8 }, { baidu: 3, netease: 4, qihoo: 4, ctrip: 2 }],
    [{ meituan: 4, jd: 2, didi: 1 }, { pdd: 4, bytedance: 1 }, { jd: 2, ctrip: 3, vip: 4, qihoo: 3 }, { netease: 4, tencent: 1, dewu: 4, iqiyi: 8, bilibili: 6 }]
  ];

  const state = {
    currentIndex: 0,
    answers: []
  };

  const screens = {
    home: document.getElementById("home-screen"),
    quiz: document.getElementById("quiz-screen"),
    result: document.getElementById("result-screen")
  };

  const els = {
    startButton: document.getElementById("start-button"),
    lastResultButton: document.getElementById("last-result-button"),
    prevButton: document.getElementById("prev-button"),
    nextButton: document.getElementById("next-button"),
    restartButton: document.getElementById("restart-button"),
    imageButton: document.getElementById("image-button"),
    questionCount: document.getElementById("question-count"),
    progressText: document.getElementById("progress-text"),
    progressFill: document.getElementById("progress-fill"),
    questionTitle: document.getElementById("question-title"),
    options: document.getElementById("options"),
    resultHero: document.getElementById("result-hero"),
    personaSticker: document.getElementById("persona-sticker"),
    personaTitle: document.getElementById("persona-title"),
    personaSubtitle: document.getElementById("persona-subtitle"),
    companyName: document.getElementById("company-name"),
    companyPersona: document.getElementById("company-persona"),
    chosenReason: document.getElementById("chosen-reason"),
    warningCompanyName: document.getElementById("warning-company-name"),
    warningCompanyText: document.getElementById("warning-company-text"),
    roast: document.getElementById("roast"),
    dealText: document.getElementById("deal-text"),
    likedText: document.getElementById("liked-text"),
    stayText: document.getElementById("stay-text"),
    torturedText: document.getElementById("tortured-text"),
    altOneName: document.getElementById("alt-one-name"),
    altOneText: document.getElementById("alt-one-text"),
    altTwoName: document.getElementById("alt-two-name"),
    altTwoText: document.getElementById("alt-two-text"),
    sharePreview: document.getElementById("share-preview"),
    resultImage: document.getElementById("result-image"),
    downloadLink: document.getElementById("download-link")
  };

  let latestResult = null;
  let autoTimer = null;

  function showScreen(name) {
    Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
    screens[name].classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function createScores(keys) {
    return keys.reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
  }

  function addScores(target, source) {
    Object.keys(source || {}).forEach((key) => {
      target[key] = (target[key] || 0) + source[key];
    });
  }

  function calculateResult(answers) {
    const talentScores = createScores(talentDimensions);
    const workScores = createScores(workDimensions);
    const dealScores = createScores(dealDimensions);
    const signals = {};

    answers.forEach((optionIndex, questionIndex) => {
      const option = questions[questionIndex].options[optionIndex];
      addScores(talentScores, option.talentScores);
      addScores(workScores, option.workScores);
      addScores(dealScores, option.dealScores);
      addScores(signals, companySignals[questionIndex] && companySignals[questionIndex][optionIndex]);
    });

    const rawRanked = companies.map((company) => {
      return {
        company,
        talentRaw: weightedScore(talentScores, company.talentWeights, talentDimensions),
        workRaw: weightedScore(workScores, company.workWeights, workDimensions),
        rewardRaw: weightedScore(dealScores, company.dealProfile, rewardDimensions),
        costRaw: weightedScore(dealScores, company.dealProfile, costDimensions),
        evaluationRaw: weightedScore(dealScores, company.dealProfile, evaluationDimensions),
        stabilityRaw: weightedScore(dealScores, company.dealProfile, stabilityDimensions),
        signalRaw: signals[company.id] || 0
      };
    });
    const ranges = {
      talent: getRange(rawRanked.map((item) => item.talentRaw)),
      work: getRange(rawRanked.map((item) => item.workRaw)),
      reward: getRange(rawRanked.map((item) => item.rewardRaw)),
      cost: getRange(rawRanked.map((item) => item.costRaw)),
      evaluation: getRange(rawRanked.map((item) => item.evaluationRaw)),
      stability: getRange(rawRanked.map((item) => item.stabilityRaw))
    };
    const ranked = rawRanked
      .map((item) => {
        const talentFit = normalize(item.talentRaw, ranges.talent);
        const workFit = normalize(item.workRaw, ranges.work);
        const rewardFit = normalize(item.rewardRaw, ranges.reward);
        const costFit = normalize(item.costRaw, ranges.cost);
        const evaluationFit = normalize(item.evaluationRaw, ranges.evaluation);
        const stabilityFit = normalize(item.stabilityRaw, ranges.stability);
        const finalScore = talentFit * 0.3 + workFit * 0.25 + rewardFit * 0.18 + costFit * 0.12 + evaluationFit * 0.1 + stabilityFit * 0.05 + item.signalRaw * 0.25;
        const painScore = talentFit * 0.35 + (1 - workFit) * 0.25 + (1 - costFit) * 0.18 + (1 - evaluationFit) * 0.14 + (1 - stabilityFit) * 0.08;
        return { ...item, talentFit, workFit, rewardFit, costFit, evaluationFit, stabilityFit, finalScore, painScore };
      })
      .sort((a, b) => b.finalScore - a.finalScore);
    const warning = ranked
      .slice()
      .filter((item) => item.company.id !== ranked[0].company.id && item.talentFit >= 0.45)
      .sort((a, b) => b.painScore - a.painScore)[0] || ranked[ranked.length - 1];

    return {
      talentScores,
      workScores,
      dealScores,
      persona: getPersona(talentScores, dealScores),
      primary: ranked[0].company,
      alternatives: ranked.slice(1, 3).map((item) => item.company),
      warning: warning.company
    };
  }

  function weightedScore(scores, weights, keys) {
    return keys.reduce((sum, key) => {
      return sum + (scores[key] || 0) * ((weights && weights[key]) || 0);
    }, 0);
  }

  function getRange(values) {
    return {
      min: Math.min(...values),
      max: Math.max(...values)
    };
  }

  function normalize(value, range) {
    if (range.max === range.min) return 0.5;
    return (value - range.min) / (range.max - range.min);
  }

  function getPersona(talentScores, dealScores) {
    const sorted = talentDimensions
      .map((key) => ({ key, value: talentScores[key] || 0 }))
      .sort((a, b) => b.value - a.value);
    const top = sorted[0].key;
    const second = sorted[1].key;
    const dealTop = dealDimensions
      .map((key) => ({ key, value: dealScores[key] || 0 }))
      .sort((a, b) => b.value - a.value)[0].key;
    const personas = {
      sharpness: { title: "抓重点型高敏打工人", subtitle: "你不是爱挑刺，你是很难忍受大家围着一个假问题空转。", sticker: "scope" },
      depth: { title: "深水思考型慢热狠人", subtitle: "你不怕问题难，你怕大家拿一个浅答案假装解决了问题。", sticker: "scope" },
      drive: { title: "没人催也会动的自驱机器", subtitle: "你不是天生爱卷，你只是看到事情躺着就手痒。", sticker: "fire" },
      ownership: { title: "负责到底型闭环人", subtitle: "你最烦那种人人都提建议、最后没人收尸的场面。", sticker: "wrench" },
      empathy: { title: "用户体感显微镜", subtitle: "你不是玻璃心，你只是能听见别人觉得别扭的那一秒。", sticker: "radar" },
      planning: { title: "战役规划型脑内 PMO", subtitle: "你不是爱写计划，你是知道没路径的热血最后通常会变成锅。", sticker: "mic" },
      orgSense: { title: "组织迷宫生存家", subtitle: "你不是圆滑，你只是知道很多事不是对就会自动发生。", sticker: "bubble" },
      feedback: { title: "反馈代谢型升级人", subtitle: "你不是不破防，你只是破完防还能把方案改出来。", sticker: "fire" },
      taste: { title: "质感洁癖型打磨人", subtitle: "别人说差不多，你已经在心里把这个东西重做了三遍。", sticker: "wave" },
      reality: { title: "现实复杂度处理器", subtitle: "你不相信漂亮话，你只相信链路跑通、成本压住、锅别炸。", sticker: "wrench" }
    };
    const dealNotes = {
      pay: "你的隐藏账本偏向：钱要给到位。",
      growth: "你的隐藏账本偏向：苦可以，但不能白苦。",
      resume: "你的隐藏账本偏向：这段经历要能变成筹码。",
      lowCost: "你的隐藏账本偏向：别把活多包装成成长。",
      boundary: "你的隐藏账本偏向：工作不能接管整个人。",
      clearEval: "你的隐藏账本偏向：累可以，但别玄学评价。",
      comfort: "你的隐藏账本偏向：氛围没人味会让你很快下头。",
      stability: "你的隐藏账本偏向：稳定感是重要续命道具。",
      lowChange: "你的隐藏账本偏向：你不想隔三差五重开人生。"
    };
    const persona = personas[top];

    return {
      title: persona.title,
      subtitle: `${persona.subtitle} ${dealNotes[dealTop]} 隐藏副本：${talentNames[second]}。`,
      top,
      second,
      sticker: persona.sticker
    };
  }

  function renderQuestion() {
    clearTimeout(autoTimer);
    const question = questions[state.currentIndex];
    const progress = Math.round(((state.currentIndex + 1) / questions.length) * 100);
    els.questionCount.textContent = `第 ${state.currentIndex + 1} / ${questions.length} 题`;
    els.progressText.textContent = `${progress}%`;
    els.progressFill.style.width = `${progress}%`;
    els.questionTitle.textContent = question.title;
    els.nextButton.textContent = state.currentIndex === questions.length - 1 ? "看结果" : "下一题";
    els.prevButton.disabled = state.currentIndex === 0;
    els.options.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `option${state.answers[state.currentIndex] === index ? " is-selected" : ""}`;
      button.innerHTML = `<span class="option-letter">${letters[index]}</span><span class="option-text"></span>`;
      button.querySelector(".option-text").textContent = option.text;
      button.addEventListener("click", () => {
        state.answers[state.currentIndex] = index;
        renderQuestion();
        autoTimer = setTimeout(goNext, 220);
      });
      els.options.appendChild(button);
    });
  }

  function renderResult(result) {
    latestResult = result;
    const primary = result.primary;
    const [altOne, altTwo] = result.alternatives;
    els.resultHero.style.background = primary.color;
    els.personaSticker.innerHTML = getStickerSvg(result.persona.sticker);
    els.personaTitle.textContent = result.persona.title;
    els.personaSubtitle.textContent = result.persona.subtitle;
    els.companyName.textContent = primary.name;
    els.companyPersona.textContent = primary.tag;
    els.chosenReason.textContent = trimSentence(primary.whyUseYou);
    els.warningCompanyName.textContent = result.warning.name;
    els.warningCompanyText.textContent = result.warning.warningReason;
    els.roast.textContent = primary.mainVerdict;
    els.dealText.textContent = primary.dealVerdict;
    els.likedText.textContent = primary.whyUseYou;
    els.stayText.textContent = primary.whereFeelsGood;
    els.torturedText.textContent = primary.whereHurts;

    els.altOneName.textContent = altOne.name;
    els.altOneText.textContent = altOne.altReason || altOne.persona;
    els.altTwoName.textContent = altTwo.name;
    els.altTwoText.textContent = altTwo.altReason || altTwo.persona;
    els.sharePreview.classList.add("hidden");
  }

  function startQuiz() {
    state.currentIndex = 0;
    state.answers = [];
    renderQuestion();
    showScreen("quiz");
  }

  function goNext() {
    if (state.answers[state.currentIndex] === undefined) {
      alert("先选一个，不然大厂也看不懂你。");
      return;
    }

    if (state.currentIndex === questions.length - 1) {
      const result = calculateResult(state.answers);
      localStorage.setItem("bigTechTestResult", JSON.stringify(result));
      renderResult(result);
      els.lastResultButton.classList.remove("hidden");
      showScreen("result");
      return;
    }

    state.currentIndex += 1;
    renderQuestion();
  }

  function goPrev() {
    clearTimeout(autoTimer);
    if (state.currentIndex === 0) return;
    state.currentIndex -= 1;
    renderQuestion();
  }

  function showLastResult() {
    const raw = localStorage.getItem("bigTechTestResult");
    if (!raw) return;
    renderResult(JSON.parse(raw));
    showScreen("result");
  }

  async function generateResultImage() {
    if (!latestResult) return;
    const canvas = document.createElement("canvas");
    const width = 900;
    const height = 1660;
    const ctx = canvas.getContext("2d");
    const primary = latestResult.primary;
    const warning = latestResult.warning;
    const qrUrl = `https://quickchart.io/qr?size=220&margin=1&text=${encodeURIComponent(getShareUrl())}`;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#f4f0ea";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = primary.color;
    roundRect(ctx, 54, 54, width - 108, 344, 32);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    drawText(ctx, "你的大厂职场人格", 94, 112, 28, 700, width - 188, 36);
    drawText(ctx, latestResult.persona.title, 94, 178, 58, 900, width - 188, 70);
    drawText(ctx, latestResult.persona.subtitle, 94, 318, 30, 500, width - 188, 42);

    ctx.fillStyle = "#fffaf2";
    roundRect(ctx, 54, 430, width - 108, 890, 28);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "#151515";
    drawLabel(ctx, "天选公司", 94, 506);
    drawText(ctx, primary.name, 94, 570, 58, 900, 320, 66);
    drawText(ctx, primary.tag, 94, 644, 28, 800, 320, 38);

    drawLabel(ctx, "雷点公司", 520, 506);
    drawText(ctx, warning.name, 520, 570, 58, 900, 280, 66);
    drawText(ctx, trimSentence(warning.warningReason), 520, 644, 24, 700, 280, 34);

    ctx.fillStyle = "#f9dd5a";
    roundRect(ctx, 94, 750, width - 188, 190, 22);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.stroke();
    ctx.fillStyle = "#151515";
    drawText(ctx, primary.mainVerdict, 126, 805, 34, 900, width - 252, 46);

    drawLabel(ctx, "这份工值不值", 94, 1018);
    drawText(ctx, primary.dealVerdict, 94, 1076, 32, 800, width - 188, 44);
    drawLabel(ctx, "它为什么会看上你", 94, 1222);
    drawText(ctx, trimSentence(primary.whyUseYou), 94, 1280, 28, 500, width - 188, 40);
    try {
      const qrImage = await loadImage(qrUrl);
      drawShareBar(ctx, qrImage);
    } catch (error) {
      drawShareBar(ctx, null);
    }

    let url;
    try {
      url = canvas.toDataURL("image/png");
    } catch (error) {
      url = createResultImageWithoutQr(latestResult);
    }
    els.resultImage.src = url;
    els.downloadLink.href = url;
    els.sharePreview.classList.remove("hidden");
    els.sharePreview.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function drawLabel(ctx, text, x, y) {
    ctx.fillStyle = "#f05a28";
    drawText(ctx, text, x, y, 24, 900, 400, 32);
    ctx.fillStyle = "#151515";
  }

  function createResultImageWithoutQr(result) {
    const canvas = document.createElement("canvas");
    const width = 900;
    const height = 1660;
    const ctx = canvas.getContext("2d");
    const primary = result.primary;
    const warning = result.warning;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#f4f0ea";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = primary.color;
    roundRect(ctx, 54, 54, width - 108, 344, 32);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    drawText(ctx, "你的大厂职场人格", 94, 112, 28, 700, width - 188, 36);
    drawText(ctx, result.persona.title, 94, 178, 58, 900, width - 188, 70);
    drawText(ctx, result.persona.subtitle, 94, 318, 30, 500, width - 188, 42);

    ctx.fillStyle = "#fffaf2";
    roundRect(ctx, 54, 430, width - 108, 890, 28);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "#151515";
    drawLabel(ctx, "天选公司", 94, 506);
    drawText(ctx, primary.name, 94, 570, 58, 900, 320, 66);
    drawText(ctx, primary.tag, 94, 644, 28, 800, 320, 38);
    drawLabel(ctx, "雷点公司", 520, 506);
    drawText(ctx, warning.name, 520, 570, 58, 900, 280, 66);
    drawText(ctx, trimSentence(warning.warningReason), 520, 644, 24, 700, 280, 34);
    ctx.fillStyle = "#f9dd5a";
    roundRect(ctx, 94, 750, width - 188, 190, 22);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.stroke();
    ctx.fillStyle = "#151515";
    drawText(ctx, primary.mainVerdict, 126, 805, 34, 900, width - 252, 46);
    drawLabel(ctx, "这份工值不值", 94, 1018);
    drawText(ctx, primary.dealVerdict, 94, 1076, 32, 800, width - 188, 44);
    drawLabel(ctx, "它为什么会看上你", 94, 1222);
    drawText(ctx, trimSentence(primary.whyUseYou), 94, 1280, 28, 500, width - 188, 40);
    drawShareBar(ctx, null);
    return canvas.toDataURL("image/png");
  }

  function drawShareBar(ctx, qrImage) {
    ctx.fillStyle = "#151515";
    roundRect(ctx, 54, 1380, 792, 210, 28);
    ctx.fill();

    ctx.fillStyle = "#f9dd5a";
    drawText(ctx, "扫码测你的大厂命格", 94, 1446, 34, 900, 500, 44);
    ctx.fillStyle = "#ffffff";
    drawText(ctx, "你是哪家互联网大厂的天选打工人？", 94, 1500, 25, 800, 500, 34);
    drawText(ctx, "仅供娱乐参考，不代表真实招聘标准", 94, 1544, 20, 500, 500, 28);

    ctx.fillStyle = "#ffffff";
    roundRect(ctx, 664, 1406, 146, 146, 18);
    ctx.fill();
    if (qrImage) {
      ctx.drawImage(qrImage, 676, 1418, 122, 122);
      return;
    }

    ctx.fillStyle = "#151515";
    drawText(ctx, "打开页面", 686, 1460, 22, 900, 104, 30);
    drawText(ctx, "一起测", 696, 1498, 22, 900, 90, 30);
  }

  function trimSentence(text) {
    return String(text || "").split(/[。！？]/)[0] + "。";
  }

  function getShareUrl() {
    return `${window.location.origin}${window.location.pathname}`;
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function getStickerSvg(type) {
    const stickers = {
      fire: `<svg viewBox="0 0 120 120" role="img"><path class="s-fill" d="M62 104c-23 0-39-14-39-36 0-14 8-25 19-34 2 12 8 18 16 22-3-17 5-31 18-42 3 20 21 26 21 51 0 23-15 39-35 39Z"/><circle class="s-face" cx="60" cy="70" r="22"/><path class="s-line" d="M50 68h.5M70 68h.5M51 82c8 5 15 5 24 0"/></svg>`,
      mic: `<svg viewBox="0 0 120 120" role="img"><rect class="s-fill" x="38" y="16" width="44" height="62" rx="22"/><path class="s-line" d="M28 55c0 21 14 34 32 34s32-13 32-34M60 90v16M42 106h36M48 40h24M48 55h24"/></svg>`,
      radar: `<svg viewBox="0 0 120 120" role="img"><circle class="s-fill" cx="60" cy="60" r="42"/><circle class="s-face" cx="60" cy="60" r="23"/><path class="s-line" d="M60 60 86 34M60 30v8M60 82v8M30 60h8M82 60h8M49 64h.5M70 64h.5"/></svg>`,
      wave: `<svg viewBox="0 0 120 120" role="img"><path class="s-fill" d="M17 81c17 5 27-3 38-14 13-13 25-17 45 1-4 22-20 35-42 35-18 0-33-8-41-22Z"/><path class="s-line" d="M25 74c13 2 21-4 31-14 11-11 23-13 38 0M41 89c12 5 26 5 39-1"/><circle class="s-face" cx="62" cy="64" r="13"/></svg>`,
      abacus: `<svg viewBox="0 0 120 120" role="img"><rect class="s-fill" x="22" y="22" width="76" height="76" rx="14"/><path class="s-line" d="M34 42h52M34 60h52M34 78h52M42 32v56M60 32v56M78 32v56"/><circle class="s-face" cx="42" cy="42" r="5"/><circle class="s-face" cx="60" cy="60" r="5"/><circle class="s-face" cx="78" cy="78" r="5"/></svg>`,
      scope: `<svg viewBox="0 0 120 120" role="img"><circle class="s-fill" cx="52" cy="52" r="32"/><path class="s-line" d="M75 75l25 25M52 32v40M32 52h40M42 42l20 20M62 42 42 62"/></svg>`,
      wrench: `<svg viewBox="0 0 120 120" role="img"><path class="s-fill" d="M82 16c-9 0-17 5-21 12l18 18-13 13-18-18c-7 5-12 12-12 22 0 4 1 8 3 12l-24 24 14 14 24-24c4 2 8 3 12 3 17 0 31-14 31-31 0-4-1-8-2-11L80 64 66 50l14-14 14 14c2-4 3-8 3-12 0-12-7-22-15-22Z"/><path class="s-line" d="M30 101 53 78M66 50l14-14"/></svg>`,
      bubble: `<svg viewBox="0 0 120 120" role="img"><path class="s-fill" d="M22 25h76v53H61L38 97V78H22z"/><path class="s-line" d="M38 43h44M38 58h34M38 73h22"/></svg>`
    };
    return stickers[type] || stickers.bubble;
  }

  function drawText(ctx, text, x, y, size, weight, maxWidth, lineHeight) {
    ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;
    const words = Array.from(text);
    let line = "";
    let currentY = y;
    words.forEach((char) => {
      const test = line + char;
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = char;
        currentY += lineHeight;
      } else {
        line = test;
      }
    });
    if (line) ctx.fillText(line, x, currentY);
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  els.startButton.addEventListener("click", startQuiz);
  els.lastResultButton.addEventListener("click", showLastResult);
  els.prevButton.addEventListener("click", goPrev);
  els.nextButton.addEventListener("click", goNext);
  els.restartButton.addEventListener("click", startQuiz);
  els.imageButton.addEventListener("click", generateResultImage);

  if (localStorage.getItem("bigTechTestResult")) {
    if (localStorage.getItem("bigTechTestVersion") === appVersion) {
      els.lastResultButton.classList.remove("hidden");
    } else {
      localStorage.removeItem("bigTechTestResult");
    }
  }

  localStorage.setItem("bigTechTestVersion", appVersion);
})();
