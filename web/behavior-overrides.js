(function () {
  function text(selector) {
    const el = document.querySelector(selector);
    return el ? el.textContent.trim() : '';
  }

  function patchPersonaTitle() {
    const el = document.querySelector('#persona-title');
    if (!el) return;
    if (el.textContent === '负责到底型闭环人') el.textContent = '负责到底型收尾人';
    if (el.textContent === '战役规划型脑内 PMO') el.textContent = '规划型操盘人';
  }

  function trimSentence(value) {
    return String(value || '').split(/[。！？]/)[0] + '。';
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

  function drawText(ctx, value, x, y, size, weight, maxWidth, lineHeight) {
    ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`;
    let line = '';
    let currentY = y;
    Array.from(String(value || '')).forEach((char) => {
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

  function drawLabel(ctx, value, x, y) {
    ctx.fillStyle = '#f05a28';
    drawText(ctx, value, x, y, 24, 900, 420, 32);
    ctx.fillStyle = '#151515';
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function drawShareBar(ctx, qrImage) {
    ctx.fillStyle = '#151515';
    roundRect(ctx, 54, 1380, 792, 210, 28);
    ctx.fill();
    ctx.fillStyle = '#f9dd5a';
    drawText(ctx, '扫码测你的厂命', 94, 1446, 34, 900, 500, 44);
    ctx.fillStyle = '#ffffff';
    drawText(ctx, '你是哪家互联网大厂的天选打工人？', 94, 1500, 25, 800, 500, 34);
    drawText(ctx, '仅供娱乐参考，不代表真实招聘标准', 94, 1544, 20, 500, 500, 28);
    ctx.fillStyle = '#ffffff';
    roundRect(ctx, 664, 1406, 146, 146, 18);
    ctx.fill();
    if (qrImage) {
      ctx.drawImage(qrImage, 676, 1418, 122, 122);
      return;
    }
    ctx.fillStyle = '#151515';
    drawText(ctx, '打开页面', 686, 1460, 22, 900, 104, 30);
    drawText(ctx, '一起测', 696, 1498, 22, 900, 90, 30);
  }

  async function generateImage(event) {
    if (!document.querySelector('#result-screen.is-active')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    patchPersonaTitle();

    const canvas = document.createElement('canvas');
    const width = 900;
    const height = 1660;
    const ctx = canvas.getContext('2d');
    const heroColor = getComputedStyle(document.querySelector('#result-hero')).backgroundColor || '#151515';
    const shareUrl = `${location.origin}${location.pathname}`;
    const qrUrl = `https://quickchart.io/qr?size=220&margin=1&text=${encodeURIComponent(shareUrl)}`;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#f4f0ea';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = heroColor;
    roundRect(ctx, 54, 54, width - 108, 344, 32);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    drawText(ctx, '你的结果', 94, 112, 28, 700, width - 188, 36);
    drawText(ctx, text('#persona-title'), 94, 178, 58, 900, width - 188, 70);
    drawText(ctx, text('#persona-subtitle'), 94, 318, 30, 500, width - 188, 42);

    ctx.fillStyle = '#fffaf2';
    roundRect(ctx, 54, 430, width - 108, 890, 28);
    ctx.fill();
    ctx.strokeStyle = '#151515';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = '#151515';
    drawLabel(ctx, '天选公司', 94, 506);
    drawText(ctx, text('#company-name'), 94, 570, 58, 900, 320, 66);
    drawText(ctx, text('#company-persona'), 94, 644, 28, 800, 320, 38);
    drawLabel(ctx, '不建议硬闯', 520, 506);
    drawText(ctx, text('#warning-company-name'), 520, 570, 58, 900, 280, 66);
    drawText(ctx, trimSentence(text('#warning-company-text')), 520, 644, 24, 700, 280, 34);

    ctx.fillStyle = '#f9dd5a';
    roundRect(ctx, 94, 750, width - 188, 190, 22);
    ctx.fill();
    ctx.strokeStyle = '#151515';
    ctx.stroke();
    ctx.fillStyle = '#151515';
    drawText(ctx, text('#roast'), 126, 805, 34, 900, width - 252, 46);
    drawLabel(ctx, '这份工作划不划算', 94, 1018);
    drawText(ctx, text('#deal-text'), 94, 1076, 32, 800, width - 188, 44);
    drawLabel(ctx, '欣赏你的地方', 94, 1222);
    drawText(ctx, trimSentence(text('#liked-text')), 94, 1280, 28, 500, width - 188, 40);

    try {
      drawShareBar(ctx, await loadImage(qrUrl));
    } catch (error) {
      drawShareBar(ctx, null);
    }
    const url = canvas.toDataURL('image/png');
    const preview = document.querySelector('#share-preview');
    document.querySelector('#result-image').src = url;
    document.querySelector('#download-link').href = url;
    preview.classList.remove('hidden');
    preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  new MutationObserver(patchPersonaTitle).observe(document.body, { childList: true, subtree: true, characterData: true });
  document.addEventListener('click', (event) => {
    if (event.target && event.target.closest && event.target.closest('#image-button')) generateImage(event);
  }, true);
  patchPersonaTitle();
})();
