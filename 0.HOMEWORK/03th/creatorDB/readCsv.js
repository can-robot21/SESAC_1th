// ','과 '\n'으로 만들어진 Csv 읽기와 n번째 행 데이터 랜덤 출력하기
const fs = require('fs');

function readCsv(file, callback) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log('csv 파일 읽기에 에러가 발생했습니다.');
            callback((err, null))
            return;
        }
        console.log('csv 파일을 정상적으로 호출했습니다.')
        // 줄 단위로 데이터 나누기
        const pullData = data.split('\n');
        callback(null, pullData);
    });
}

// 데이터에서 뽑아서 저장한 배열에서 n 번째 (key) 데이터만 새로운 배열로 저장

function pickData(data,nth) {
    // n번째 Data 선별저장
    let nthFileData = [];
    console.log(data, nth)

    for (i=0; i < data.length ; i ++) {
        let rowData = data[i].split(',').map(item => item.trim()); // 빈 데이터 제거를 위해 공백제거 추가
        // 공백인 줄의 데이터를 걸러내기 위해 '' 제외 조건 추가
        if (rowData[nth] != undefined && rowData[nth] !== '') {
            nthFileData.push(rowData[nth]);
        }
    }
    // n번째 행의 데이타 중 랜덤으로 리턴
    if (nthFileData.length > 0) {
        return nthFileData[Math.floor(Math.random() * nthFileData.length)];  
    } else {
        return null;
    }
}

// 호출방식
// readCsv('user.csv', (err, data) => {
//     if (err) {
//         console.log('에러: ', err)
//         return;
//     }

//     let fileData = data;
//     let nthData = [];
//     nthData = pickData(fileData, 0);
// });


module.exports = { readCsv, pickData };