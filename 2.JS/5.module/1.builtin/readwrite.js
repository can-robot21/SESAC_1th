const fs = require('fs');

// 파일읽기
// fs.readFile('example.txt', 'utf8', (err,data) => {
//     if (err) {
//         console.error("파일을 읽는데 오류가 발생햇습니다.", err);
//         return;
//     }
//     console.log("파일 내용:", data);
// })


// 파일 쓰기
const content = "파일에 쓰고 싶은 내용";

// fs.writeFile('example.txt','utf8', (err, data) => {
//     if (err) {
//             console.error('파일을 쓰는데 오류가 발생했습니다.', err);
//     return;
//     }
//     console.log('파일에 결과가 성공적으로 기록되었습니다.');

// } )

fs.readdir('./1.builtin', (err, fileList) => {

            console.log(fileList);

})
