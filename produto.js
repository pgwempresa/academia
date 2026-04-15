/* ═══════════════════════════════════════════
   PRODUTO.JS — Lógica Vallena-style
   ═══════════════════════════════════════════ */

const urlParams = new URLSearchParams(window.location.search);
const prodId = window.__FORCE_PRODUCT_ID || parseInt(urlParams.get('id')) || 1;
const produto = (typeof produtos !== 'undefined')
    ? (produtos.find(p => p.id === prodId) || produtos[0])
    : { id:1, nome:'Conjunto', imagem:'', preco:'39,90', precoOriginal:'199,90', descricao:'', variantes:[] };

const PRICE = parseFloat((produto.preco || '39,90').replace(',', '.'));
const ORIG = parseFloat((produto.precoOriginal || '199,90').replace(',', '.'));
const KIT_PRICE = Math.round(PRICE * 2.0 * 100) / 100;
const KIT_PER_ITEM = Math.round((KIT_PRICE / 3) * 100) / 100;

let allImages = [];
let choiceMode = 3; // default to 3 conjuntos (popular)
const kitState = [
    { colorIdx: 0, size: 'P veste 36/38' },
    { colorIdx: 0, size: 'P veste 36/38' },
    { colorIdx: 0, size: 'P veste 36/38' }
];

const SIZES = ['P veste 36/38', 'M veste 40', 'G veste 42', 'GG veste 44'];

function getProductUrl(produtoItem) {
    const slug = produtoItem && produtoItem.slug ? produtoItem.slug : '';
    if (!slug) return `produto.html?id=${produtoItem.id}`;
    return window.location.protocol === 'file:'
        ? `products/${slug}/index.html`
        : `products/${slug}/`;
}

// ── Build image list ──
function buildImages() {
    const extras = (produto.variantes || []).map(v => ({ img: v.img, label: v.cor }));
    allImages = [{ img: produto.imagem, label: extrairCor(produto.nome) }].concat(extras);
    const seen = new Set();
    allImages = allImages.filter(x => { if (seen.has(x.img)) return false; seen.add(x.img); return true; });
}

function extrairCor(nome) {
    const cores = ['Branco','Preto','Rosa','Azul','Verde','Roxo','Marrom','Vinho','Laranja','Vermelho','Amarelo','Marinho','Cinza','Nude','Bege'];
    for (const c of cores) {
        if (nome.includes(c)) return c;
    }
    return nome.split(' ').pop();
}

// ── Gallery ──
function renderGallery() {
    const slider = document.getElementById('gallerySlider');
    const thumbs = document.getElementById('galleryThumbs');
    slider.innerHTML = '';
    thumbs.innerHTML = '';

    allImages.forEach((item, i) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        slide.innerHTML = `<img src="${item.img}" alt="${item.label}" loading="${i===0?'eager':'lazy'}">`;
        slider.appendChild(slide);

        const th = document.createElement('div');
        th.className = 'thumb' + (i===0?' active':'');
        th.innerHTML = `<img src="${item.img}" alt="${item.label}" loading="lazy">`;
        th.onclick = () => {
            slider.scrollTo({ left: slider.clientWidth * i, behavior: 'smooth' });
            document.querySelectorAll('.thumb').forEach((t,j) => t.classList.toggle('active', j===i));
        };
        thumbs.appendChild(th);
    });

    slider.addEventListener('scroll', function() {
        const idx = Math.round(slider.scrollLeft / (slider.clientWidth || 1));
        document.querySelectorAll('.thumb').forEach((t,j) => t.classList.toggle('active', j===idx));
    }, { passive: true });
}

// ── Info ──
function renderInfo() {
    document.getElementById('pageTitle').textContent = produto.nome + ' — Elena Store';
    document.getElementById('prodTitle').textContent = produto.nome;
    const disc = Math.round((1 - PRICE / ORIG) * 100);
    document.getElementById('priceOld').textContent = 'R$ ' + produto.precoOriginal;
    document.getElementById('discBadge').textContent = '↓' + disc + '%';
    document.getElementById('priceCurrent').textContent = 'R$ ' + produto.preco;
    document.getElementById('priceInstallment').textContent = 'ou até 12x de R$ ' + (PRICE/12).toFixed(2).replace('.',',');
    document.getElementById('prodDesc').textContent = produto.descricao || '';
    document.getElementById('viewerCount').textContent = Math.floor(Math.random()*30)+12;
    document.getElementById('stickyName').textContent = produto.nome;
    document.getElementById('stickyPrice').textContent = 'R$ ' + produto.preco;
    document.getElementById('stickyImg').src = produto.imagem;
}

// ── Choice cards ──
function renderChoiceCards() {
    // Single price
    document.getElementById('price1').textContent = 'R$ ' + produto.preco;

    // Kit price
    const kitTotal = KIT_PRICE.toFixed(2).replace('.',',');
    const kitOrig = (PRICE * 3).toFixed(2).replace('.',',');
    const perItem = KIT_PER_ITEM.toFixed(2).replace('.',',');
    document.getElementById('price3kit').textContent = 'R$ ' + kitTotal;
    document.getElementById('price3old').textContent = 'R$ ' + kitOrig;
    document.getElementById('kitPerItem').textContent = 'Apenas R$ ' + perItem + ' por item';

    // Build color options from variantes
    const colorOptions = (produto.variantes || []).filter(v => {
        // Only include actual color variants (not "Frente", "Verso", "Detalhe")
        const nonColors = ['frente','verso','detalhe','costas','lateral'];
        return !nonColors.includes(v.cor.toLowerCase());
    });

    // If no color variantes, create a single option from the main product
    const colors = colorOptions.length > 0 ? colorOptions : [{ cor: extrairCor(produto.nome), img: produto.imagem }];

    // Populate kit dropdowns
    [0, 1, 2].forEach(idx => {
        const colorSel = document.getElementById('kitColor' + idx);
        const sizeSel = document.getElementById('kitSize' + idx);
        const rowImg = document.getElementById('kitRowImg' + idx);

        colorSel.innerHTML = '';
        colors.forEach((c, ci) => {
            const opt = document.createElement('option');
            opt.value = ci;
            opt.textContent = c.cor;
            opt.dataset.img = c.img;
            if (ci === 0) opt.selected = true;
            colorSel.appendChild(opt);
        });

        sizeSel.innerHTML = '';
        SIZES.forEach((s, si) => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s;
            if (si === 0) opt.selected = true;
            sizeSel.appendChild(opt);
        });

        rowImg.src = colors[0].img;
        kitState[idx].colorIdx = 0;
        kitState[idx].size = SIZES[0];
    });

    // Store colors for buy function
    window._kitColors = colors;

    // Set initial active state
    selectChoice(3);
}

window.selectChoice = function(mode) {
    choiceMode = mode;
    const c1 = document.getElementById('choice1');
    const c3 = document.getElementById('choice3');
    const kitRows = document.getElementById('kitRows');

    if (mode === 1) {
        c1.classList.add('active');
        c3.classList.remove('active');
        c1.querySelector('.choice-radio').checked = true;
        kitRows.style.display = 'none';
    } else {
        c1.classList.remove('active');
        c3.classList.add('active');
        c3.querySelector('.choice-radio').checked = true;
        kitRows.style.display = 'block';
    }
};

window.kitColorChange = function(idx) {
    const sel = document.getElementById('kitColor' + idx);
    const opt = sel.options[sel.selectedIndex];
    const img = document.getElementById('kitRowImg' + idx);
    img.src = opt.dataset.img;
    kitState[idx].colorIdx = parseInt(sel.value);
};

window.kitSizeChange = function(idx) {
    const sel = document.getElementById('kitSize' + idx);
    kitState[idx].size = sel.value;
};

// ── Buy ──
window.comprarAgora = function() {
    const colors = window._kitColors || [{ cor: extrairCor(produto.nome), img: produto.imagem }];

    if (choiceMode === 1) {
        const params = new URLSearchParams({
            id: produto.id,
            size: 'P',
            color: colors[0].cor,
            img: produto.imagem,
            qty: 1,
            kit: 0
        });
        window.location.href = 'checkout.html?' + params.toString();
    } else {
        const kitData = kitState.map((k) => {
            const c = colors[k.colorIdx] || colors[0];
            return {
                img: c.img,
                color: c.cor,
                size: k.size.split(' ')[0],
                id: produto.id
            };
        });

        const params = new URLSearchParams({
            id: produto.id,
            qty: 3,
            kit: 1,
            kitData: JSON.stringify(kitData),
            img: kitData[0].img,
            color: kitData.map(k => k.color).join(' | '),
            size: kitData.map(k => k.size).join(' | ')
        });
        window.location.href = 'checkout.html?' + params.toString();
    }
};

// ── Related products ──
function renderRelated() {
    const grid = document.getElementById('relatedGrid');
    if (!grid || typeof produtos === 'undefined') return;
    const others = produtos.filter(p => p.id !== prodId).slice(0, 8);
    grid.innerHTML = others.map(p => {
        const pr = parseFloat(p.preco.replace(',', '.'));
        const orig = parseFloat(p.precoOriginal.replace(',', '.'));
        const disc = Math.round((1 - pr / orig) * 100);
        return `<a href="${getProductUrl(p)}" class="related-card">
            <div class="related-card-wrap">
                <img class="related-card-img" src="${p.imagem}" alt="${p.nome}" loading="lazy">
                <span class="related-card-badge">${disc}%</span>
            </div>
            <div class="related-card-name">${p.nome}</div>
            <div><span class="related-card-price">R$ ${p.preco}</span><span class="related-card-old">R$ ${p.precoOriginal}</span></div>
            <div class="related-card-install">até 12x de R$ ${(pr/12).toFixed(2).replace('.',',')}</div>
            <div class="related-card-frete">Frete Grátis</div>
        </a>`;
    }).join('');
}

// ── Sticky bar ──
function checkSticky() {
    const bar = document.getElementById('stickyBar');
    const btn = document.getElementById('buyBtn');
    if (!bar || !btn) return;
    const rect = btn.getBoundingClientRect();
    bar.classList.toggle('show', rect.bottom < 0 || rect.top > window.innerHeight);
}
window.addEventListener('scroll', checkSticky, { passive: true });

// ── Sidebar ──
window.openSidebar = function() {
    document.getElementById('sidebarMenu').classList.add('active');
    document.getElementById('sidebarOverlay').classList.add('active');
};
window.closeSidebar = function() {
    document.getElementById('sidebarMenu').classList.remove('active');
    document.getElementById('sidebarOverlay').classList.remove('active');
};

// ── INIT ──
buildImages();
renderGallery();
renderInfo();
renderChoiceCards();
renderRelated();
setTimeout(checkSticky, 300);
