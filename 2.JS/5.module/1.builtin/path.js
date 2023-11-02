const path = require('path');

const filePath = path.join('./Users/username/document', 'file.txt');
console.log('파일 경로:', filePath);

const extName = path.extname(filePath);
console.log('파일 확장자:', extName);