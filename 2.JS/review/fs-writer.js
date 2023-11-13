const fs = require('fs');

const filePath = 'sample.csv';

const dataTowrite = [
    ['Column1', 'Column2'],
    ['Value1', 'Value2'],
    ['Value3', 'Value4']
    // 추가 데이터 처리....

];

const csvContent = dataTowrite.map((row) => row.join(',')).join('\n');
console.log(csvContent);

fs.writeFileSync(filePath, csvContent, 'utf-8', (err) => {
    if (err) {
        console.log('파이를 쓰는 과정에 에러가 발생했습니다.');
        return;
    } else {
        console.log('데이터가 정상적으로 전환되었습니다.');
    }
})