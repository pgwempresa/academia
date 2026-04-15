const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const produtosPath = path.join(rootDir, 'produtos.js');
const templatePath = path.join(rootDir, 'produto.html');
const productsDir = path.join(rootDir, 'products');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(produtosPath, 'utf8') + '\nthis.__PRODUTOS__ = produtos;', sandbox);

const produtos = sandbox.__PRODUTOS__ || [];
const template = fs.readFileSync(templatePath, 'utf8');

function pageHtml(productId) {
    const withBase = template.replace('<head>', '<head>\n    <base href="../../">');
    const forceScript = `    <script>window.__FORCE_PRODUCT_ID = ${productId};</script>\n`;
    return withBase.replace('</head>', `${forceScript}</head>`);
}

fs.mkdirSync(productsDir, { recursive: true });

for (const produto of produtos) {
    const productDir = path.join(productsDir, produto.slug);
    fs.mkdirSync(productDir, { recursive: true });
    fs.writeFileSync(path.join(productDir, 'index.html'), pageHtml(produto.id));
}

// Mantem compatibilidade com a rota antiga do Ava
const avaLegacyDir = path.join(productsDir, 'conjunto-ava');
fs.mkdirSync(avaLegacyDir, { recursive: true });
fs.writeFileSync(path.join(avaLegacyDir, 'index.html'), pageHtml(28));
