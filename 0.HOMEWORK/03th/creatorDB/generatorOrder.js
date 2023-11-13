// order data 10,000개 생성
// id, OderAt, StoredId, UserID

const fs = require('fs');
const generateNo = require('./generateNo');
const generateDay = require('./generateDay');
const readCsv = require('./readCsv');


// 날짜 생성기로 orderAt 생성 후 입력

// store 리스트에서 StoreId 랜덤으로 뽑아서 입력
// User 리스트에서 userID 랜덤으로 뽑아서 입력
// readFileSync 활동한 테이타 동기 처리
const storeFile = './csv/store.csv';
const userFile = './csv/user.csv'
const storeNth = 0; 
const userNth = 0;
let orderIndex = [];

// function makeCsv(someData, nNum) {
//     let csvOrder = '';
//     let oneOrder = [];
//     let sumId = [];
    
//     for ( let i=0; i < nNum; i++ ) {
//         let orderId = generateNo.arrayIndex([8, 4, 4, 12]);
//         let orderAt = generateDay.oneDay();    
//         oneOrder =  [orderId, orderAt[0],randomStore, randomUser].join(',');
//         csvOrder += oneOrder+('\n');
//         sumId[i] = orderId;
//     }
//     const sumCsv = [csvOrder, sumId];
//     return sumCsv;
// }

// makeCsv 모듈 호출하던 방식을 데이터 호출을 위한 동기처리에 맞줘
// try ~ catch 에 직접 데이터 결합 후 저장까지 처리

try {
    const storeData = readCsv.readCsvSync(storeFile,'utf8');
    
    const userData = readCsv.readCsvSync(userFile, 'utf8');
    
    let csvOrder = '';
    let oneOrder = [];
    let sumId = [];

    // argumnets 사용으로 입력된 숫자를 기본으로 데이터 생성
    
    let indexOreder;
    const argNum = parseInt(process.argv[2]);
    
    if (!isNaN(argNum)) {
        for ( let i=0; i < argNum; i++ ) {
            let randomStore = readCsv.pickData(storeData, storeNth);
            let randomUser = readCsv.pickData(userData, userNth);

            let orderId = generateNo.arrayIndex([8, 4, 4, 12]);
            let orderAt = generateDay.oneDay(2);    
            oneOrder =  [orderId, orderAt[0],randomStore, randomUser].join(',');
            csvOrder += oneOrder+('\n');
            sumId[i] = orderId;
        }
        orderIndex = [csvOrder, sumId];
        // console.log(orderIndex[0]);
    } else {
        console.log('Please insert Number');
        process.exit(1)
    }
    
    if (orderIndex && orderIndex[0] ) {
        fs.writeFileSync('./csv/order.csv', orderIndex[0], 'utf8');
        // console.log('데이터가 파일로 정상적으로 저장되었습니다.');
    } else {
        // console.log('데이터 생성에 과정에 에러가 발생했습니다.');
        console.exit(1);
    }
    
} catch (error) {
    console.log('데이타 처리과정에 에러가 발생했습니다.', error);
}
