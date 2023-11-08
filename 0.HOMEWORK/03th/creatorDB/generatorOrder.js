// order data 10,000개 생성
// id, OderAt, StoredId, UserID

const fs = require('fs');
const generateNo = require('./generateNo');
const generateDay = require('./generateDay');
const readCsv = require('./readCsv');

let randomStore = [];
let randomUser = [];

// order index 생성
let orderId = generateNo.arrayIndex([8, 4, 4, 12]);


// 날짜 생성기로 orderAt 생성 후 입력
let orderAt = generateDay.oneDay();

// store 리스트에서 StoreId 랜덤으로 뽑아서 입력
const storeFile = 'store.csv';
const storeNth = 0;

randomUser = readCsv.readCsv(storeFile, (err, data) =>{
    if(err) {
        console.log('Store 파일 읽기 중 에러가 발생했습니다.')
        return;
    }
    console.log('파일 ${store.csv}를 정상적으로 전환했습니다.');
    console.log(data);

    // pickData 로 n 번째 행의 데이터 랜덤 선택
    const nthData = readCsv.pickData(data, storeNth)
    console.log(nthData);
    return nthData;
});

// // User 리스트에서 userID 랜덤으로 뽑아서 입력
const userFile = 'user.csv';
const userNth = 0; 

randomUser = readCsv.readCsv(userFile, (err, data) => {
    if (err) {
        console.log('User 파일 읽기 중 에러가 발생했습니다.');
        return;
    }
    console.log(`파일 ${userFile}을 정상적으로 데이터 전환했습니다.`);
    console.log(data);

    // pickData 로 n번째 행의 랜덤으로 출력
    const nthData = readCsv.pickData(data, userNth);
    console.log(nthData);
    return nthData;
})

console.log('주문ID:', orderId);
console.log('주문일:', orderAt);
console.log('StoreID:', randomStore);
console.log('userID:', randomUser);