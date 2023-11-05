// GPT 출력 코드
const fs = require('fs');
const path = require('path');

function printDirectoryTree(dirPath, prefix = '') {
  const items = fs.readdirSync(dirPath);

  items.forEach((item, index) => {
    const itemPath = path.join(dirPath, item);
    const isLastItem = index === items.length - 1;
    const prefixForItem = isLastItem ? '└── ' : '├── ';

    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      console.log(`${prefix}${prefixForItem}${item}/`);
      const newPrefix = isLastItem ? '    ' : '│   ';
      printDirectoryTree(itemPath, `${prefix}${newPrefix}`);
    } else {
      console.log(`${prefix}${prefixForItem}${item}`);
    }
  });
}

function printFullDirectoryTree(dirPath) {
  const currentDirectory = path.resolve(dirPath);
  console.log(currentDirectory);
  printDirectoryTree(currentDirectory);

  const parentDirectory = path.dirname(currentDirectory);
  if (currentDirectory !== parentDirectory) {
    printFullDirectoryTree(parentDirectory);
  }
}

// 현재 폴더의 디렉토리 트리와 파일 리스트 출력
printFullDirectoryTree(process.cwd());


// =========================================== 현재폴더

// const fs = require('fs');
// const path = require('path');

// function printDirectoryTree(dirPath, prefix = '') {
//   const items = fs.readdirSync(dirPath);

//   items.forEach((item, index) => {
//     const itemPath = path.join(dirPath, item);
//     const isLastItem = index === items.length - 1;
//     const prefixForItem = isLastItem ? '└── ' : '├── ';

//     console.log(`${prefix}${prefixForItem}${item}`);

//     if (fs.statSync(itemPath).isDirectory()) {
//       const newPrefix = isLastItem ? '    ' : '│   ';
//       printDirectoryTree(itemPath, `${prefix}${newPrefix}`);
//     }
//   });
// }

// // 현재 폴더의 디렉토리 트리 출력
// const currentDirectory = process.cwd();
// console.log(currentDirectory);
// printDirectoryTree(currentDirectory);


