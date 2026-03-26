const fs = require('fs');
let content = fs.readFileSync('produtos.js', 'utf8');

content = content.replace(/(precoOriginal:\s*"[^"]+",?)(?!.*preco:)/g, function(match) {
    const min = 79.90;
    const max = 129.90;
    const randomPrice = (Math.random() * (max - min) + min).toFixed(2).replace('.', ',');
    return match + ' preco: \'' + randomPrice + '\',';
});

fs.writeFileSync('produtos.js', content);
console.log('Fixed prices successfully V2');
