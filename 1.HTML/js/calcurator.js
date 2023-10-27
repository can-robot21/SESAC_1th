let currentKey;
let currentNum = '';
let sumNum;

function clearScreen() {
    currentNum = document.querySelector('.screen');
    currentNum.innerHTML = '';
    break;
}

function addNum(num) {
    currentNum += num;
    document.querySelector('.screen').innerHTML = currentNum;
}

function operator(op) {
    if (opertor !== '') {
        preNum = currentNum;
        currentNum = '';
        opertor = op;
        document.querySelector(.screen).classList.add(preNum)
    
    }
}