const fs = require('fs');
const path = require('path');

// 폴더, 파일 리스트 읽어 배열만들기

let now = '../';
let currenfolder = fs.readdir(now, function(err, filelist) {
    console.log(filelist);
})