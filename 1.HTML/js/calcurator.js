let preNum = 0;
let currentNum = '';
let sumNum = 0 ;
let operator;

function clearScreen() {
    currentNum = '';
    document.querySelector('.screen').innerHTML = 'JS계산기';

}

function addNum(num) {
    if (operator === '') {
        currentNum += num;
    } else {
        currentNum = num;
        operator = '';
    }
    document.querySelector('.screen').innerHTML = currentNum;
}

function calculate() {
    const num = parseFloat(currentNum);
        switch (operator) {
            case '+':
                sumNum += num;
                break;
            case '-':
                sumNum -= num;
                break;
            case '*':
                sumNum *= num;
                break;
            case '/':
                sumNum /= num;
                break;
            default:
                sumNum = num;
                break;
        }
        currentNum = "";
    } 

function sum() {
    calculate(); 
    document.querySelector('.screen').innerHTML = sumNum.toString();
    currentNum = sumNum.toString();
}

function setOperator(op) {
    if (currentNum !== '') {
        calculate(); // 연산자를 누를 때마다 현재까지의 연산 수행
        currentNum = '';
    }
    operator = op;
    // operator = op;
    // calculate();
}


