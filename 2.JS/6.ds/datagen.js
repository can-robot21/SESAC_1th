const array = Array.from({length:100}, () => Math.floor(Math.random() *100));

console.log(array);

// 랜덤으로 겹치지 않는 숫자 만들기
const uniqueRendomNumbers = new Set();
console.log(uniqueRendomNumbers.size);

while (uniqueRendomNumbers.size <100) {
    uniqueRendomNumbers.add(Math.floor(Math.random() *100));
}

console.log(uniqueRendomNumbers)

const array2 = Array.from(uniqueRendomNumbers);
console.log(array2);


// 직접 만들려면?