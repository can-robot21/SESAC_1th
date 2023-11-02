// 인텍스라는 모듈에서,  add모듈의 함수를 불러와야 함..
const addFunction = require('./add');


let sum = addFunction.add2(2, 3);
console.log('result:', sum);

let sum2 = addFunction.add3(2, 3, 4);
console.log('result:',sum2)