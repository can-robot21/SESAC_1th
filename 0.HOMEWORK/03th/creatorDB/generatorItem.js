// id, name, type, unitPrice -> generatorIthem 로 매장 아이템 20개 리스트 생성
// "Id,Name,Type,UnitPrice

const fs = require('fs');
const generateNo = require('./generateNo');



// Item id 랜덤 생성
const itemId = generateNo.arrayIndex([8, 4, 4, 4, 12]);

// 제품명 + 제품타입 생성
function makeItem() {
    const allItem = (['Americano','CafeLatte', 'Espresso','Cappuccino','VanillaLatte',
    'dolceLatte','CapeMoka','ChocoLatte', 'IceHazelnuts', 'CafeMocha',
    'MilkTea','HoneyBlack', 'EarlGray', 'MintTea','GreenTeaLatte',
    'CheeseCake','Castella','ChocoCake','Tiramisu','EggTart']);
    const allType = (['Coffee', 'Tea', 'Cake']);
    
    let itemName = allItem[Math.floor(Math.random()*allItem.length)];  
    let itemType = '';
    
    const typeCoffee = ['Americano','CafeLatte', 'Espresso','Cappuccino','VanillaLatte', 'dolceLatte','CapeMoka','ChocoLatte', 'IceHazelnuts', 'CafeMocha'];
    const typeTea =['MilkTea','HoneyBlack', 'EarlGray', 'MintTea','GreenTeaLatte']; 
    const typeCake = ['CheeseCake','Castella','ChocoCake','Tiramisu','EggTart']; 

        if (typeCoffee.includes(itemName)) {
            itemType = 'Coffee';
        } else if (typeTea.includes(itemName)) {
            itemType = 'Tea';
        } else if (typeCake.includes(itemName)) {
            itemType = 'Cake';
        }

    const item = [itemName, itemType]
    return item;

}


// csv 저장을 위한 파일결합...
function makeCsv(num) {
    let csvItem = 'ItemId,ItemCategory,ItemType,Price,\n'; // csvItem - csv 저장용 결합 데이타
    let oneItem = []; // oneItem - 상품Index, 데이터간 결합에 사용
    let allPrice = [3000, 3500, 4500, 5000, 5500, 6000, 6500];
    
    for (let i=0; i < num; i++ ) {
        const itemId = generateNo.arrayIndex([8, 4, 4, 4, 12]);
        const item = makeItem()
        const itemPrice = allPrice[Math.floor(Math.random()*allPrice.length)];   
        let newItem = [itemId, item[0], item[1], itemPrice].join(',');
        csvItem += newItem + ['\n'];
        oneItem.push(itemId);
    }
    return [csvItem, oneItem];
}

// argumnets 사용으로 입력된 숫자를 기준으로 데이터 생성
const argNum = parseInt(process.argv[2]);

if (!isNaN(argNum)) {
    itemIndex = makeCsv(argNum);
    console.log('데이터 전환이 정상적으로 되었습니다.');
} else {
    consolo.leg('데이터 전환과정에 에러가 발생했습니다.');
}


// 압축된 데이타 csv 파일로 저장하기

fs.writeFile('./csv/item.csv', itemIndex[0], 'utf-8', (err) => {
    if (err) {
        console.log('데이터 기록 중 에러가 발생했습니다.');
    } else {
        console.log('정상적으로 매장 데이터 파일이 생성되었습니다.')
    }
});
