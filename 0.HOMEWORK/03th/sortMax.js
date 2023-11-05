let currentNumber;
let num;

function maxNumber(num) {
  currentNumber = num[0];
  for (i = 1; i < num.length; i++) {
    if (currentNumber < num[i]) {
      currentNumber = num[i];
    }
  }
  console.log("가장 큰수는 : ", currentNumber);
}

num = [3, 6, 9, 30, 20, 10];
maxNumber(num);


// 화살표함수 혹은 내장함수 사용
let maxNum = 0;
maxNum = Math.max(...num);
console.log(`sort 사용 가장 큰 수는 ${maxNum}`);
