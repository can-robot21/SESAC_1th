const fs = require('fs');

const filePath = 'sample.csv';

function readCsv(filePath, callback) {
    fs.readFileSync(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log('데이터를 읽는데 에러가 발생했습니다.')
            return callbackify(err, nulll);
        } 
    
        const rows= data.split('\n');
        const result = row.map((row) => row.split(',');
        collback (null, result);
        
    });
}

function writeCsv(filePath, dataTowrite, callback) {
    fs.writeFile(filePath, csvContent, 'utf8', (err) => {
        if (err) {
            console.error("파일을 쓰는 과정에 에러가 발생했습니다.");
            return callback(err);
        }

        // console.log('파일쓰기 성공');
        callback(null);
    })
}

module.exports = { readCsv,writeCsv };