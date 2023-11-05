const path = require('path');

const filePath = path.join('./Users/username/document', 'example.txt');
console.log('파일 경로:', filePath);

const extName = path.extname(filePath);
console.log('파일 확장자:', extName);

const dirName = path.dirname(filePath);
console.log('파일이 속한 디텍토리:', dirName);

const baseName = path.basename(filePath);
console.log('파일명:', baseName);