const { readCsv, witeCsv } = require('./my-csv-library.js');


const sampledata = [
    ['이름', '생년월일','성별'],
    ['이병헌', '197005060','남'],
    ['송혜교', '19800208','여'],
    ['고윤정', '19951008','여'],
    ['강동원', '19850307','남'],
]

const filePath = 'user.csv';

writeCsc(filePath, sampledata, (err) => {
    if (err) {
        console.log('CSV 파일 쓰기 실패');
        return;
    }
    console.log('CSV 파일 쓰기 완료');
})

readCsvSync(filePath, (err, data) => {
    if (err) {
        console.log('CSV 파일을 읽기 실패');
        return;
    }
    console.log('CSV 파일 읽기 내용:', data);
})

