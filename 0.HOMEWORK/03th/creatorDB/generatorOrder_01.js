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
// readFileSync 를 통한 동기식 처리방식
const storeFile = 'store.csv';
const userFile = 'user.csv'
const storeNth = 0; 
const userNth = 0;

try {
    const storeData = readCsv.readCsvSync(storeFile,'utf8');
    randomStore = readCsv.pickData(storeData, storeNth);
    
    const userData = readCsv.readCsvSync(userFile, 'utf8');
    randomUser = readCsv.pickData(userData, userNth);

    console.log('Store : ', storeData);
    console.log('User :', userData);
    console.log('selected Store:', randomStore);
    console.log('selected User:', randomUser);

} catch {
    console.log('데이타 처리과정에 에러가 발생했습니다.', error);
}



// // User 리스트에서 userID 랜덤으로 뽑아서 입력
// readFileSync 활동한 테이타 동기 처리방식



console.log('주문ID:', orderId);
console.log('주문일:', orderAt[0]);
console.log('StoreID:', randomStore);
console.log('userID:', randomUser);