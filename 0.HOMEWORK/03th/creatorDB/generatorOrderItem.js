// 주문 제품별 아이템 50,000 | Id, orderItem, itemId -> orderItem.csv
// Id,OrderId,ItemId
// f0b0bf5d-31fb-4a21-b55d-f96b91ea91ee,5ee7925a-80d1-4732-9dd2-04f02a805b40,f1b56583-8a27-4a07-89d1-ded18794bbb6
// 75e4d658-912b-44e9-9c75-c889736e122c,e45290bc-1c38-441b-a0eb-a1c9fdd50a09,0d8d91a1-5679-4b2f-8073-f1163285b39b

const fs = require('fs');
const generateNo = require('./generateNo');
const readCsv = require('./readCsv');
const generatorOrder = require('./generatorOrder');
const generatorItem = require('./generatorItem');


// 주문 제품 index 생성

// orderItem.css 에서 OrderItem 랜덤출력 후 저장
// orderItemId.csv 에서 orderItem의 아이디값 랜덤 출력
// fs 함수의 readFileSync 사용 데이터 동기처리
// const orderFile = order.csv;

// makeCsv 모듈 호출하던 방식을 데이터 호출을 위한 동기처리에 맞줘
// try ~ catch 에 직접 데이터 결합 후 저장까지 처리

const itemFile = './csv/item.csv';
const orderFile = './csv/order.csv';
const itemNth = 0;
const orderNth = 0;
let orderItemIndex = [];


try {
    const orderData = readCsv.readCsvSync(orderFile, 'utf8');
    const itemData = readCsv.readCsvSync(itemFile, 'utf8');
    
    let csvOrderItem = 'OrderId,ItemId\n,';
    let oneItem = [];
    // let sumOrderId = [];
    // let nNum = 10;
    let sumId = [];
    let saveName = './csv/orderItem.csv';
    
    // arguments 로 입력된 숫자를 기준으로 데이터 생성
    
    let orderItemIndex;
    const argNum = parseInt(process.argv[2]);
    
    if (!isNaN(argNum)) {
        for ( let i =0; i <argNum; i++ ) {
            randomOrder = readCsv.pickData(orderData, orderNth)
            randomItem = readCsv.pickData(itemData, itemNth);
            
            let orderItemNo = generateNo.arrayIndex([8,4,4,4,12]);
            oneItem = [orderItemNo, randomOrder, randomItem].join(',');
            csvOrderItem += oneItem + ('\n');
            sumId[i] = orderItemNo;
        }
        orderItemIndex = [ csvOrderItem, sumId];

        if (orderItemIndex && orderItemIndex[0]) {
            fs.writeFileSync(saveName, orderItemIndex[0], 'utf8');
            console.log('데이터 결합 후 CSV로 정상적으로 저장되었습니다. ')
        } else {
            console.log('데이터 생성 후 저장과정에 에러가 발생했습니다.')
            console.exit(1);
        }
    }
    

} catch (error) {
    console.log('데이터 전환 과정에 에러가 발생했습니다.');
    console.log('Error occurred : ', error.message);
    console.log('Error name :', error.name);
    console.log('Error trace :', error.stack);

}



// csv 파일 저장을 위한 데이터 결합 및 데이터 
