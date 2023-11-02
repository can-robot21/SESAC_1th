let currentNumber;
let num;

function minNumber(num) {
    currentNumber = num[0];
    for (i=1; i < num.length; i++) {
        if (currentNumber > num[i]) {
            currentNumber = num[i];
        }
        
    }
    console.log('가장 작은숫자 :', currentNumber);
}

num = [20, 4, 30, 40, 7, 2, 25];
minNumber(num);

let minN=0;
minN = Math.min(...num);
console.log(minN);
