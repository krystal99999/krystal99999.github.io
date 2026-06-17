(function(){
  const button = document.getElementById("image-button");
  if (button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      generateShareImage();
    }, true);
  }

  async function generateShareImage() {
    const result = getStoredResult();
    const primary = (result && result.primary) || {};
    const canvas = document.createElement("canvas");
    const width = 900;
    const height = 1900;
    const ctx = canvas.getContext("2d");
    const qrUrl = `https://quickchart.io/qr?size=220&margin=1&text=${encodeURIComponent(getShareUrl())}`;
    const warnings = [
      { name: text("#warning-company-name"), reason: text("#warning-company-text") },
      { name: text("#warning-two-name"), reason: text("#warning-two-text") }
    ];
    const altOne = text("#alt-one-name");
    const altTwo = text("#alt-two-name");

    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#f4f0ea";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = primary.color || "#151515";
    roundRect(ctx, 54, 54, width - 108, 430, 32);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    drawText(ctx, "我的厂格结果", 94, 112, 28, 700, width - 188, 36);
    drawText(ctx, text("#persona-title"), 94, 178, 58, 900, width - 188, 70);
    drawText(ctx, takeSentences(text("#persona-subtitle"), 3), 94, 292, 28, 500, width - 188, 40);

    ctx.fillStyle = "#fffaf2";
    roundRect(ctx, 54, 530, width - 108, 1030, 28);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.lineWidth = 4;
    ctx.stroke();

    drawLabel(ctx, "天选公司", 94, 606);
    drawText(ctx, text("#company-name"), 94, 670, 64, 900, width - 188, 74);
    drawLabel(ctx, "为什么是它", 94, 768);
    drawText(ctx, getImageReason(primary), 94, 824, 27, 800, width - 188, 37);

    drawLabel(ctx, "避雷公司", 94, 1040);
    drawWarningCard(ctx, warnings[0], 94, 1096, 342, 168);
    drawWarningCard(ctx, warnings[1], 464, 1096, 342, 168);

    drawLabel(ctx, "其他备选", 94, 1314);
    drawChip(ctx, altOne, 94, 1369, 260);
    drawChip(ctx, altTwo, 374, 1369, 260);

    ctx.fillStyle = "#f9dd5a";
    roundRect(ctx, 94, 1482, width - 188, 58, 18);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.stroke();
    ctx.fillStyle = "#151515";
    drawText(ctx, "准不准不重要，先看看哪家公司最会使用你。", 126, 1520, 23, 900, width - 252, 32);

    try {
      drawShareBar(ctx, await loadImage(qrUrl));
    } catch (error) {
      drawShareBar(ctx, null);
    }

    const url = canvas.toDataURL("image/png");
    const preview = document.getElementById("share-preview");
    const image = document.getElementById("result-image");
    const download = document.getElementById("download-link");
    if (image) image.src = url;
    if (download) download.href = url;
    if (preview) {
      preview.classList.remove("hidden");
      preview.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function getStoredResult() {
    try {
      const raw = localStorage.getItem("bigTechTestResult");
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function getImageReason(primary) {
    const reason = [primary.whyUseYou, trimSentence(primary.whereFeelsGood)].filter(Boolean).join(" ");
    return reason || text("#chosen-reason");
  }

  function drawLabel(ctx, value, x, y) {
    ctx.fillStyle = "#f05a28";
    drawText(ctx, value, x, y, 24, 900, 420, 32);
    ctx.fillStyle = "#151515";
  }

  function drawChip(ctx, value, x, y, width) {
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, x, y, width, 78, 18);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "#151515";
    drawText(ctx, value, x + 24, y + 51, 34, 900, width - 48, 40);
  }

  function drawWarningCard(ctx, warning, x, y, width, height) {
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, x, y, width, height, 20);
    ctx.fill();
    ctx.strokeStyle = "#151515";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "#151515";
    drawText(ctx, warning.name, x + 24, y + 52, 34, 900, width - 48, 40);
    ctx.fillStyle = "#444444";
    drawText(ctx, trimSentence(warning.reason), x + 24, y + 96, 20, 800, width - 48, 28);
    ctx.fillStyle = "#151515";
  }

  function drawShareBar(ctx, qrImage) {
    ctx.fillStyle = "#151515";
    roundRect(ctx, 54, 1630, 792, 210, 28);
    ctx.fill();
    ctx.fillStyle = "#f9dd5a";
    drawText(ctx, "扫码测你的厂命", 94, 1696, 34, 900, 500, 44);
    ctx.fillStyle = "#ffffff";
    drawText(ctx, "你是哪家互联网大厂的天选打工人？", 94, 1750, 25, 800, 500, 34);
    drawText(ctx, "仅供娱乐参考，不代表真实招聘标准", 94, 1794, 20, 500, 500, 28);
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, 664, 1656, 146, 146, 18);
    ctx.fill();
    if (qrImage) {
      ctx.drawImage(qrImage, 676, 1668, 122, 122);
      return;
    }
    ctx.fillStyle = "#151515";
    drawText(ctx, "打开页面", 686, 1710, 22, 900, 104, 30);
    drawText(ctx, "一起测", 696, 1748, 22, 900, 90, 30);
  }

  function drawText(ctx, value, x, y, size, weight, maxWidth, lineHeight) {
    ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;
    let line = "";
    let currentY = y;
    Array.from(String(value || "")).forEach((char) => {
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

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function trimSentence(value) {
    return String(value || "").split(/[。！？]/)[0] + "。";
  }

  function takeSentences(value, count) {
    const matches = String(value || "").match(/[^。！？]+[。！？]/g);
    if (!matches) return String(value || "");
    return matches.slice(0, count).join("");
  }

  function text(selector) {
    const el = document.querySelector(selector);
    return el ? el.textContent.trim() : "";
  }

  function getShareUrl() {
    return `${window.location.origin}${window.location.pathname}`;
  }
})();