// Preloaded logos (Base64 JPG)
const PRELOADED_LOGOS = {
  'osnovnoi': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCABkAGQDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigD/9k=',
  'dopolnitelnyi': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCABkAGQDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigD/9k=',
  'osnovnoi_inv': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCABkAGQDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigD/9k=',
  'dopolnitelnyi_inv': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCABkAGQDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigD/9k='
};

// Preset sizes by platform
const PRESET_SIZES = {
  'РСЯ': [
    { width: 1600, height: 1200, checked: true }
  ],
  'MTS': [
    { width: 200, height: 200, checked: true },
    { width: 240, height: 400, checked: true },
    { width: 300, height: 250, checked: true },
    { width: 300, height: 300, checked: true },
    { width: 300, height: 50, checked: true },
    { width: 300, height: 600, checked: true },
    { width: 320, height: 100, checked: true },
    { width: 320, height: 480, checked: true },
    { width: 336, height: 280, checked: true },
    { width: 728, height: 90, checked: true }
  ],
  'Upravel': [
    { width: 300, height: 250, checked: true },
    { width: 320, height: 100, checked: true },
    { width: 320, height: 50, checked: true },
    { width: 336, height: 280, checked: true },
    { width: 300, height: 300, checked: true },
    { width: 300, height: 600, checked: true }
  ],
  'Habr': [
    { width: 300, height: 600, checked: true },
    { width: 300, height: 250, checked: true },
    { width: 1560, height: 320, checked: true },
    { width: 960, height: 450, checked: true },
    { width: 1320, height: 300, checked: true },
    { width: 520, height: 800, checked: true },
    { width: 1920, height: 1080, checked: true },
    { width: 600, height: 1200, checked: true },
    { width: 900, height: 750, checked: true }
  ],
  'Ozon': [
    { width: 2832, height: 600, checked: true },
    { width: 1080, height: 450, checked: true }
  ]
};

// Application state
let currentPreviewIndex = 0;

let state = {
  paddingPercent: 5,
  title: 'Your Headline',
  titleColor: '#ffffff',
  titleAlign: 'left',
  titleVPos: 'top',
  titleSize: 64,
  titleWeight: 700,
  titleLetterSpacing: 0,
  titleLineHeight: 1.1,
  subtitle: 'Subtitle description',
  subtitleColor: '#e0e0e0',
  subtitleAlign: 'left',
  subtitleVPos: 'top',
  subtitleSize: 32,
  subtitleWeight: 400,
  subtitleLetterSpacing: 0,
  subtitleLineHeight: 1.2,
  subtitleGap: 3,
  legal: 'Legal disclaimer text here',
  legalColor: '#ffffff',
  legalOpacity: 70,
  legalAlign: 'left',
  legalSize: 12,
  legalWeight: 400,
  legalLetterSpacing: 0,
  legalLineHeight: 1.3,
  legalTopOffset: 0,
  age: '18+',
  ageGap: 20,
  ageColor: '#ff6b6b',
  showSubtitle: true,
  showLegal: false,
  showAge: false,
  showKV: true,
  logo: null,
  logoSelected: 'osnovnoi',
  logoSize: 15,
  kv: null,
  bgColor: '#0b0d13',
  bgImage: null,
  logoPos: 'top-left',
  kvAnchor: 'center',
  kvSizePercent: 50,
  fontFamily: 'system-ui',
  customFont: null,
  presetSizes: JSON.parse(JSON.stringify(PRESET_SIZES)),
  namePrefix: 'layout'
};

// Preview canvas reference
let previewCanvas = null;

function updateState(key, value) {
  state[key] = value;
  renderPreview();
}

function updatePadding(value) {
  state.paddingPercent = parseInt(value);
  document.getElementById('paddingValue').textContent = value + '%';
  renderPreview();
}

function updateLegalOpacity(value) {
  state.legalOpacity = parseInt(value);
  document.getElementById('legalOpacityValue').textContent = value + '%';
  renderPreview();
}

function selectTitleAlign(align) {
  state.titleAlign = align;
  updateChipGroup('title-align', align);
  renderPreview();
}

function selectTitleVPos(vPos) {
  state.titleVPos = vPos;
  updateChipGroup('title-vpos', vPos);
  renderPreview();
}

function selectSubtitleAlign(align) {
  state.subtitleAlign = align;
  updateChipGroup('subtitle-align', align);
  renderPreview();
}

function selectSubtitleVPos(vPos) {
  state.subtitleVPos = vPos;
  updateChipGroup('subtitle-vpos', vPos);
  renderPreview();
}

function selectLegalAlign(align) {
  state.legalAlign = align;
  updateChipGroup('legal-align', align);
  renderPreview();
}

function updateChipGroup(group, value) {
  document.querySelectorAll(`[data-group="${group}"]`).forEach(chip => {
    chip.classList.toggle('active', chip.dataset.value === value);
  });
}

function selectPreloadedLogo(name) {
  state.logoSelected = name;
  if (!name || name === '') {
    state.logo = null;
    updateLogoUI();
    renderPreview();
    return;
  }
  const img = new Image();
  img.onload = () => {
    state.logo = img;
    updateLogoUI();
    renderPreview();
  };
  img.src = PRELOADED_LOGOS[name];
}

function updateLogoSize(value) {
  state.logoSize = parseInt(value);
  document.getElementById('logoSizeValue').textContent = value + '%';
  renderPreview();
}

function updateKVSizePercent(value) {
  state.kvSizePercent = parseInt(value);
  document.getElementById('kvSizeValue').textContent = value + '%';
  renderPreview();
}

function updateLogoUI() {
  const preview = document.getElementById('logoPreview');
  const actions = document.getElementById('logoActions');
  const thumb = document.getElementById('logoThumb');
  
  if (state.logo) {
    preview.style.display = 'block';
    actions.style.display = 'block';
    thumb.src = state.logo.src;
  } else {
    preview.style.display = 'none';
    actions.style.display = 'none';
  }
}

function updateKVUI() {
  const preview = document.getElementById('kvPreview');
  const actions = document.getElementById('kvActions');
  const thumb = document.getElementById('kvThumb');
  
  if (state.kv) {
    preview.style.display = 'block';
    actions.style.display = 'block';
    thumb.src = state.kv.src;
  } else {
    preview.style.display = 'none';
    actions.style.display = 'none';
  }
}

function updateBgUI() {
  const preview = document.getElementById('bgPreview');
  const actions = document.getElementById('bgActions');
  const thumb = document.getElementById('bgThumb');
  
  if (state.bgImage) {
    preview.style.display = 'block';
    actions.style.display = 'block';
    thumb.style.backgroundImage = `url(${state.bgImage.src})`;
  } else {
    preview.style.display = 'none';
    actions.style.display = 'none';
  }
}

function clearLogo() {
  state.logo = null;
  document.getElementById('logoSelect').value = '';
  updateLogoUI();
  renderPreview();
}

function clearKV() {
  state.kv = null;
  document.getElementById('showKV').checked = false;
  state.showKV = false;
  updateKVUI();
  renderPreview();
}

function clearBg() {
  state.bgImage = null;
  updateBgUI();
  renderPreview();
}

function selectLogoPos(pos) {
  state.logoPos = pos;
  updateChipGroup('logo-pos', pos);
  renderPreview();
}

function loadImageFile(file, target) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      state[target] = img;
      if (target === 'logo') updateLogoUI();
      if (target === 'kv') updateKVUI();
      if (target === 'bgImage') updateBgUI();
      renderPreview();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (file) loadImageFile(file, 'logo');
}

function handleKVUpload(event) {
  const file = event.target.files[0];
  if (file) loadImageFile(file, 'kv');
}

function handleBgUpload(event) {
  const file = event.target.files[0];
  if (file) loadImageFile(file, 'bgImage');
}

function wrapText(ctx, text, maxWidth, fontSize, fontWeight, lineHeight) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  
  ctx.font = `${fontWeight} ${fontSize}px ${state.fontFamily}`;
  
  for (let word of words) {
    const testLine = currentLine + (currentLine ? ' ' : '') + word;
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) lines.push(currentLine);
  return lines;
}

function drawTextWithSpacing(ctx, text, x, y, letterSpacing, align) {
  ctx.textAlign = align;
  
  if (letterSpacing === 0) {
    ctx.fillText(text, x, y);
    return;
  }
  
  let startX = x;
  if (align === 'center') {
    const totalWidth = Array.from(text).reduce((sum, char) => 
      sum + ctx.measureText(char).width + letterSpacing, -letterSpacing);
    startX = x - totalWidth / 2;
  } else if (align === 'right') {
    const totalWidth = Array.from(text).reduce((sum, char) => 
      sum + ctx.measureText(char).width + letterSpacing, -letterSpacing);
    startX = x - totalWidth;
  }
  
  let currentX = startX;
  for (let char of text) {
    ctx.fillText(char, currentX, y);
    currentX += ctx.measureText(char).width + letterSpacing;
  }
}

function getAlignedX(align, canvasWidth, paddingPx) {
  if (align === 'left') return paddingPx;
  if (align === 'center') return canvasWidth / 2;
  if (align === 'right') return canvasWidth - paddingPx;
  return paddingPx;
}

function renderToCanvas(canvas, width, height) {
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  
  const paddingPx = (state.paddingPercent / 100) * Math.min(width, height);
  
  // Background
  if (state.bgImage) {
    ctx.drawImage(state.bgImage, 0, 0, width, height);
  } else {
    ctx.fillStyle = state.bgColor;
    ctx.fillRect(0, 0, width, height);
  }
  
  // Key Visual with anchor system
  if (state.kv && state.showKV) {
    const kvMaxDim = Math.max(width, height);
    const kvTargetSize = (kvMaxDim * state.kvSizePercent) / 100;
    const scale = kvTargetSize / Math.max(state.kv.width, state.kv.height);
    const kvW = state.kv.width * scale;
    const kvH = state.kv.height * scale;
    
    let kvX, kvY;
    
    switch(state.kvAnchor) {
      case 'center':
        kvX = (width - kvW) / 2;
        kvY = (height - kvH) / 2;
        break;
      case 'top-left':
        kvX = paddingPx;
        kvY = paddingPx;
        break;
      case 'top-right':
        kvX = width - kvW - paddingPx;
        kvY = paddingPx;
        break;
      case 'bottom-left':
        kvX = paddingPx;
        kvY = height - kvH - paddingPx;
        break;
      case 'bottom-right':
        kvX = width - kvW - paddingPx;
        kvY = height - kvH - paddingPx;
        break;
      case 'left':
        kvX = paddingPx;
        kvY = (height - kvH) / 2;
        break;
      case 'right':
        kvX = width - kvW - paddingPx;
        kvY = (height - kvH) / 2;
        break;
      case 'top':
        kvX = (width - kvW) / 2;
        kvY = paddingPx;
        break;
      case 'bottom':
        kvX = (width - kvW) / 2;
        kvY = height - kvH - paddingPx;
        break;
    }
    
    ctx.drawImage(state.kv, kvX, kvY, kvW, kvH);
  }
  
  // Calculate legal text height first (for logo collision avoidance)
  let legalBlockHeight = 0;
  if (state.showLegal && state.legal) {
    const legalSize = state.legalSize * (width / 1080);
    ctx.font = `${state.legalWeight} ${legalSize}px ${state.fontFamily}`;
    const legalLines = wrapText(ctx, state.legal, width - paddingPx * 2, legalSize, state.legalWeight, state.legalLineHeight);
    legalBlockHeight = legalLines.length * legalSize * state.legalLineHeight;
    if (state.showAge) {
      legalBlockHeight = Math.max(legalBlockHeight, legalSize * 1.5);
    }
  }
  
  // Logo with size percentage and collision avoidance
  if (state.logo) {
    const logoWidth = (width * state.logoSize) / 100;
    const scale = logoWidth / state.logo.width;
    const logoHeight = state.logo.height * scale;
    
    let logoX, logoY;
    
    switch(state.logoPos) {
      case 'top-left':
        logoX = paddingPx;
        logoY = paddingPx;
        break;
      case 'top-right':
        logoX = width - logoWidth - paddingPx;
        logoY = paddingPx;
        break;
      case 'bottom-left':
        logoX = paddingPx;
        if (state.showLegal || state.showAge) {
          logoY = height - paddingPx - logoHeight - legalBlockHeight - paddingPx * 0.5;
        } else {
          logoY = height - logoHeight - paddingPx;
        }
        break;
      case 'bottom-right':
        logoX = width - logoWidth - paddingPx;
        if (state.showLegal || state.showAge) {
          logoY = height - paddingPx - logoHeight - legalBlockHeight - paddingPx * 0.5;
        } else {
          logoY = height - logoHeight - paddingPx;
        }
        break;
    }
    
    ctx.drawImage(state.logo, logoX, logoY, logoWidth, logoHeight);
  }
  
  // Text rendering with vertical positioning
  const maxTextWidth = width - paddingPx * 2;
  const scale = width / 1080;
  
  // Legal text with top offset
  if (state.showLegal && state.legal) {
    const legalSize = state.legalSize * scale;
    ctx.font = `${state.legalWeight} ${legalSize}px ${state.fontFamily}`;
    const alpha = (state.legalOpacity / 100).toFixed(2);
    const rgb = hexToRgb(state.legalColor);
    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    
    const legalLines = wrapText(ctx, state.legal, maxTextWidth, legalSize, state.legalWeight, state.legalLineHeight);
    const legalHeight = legalLines.length * legalSize * state.legalLineHeight;
    const topOffsetPx = (state.legalTopOffset / 100) * height;
    let legalY = height - paddingPx - topOffsetPx;
    
    for (let i = legalLines.length - 1; i >= 0; i--) {
      const x = getAlignedX(state.legalAlign, width, paddingPx);
      drawTextWithSpacing(ctx, legalLines[i], x, legalY, state.legalLetterSpacing * scale, state.legalAlign);
      legalY -= legalSize * state.legalLineHeight;
    }
    
    // Age rating to the right of legal
    if (state.showAge && state.age) {
      ctx.font = `${state.legalWeight} ${legalSize}px ${state.fontFamily}`;
      ctx.fillStyle = state.ageColor;
      ctx.textAlign = 'left';
      const legalTextWidth = ctx.measureText(legalLines[legalLines.length - 1]).width;
      const ageX = getAlignedX(state.legalAlign, width, paddingPx) + (state.legalAlign === 'left' ? legalTextWidth + state.ageGap : 0);
      ctx.fillText(state.age, ageX, height - paddingPx - topOffsetPx);
    }
  }
  
  // Calculate text block heights for vertical positioning
  const titleSize = state.titleSize * scale;
  const subtitleSize = state.subtitleSize * scale;
  
  ctx.font = `${state.titleWeight} ${titleSize}px ${state.fontFamily}`;
  const titleLines = wrapText(ctx, state.title, maxTextWidth, titleSize, state.titleWeight, state.titleLineHeight);
  const titleBlockHeight = titleLines.length * titleSize * state.titleLineHeight;
  
  let subtitleBlockHeight = 0;
  let subtitleLines = [];
  if (state.showSubtitle && state.subtitle) {
    ctx.font = `${state.subtitleWeight} ${subtitleSize}px ${state.fontFamily}`;
    subtitleLines = wrapText(ctx, state.subtitle, maxTextWidth, subtitleSize, state.subtitleWeight, state.subtitleLineHeight);
    subtitleBlockHeight = subtitleLines.length * subtitleSize * state.subtitleLineHeight + (state.subtitleGap / 100) * height;
  }
  
  const totalTextHeight = titleBlockHeight + subtitleBlockHeight;
  
  // Calculate Y position based on vertical position
  let startY;
  if (state.titleVPos === 'top') {
    startY = paddingPx + titleSize;
  } else if (state.titleVPos === 'center') {
    startY = (height - totalTextHeight) / 2 + titleSize;
  } else { // bottom
    const bottomOffset = state.showLegal ? legalBlockHeight + paddingPx : paddingPx;
    startY = height - bottomOffset - totalTextHeight + titleSize;
  }
  
  // Draw title
  ctx.font = `${state.titleWeight} ${titleSize}px ${state.fontFamily}`;
  ctx.fillStyle = state.titleColor;
  let textY = startY;
  for (let line of titleLines) {
    const x = getAlignedX(state.titleAlign, width, paddingPx);
    drawTextWithSpacing(ctx, line, x, textY, state.titleLetterSpacing * scale, state.titleAlign);
    textY += titleSize * state.titleLineHeight;
  }
  
  // Draw subtitle
  if (state.showSubtitle && state.subtitle) {
    textY += (state.subtitleGap / 100) * height;
    ctx.font = `${state.subtitleWeight} ${subtitleSize}px ${state.fontFamily}`;
    ctx.fillStyle = state.subtitleColor;
    for (let line of subtitleLines) {
      const x = getAlignedX(state.subtitleAlign, width, paddingPx);
      drawTextWithSpacing(ctx, line, x, textY, state.subtitleLetterSpacing * scale, state.subtitleAlign);
      textY += subtitleSize * state.subtitleLineHeight;
    }
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {r: 255, g: 255, b: 255};
}

function renderPreview() {
  if (!previewCanvas) {
    previewCanvas = document.getElementById('previewCanvas');
  }
  
  const checkedSizes = getCheckedSizes();
  if (checkedSizes.length === 0) return;
  
  if (currentPreviewIndex >= checkedSizes.length) {
    currentPreviewIndex = 0;
  }
  
  const size = checkedSizes[currentPreviewIndex];
  renderToCanvas(previewCanvas, size.width, size.height);
}

function updatePreviewSizeSelect() {
  const select = document.getElementById('previewSizeSelect');
  const checkedSizes = getCheckedSizes();
  
  if (checkedSizes.length === 0) {
    select.innerHTML = '<option value="-1">No sizes selected</option>';
    return;
  }
  
  select.innerHTML = checkedSizes.map((size, index) => 
    `<option value="${index}" ${index === currentPreviewIndex ? 'selected' : ''}>${size.width} × ${size.height} (${size.platform})</option>`
  ).join('');
}

function changePreviewSize(index) {
  currentPreviewIndex = parseInt(index);
  renderPreview();
}

function renderSingleExport(targetCanvas, width, height) {
  renderToCanvas(targetCanvas, width, height);
}

function exportAllPNG() {
  const checkedSizes = getCheckedSizes();
  
  if (checkedSizes.length === 0) {
    alert('No sizes selected for export!');
    return;
  }
  
  checkedSizes.forEach((size, index) => {
    setTimeout(() => {
      const exportCanvas = document.createElement('canvas');
      renderSingleExport(exportCanvas, size.width, size.height);
      
      const link = document.createElement('a');
      link.download = `${state.namePrefix}-${index + 1}.png`;
      link.href = exportCanvas.toDataURL('image/png');
      link.click();
    }, index * 100);
  });
}

function exportAllJPG() {
  const checkedSizes = getCheckedSizes();
  
  if (checkedSizes.length === 0) {
    alert('No sizes selected for export!');
    return;
  }
  
  checkedSizes.forEach((size, index) => {
    setTimeout(() => {
      const exportCanvas = document.createElement('canvas');
      renderSingleExport(exportCanvas, size.width, size.height);
      
      const link = document.createElement('a');
      link.download = `${state.namePrefix}-${index + 1}.jpg`;
      link.href = exportCanvas.toDataURL('image/jpeg', 0.95);
      link.click();
    }, index * 100);
  });
}

function renderPresetSizes() {
  const container = document.getElementById('presetSizesList');
  let html = '';
  
  Object.keys(state.presetSizes).forEach(platform => {
    html += `
      <div class="platform-group">
        <div class="platform-header" onclick="togglePlatform('${platform}')">
          <span>${platform}</span>
          <span class="platform-arrow" id="arrow-${platform}">▼</span>
        </div>
        <div class="platform-sizes" id="sizes-${platform}">
    `;
    
    state.presetSizes[platform].forEach((size, index) => {
      const id = `size-${platform}-${index}`;
      html += `
        <div class="size-checkbox-item">
          <input type="checkbox" id="${id}" ${size.checked ? 'checked' : ''} onchange="toggleSize('${platform}', ${index})">
          <label for="${id}">${size.width} × ${size.height}</label>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  updateSizesSummary();
}

function togglePlatform(platform) {
  const sizesEl = document.getElementById(`sizes-${platform}`);
  const arrowEl = document.getElementById(`arrow-${platform}`);
  sizesEl.classList.toggle('collapsed');
  arrowEl.classList.toggle('collapsed');
}

function toggleSize(platform, index) {
  state.presetSizes[platform][index].checked = !state.presetSizes[platform][index].checked;
  updateSizesSummary();
  updatePreviewSizeSelect();
  renderPreview();
}

function selectAllSizes() {
  Object.keys(state.presetSizes).forEach(platform => {
    state.presetSizes[platform].forEach(size => {
      size.checked = true;
    });
  });
  renderPresetSizes();
  updatePreviewSizeSelect();
  renderPreview();
}

function deselectAllSizes() {
  Object.keys(state.presetSizes).forEach(platform => {
    state.presetSizes[platform].forEach(size => {
      size.checked = false;
    });
  });
  renderPresetSizes();
  updatePreviewSizeSelect();
  renderPreview();
}

function updateSizesSummary() {
  let count = 0;
  Object.keys(state.presetSizes).forEach(platform => {
    count += state.presetSizes[platform].filter(s => s.checked).length;
  });
  document.getElementById('sizesSummary').textContent = `Selected: ${count} sizes`;
}

function getCheckedSizes() {
  const sizes = [];
  Object.keys(state.presetSizes).forEach(platform => {
    state.presetSizes[platform].forEach(size => {
      if (size.checked) {
        sizes.push({ width: size.width, height: size.height, platform });
      }
    });
  });
  return sizes;
}

let savedSettings = null;

function saveSettings() {
  savedSettings = JSON.parse(JSON.stringify(state));
  delete savedSettings.logo;
  delete savedSettings.kv;
  delete savedSettings.bgImage;
  delete savedSettings.customFont;
  alert('Settings saved (images & preset selections included)');
}

function loadSettings() {
  if (!savedSettings) {
    alert('No saved settings found.');
    return;
  }
  
  const currentLogo = state.logo;
  const currentKV = state.kv;
  const currentBg = state.bgImage;
  
  Object.assign(state, savedSettings);
  
  state.logo = currentLogo;
  state.kv = currentKV;
  state.bgImage = currentBg;
  
  if (state.logoSelected) {
    selectPreloadedLogo(state.logoSelected);
  }
  
  syncFormFields();
  renderPresetSizes();
  updatePreviewSizeSelect();
  renderPreview();
  
  alert('Settings loaded!');
}

function syncFormFields() {
  document.getElementById('paddingPercent').value = state.paddingPercent;
  document.getElementById('paddingValue').textContent = state.paddingPercent + '%';
  document.getElementById('title').value = state.title;
  document.getElementById('titleColor').value = state.titleColor;
  document.getElementById('titleSize').value = state.titleSize;
  document.getElementById('titleWeight').value = state.titleWeight;
  document.getElementById('titleLetterSpacing').value = state.titleLetterSpacing;
  document.getElementById('titleLineHeight').value = state.titleLineHeight;
  document.getElementById('subtitle').value = state.subtitle;
  document.getElementById('subtitleColor').value = state.subtitleColor;
  document.getElementById('subtitleSize').value = state.subtitleSize;
  document.getElementById('subtitleWeight').value = state.subtitleWeight;
  document.getElementById('subtitleLetterSpacing').value = state.subtitleLetterSpacing;
  document.getElementById('subtitleLineHeight').value = state.subtitleLineHeight;
  document.getElementById('subtitleGap').value = state.subtitleGap;
  document.getElementById('legal').value = state.legal;
  document.getElementById('legalColor').value = state.legalColor;
  document.getElementById('legalOpacity').value = state.legalOpacity;
  document.getElementById('legalOpacityValue').textContent = state.legalOpacity + '%';
  document.getElementById('legalSize').value = state.legalSize;
  document.getElementById('legalWeight').value = state.legalWeight;
  document.getElementById('legalLetterSpacing').value = state.legalLetterSpacing;
  document.getElementById('legalLineHeight').value = state.legalLineHeight;
  document.getElementById('legalTopOffset').value = state.legalTopOffset;
  document.getElementById('age').value = state.age;
  document.getElementById('ageColor').value = state.ageColor;
  document.getElementById('ageGap').value = state.ageGap;
  document.getElementById('showSubtitle').checked = state.showSubtitle;
  document.getElementById('showLegal').checked = state.showLegal;
  document.getElementById('showAge').checked = state.showAge;
  document.getElementById('showKV').checked = state.showKV;
  document.getElementById('logoSelect').value = state.logoSelected;
  document.getElementById('logoSize').value = state.logoSize;
  document.getElementById('logoSizeValue').textContent = state.logoSize + '%';
  document.getElementById('bgColor').value = state.bgColor;
  document.getElementById('kvAnchor').value = state.kvAnchor;
  document.getElementById('kvSizePercent').value = state.kvSizePercent;
  document.getElementById('kvSizeValue').textContent = state.kvSizePercent + '%';
  document.getElementById('namePrefix').value = state.namePrefix;
  
  updateChipGroup('title-align', state.titleAlign);
  updateChipGroup('title-vpos', state.titleVPos);
  updateChipGroup('subtitle-align', state.subtitleAlign);
  updateChipGroup('subtitle-vpos', state.subtitleVPos);
  updateChipGroup('legal-align', state.legalAlign);
  updateChipGroup('logo-pos', state.logoPos);
}

function resetAll() {
  if (!confirm('Reset all settings to defaults?')) return;
  
  state = {
    paddingPercent: 5,
    title: 'Your Headline',
    titleColor: '#ffffff',
    titleAlign: 'left',
    titleVPos: 'top',
    titleSize: 64,
    titleWeight: 700,
    titleLetterSpacing: 0,
    titleLineHeight: 1.1,
    subtitle: 'Subtitle description',
    subtitleColor: '#e0e0e0',
    subtitleAlign: 'left',
    subtitleVPos: 'top',
    subtitleSize: 32,
    subtitleWeight: 400,
    subtitleLetterSpacing: 0,
    subtitleLineHeight: 1.2,
    subtitleGap: 3,
    legal: 'Legal disclaimer text',
    legalColor: '#ffffff',
    legalOpacity: 70,
    legalAlign: 'left',
    legalSize: 12,
    legalWeight: 400,
    legalLetterSpacing: 0,
    legalLineHeight: 1.3,
    legalTopOffset: 0,
    age: '18+',
    ageColor: '#ff6b6b',
    ageGap: 20,
    showSubtitle: true,
    showLegal: false,
    showAge: false,
    showKV: true,
    logo: null,
    logoSelected: 'osnovnoi',
    logoSize: 15,
    kv: null,
    bgColor: '#0b0d13',
    bgImage: null,
    logoPos: 'top-left',
    kvAnchor: 'center',
    kvSizePercent: 50,
    fontFamily: 'system-ui',
    customFont: null,
    presetSizes: JSON.parse(JSON.stringify(PRESET_SIZES)),
    namePrefix: 'layout'
  };
  
  selectPreloadedLogo('osnovnoi');
  syncFormFields();
  updateLogoUI();
  updateKVUI();
  updateBgUI();
  renderPresetSizes();
  updatePreviewSizeSelect();
  renderPreview();
}

// Initialize
selectPreloadedLogo('osnovnoi');
renderPresetSizes();
updatePreviewSizeSelect();
renderPreview();