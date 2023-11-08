// id, name, type, unitPrice -> generatorIthem 로 매장 아이템 20개 리스트 생성
// "Id,Name,Type,UnitPrice
// aeaa187d-f30d-42db-8c23-7632f85bacef,Americano Coffee,Coffee,3000
// f543b3a2-9409-4ba5-be23-75834a916962,Strawberry Cake,Cake,5500

const fs = require('fs');
const generateNo = require('./generateNo');
const { removeAllListeners } = require('process');


// Item id 랜덤 생성
const itemId = generateNo.arrayIndex([8, 4, 4,4, 12]);
console.log('제품 ID:' ,itemId);

// 제품명, 제품타입 생성
const allItem = (['Americano','CafeLatte', 'Espresso','Cappuccino','VanillaLatte',
'dolceLatte','CapeMoka','ChocoLatte', 'IceHazelnuts', 'CafeMocha',
'MilkTea','HoneyBlack', 'EarlGray', 'MintTea','GreenTeaLatte',
'CheeseCake','Castella','ChocoCake','Tiramisu','EggTart']);
const allType = (['Coffee', 'Tea', 'Cake']);

// 제품이름 + 제품타입
let itemName = allItem[Math.floor(Math.random()*allItem.length)];               
console.log(itemName);
let itemtype = allType[Math.floor(Math.random()*allType.length)];

// unitPrice
let allPrice = [3000, 3500, 4500, 5000, 5500, 6000, 6500];
let itemPrice = allPrice[Math.floor(Math.random()*allPrice.length)];
console.log(itemPrice);



