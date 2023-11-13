const fs = require('fs');

const filePath = 'sample.csv';

fs.readFileSync(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log('데이터를 읽는데 에러가 발생했습니다.')
        return;
    } 

    const rows= data.split('\n');

    // cosole.log(data);
    // for (let i=0; i < data.length; i++) {
    //     const row = row[i];
    //     const column = row.split(',');
    //     console.log(` 행 $[i+1] : `, column);
    // }
    
    const forEach ((row, i) => {
        const column = row.split(',');
        console.log(` 행 $[i+1] : `, column);
    });
    
    // 3. map 방식
    
    // rows.map()
    
});