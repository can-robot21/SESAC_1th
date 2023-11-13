const fs = require('fs');

const createCsvWriter = require('csv-Writer').createObjectCsvWriter;

const csvWriter = creatCsvWriter({
    path: 'sample1.csv',
    header: [
        {id: 'column1', title: 'column1'},
        {id: 'column2', title: 'column2'},
        // 추가 필요한 헤더
    ],
})

const data = [
    {column1: '김1', column2: '김2'},
    {column1: '김3', column2: '김4'}
    // 원하는 데이타 추가
];

csvWriter.writeRecords(data)
    .then(()=> {
        console.log('...Done');
    });