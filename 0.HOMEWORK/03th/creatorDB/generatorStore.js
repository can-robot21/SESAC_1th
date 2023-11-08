// store data 100개 생성

const fs = require ('fs');
const GenerateNo = require('./generateNo');
const GenerateAdd = require('./GenerateAdd');

let userData = '';

// store ID  생성

let storeId = GenerateNo.arrayIndex([8, 4, 4, 12]);

// store 이름, 분류 조합 생성


function storeName() {
    const storeType = ['투썸', '스타벅스', '탐앤탐스', '백다방', '메가커피'];
    const storePoint = ['잠실1호점', '신촌2호점', '삼성3호점', '잠실4호점', '송파5호점', '왕십리6호점', '종로7호점', '신촌8호점', '홍대9호점'];
    
    let type = storeType[Math.floor(Math.random() * storeType.length)];
    let store = type + ' ' + storePoint[Math.floor(Math.random() * storePoint.length)];
    
    let storeInfo = ([store, type]);
    return storeInfo;
}


// store 주소생성
let storeAdd = GenerateAdd.address();


// store 데이터
console.log(storeId);
storeName();
console.log(storeAdd);

// // 입력된 숫자만큼의 데이터 생성 후  csv 생성

function makeStore(uNum) {
    // csv 파일로 가상의 데이터 생성
    let csvStore = '';
    let oneStore = [];

    for (u = 0; u < uNum; u++) {
        let newStoreId = GenerateNo.arrayIndex([8, 4, 4, 12]);
        let storeInfo = storeName();
        let newStore = [newStoreId, storeInfo[0], storeInfo[1], GenerateAdd.address()].join(',');
        csvStore += newStore + '\n';
        oneStore[u] = newStoreId;

    }

    const sumIndex = [csvStore,oneStore];
    return sumIndex;

}
let indexStore = makeStore(10);
console.log(indexStore);

// csv 에 쓰기

fs.writeFile('store.csv', indexStore[0], 'utf-8', (err) => {
    if (err) {
        console.log('데이터 기록 중 에러가 발생했습니다.');
    } else {
        console.log('정상적으로 매장 데이터 파일이 생성되었습니다.')
    }
});




module.exports = { makeStore };
