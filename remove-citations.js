// 移除引用标注的临时脚本
const fs = require('fs');
const filePath = 'data/2014-2016-content.js';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/\(\d+\)/g, '');
fs.writeFileSync(filePath, content, 'utf8');
console.log('引用标注已移除');