// order data 10,000개 생성
// id, OderAt, StoredId, UserID

const fs = require('fs');
const generateNo = require('./generateNo');
const generateDay = require('./generateDay');
const readCsv = require('./readCsv');

// let randomStore = [];
// let randomUser = [];

// order index 생성


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
    let randomStore = readCsv.pickData(storeData, storeNth);
    
    const userData = readCsv.readCsvSync(userFile, 'utf8');
    let randomUser = readCsv.pickData(userData, userNth);
    
    let csvOrder = '';
    let oneOrder = [];
    let sumId = [];
    let nNum = 10;
    
    for ( let i=0; i < nNum; i++ ) {
        let orderId = generateNo.arrayIndex([8, 4, 4, 12]);
        let orderAt = generateDay.oneDay();    
        oneOrder =  [orderId, orderAt[0],randomStore, randomUser].join(',');
        csvOrder += oneOrder+('\n');
        sumId[i] = orderId;
    }
    const orderIndex = [csvOrder, sumId];
    
    fs.writeFileSync('./csv/order.csv', orderIndex[0], 'utf8');
    console.log('데이터가 파일로 정상적으로 저장되었습니다.');
    
} catch (error) {
    console.log('데이타 처리과정에 에러가 발생했습니다.', error);
}



// store 리스트에서 StoreId 랜덤으로 뽑아서 입력

// <---- readFile 의 콜백 함수 처리과정의 비동기 방식
// const storeFile = 'store.csv';
// const storeNth = 0;

// randomStore = readCsv.readCsv(storeFile, (err, data) =>{
//     if(err) {
//         console.log('Store 파일 읽기 중 에러가 발생했습니다.')
//         return;
//     }
//     console.log('파일 ${store.csv}를 정상적으로 전환했습니다.');
//     console.log(data);

//     // pickData 로 n 번째 행의 데이터 랜덤 선택
//     const nthData = readCsv.pickData(data, storeNth)
//     console.log(nthData);
//     return nthData;
// });
// ---->

// // User 리스트에서 userID 랜덤으로 뽑아서 입력

// ---> readFile 사용한 콜백처리를 통한 파일->데이터 전환

// const userFile = 'user.csv';
// const userNth = 0; 

// randomUser = readCsv.readCsv(userFile, (err, data) => {
//     if (err) {
//         console.log('User 파일 읽기 중 에러가 발생했습니다.');
//         return;
//     }
//     console.log(`파일 ${userFile}을 정상적으로 데이터 전환했습니다.`);
//     console.log(data);

//     // pickData 로 n번째 행의 랜덤으로 출력
//     const nthData = readCsv.pickData(data, userNth);
//     return nthData;
// })
// --->
