let currentKey;
let currentNum = '';
let sumNum;

function clearScreen() {
    currentNum = '';
    document.querySelector('.screen').innerHTML = 'JS계산기';
}

function addNum(num) {
    currentNum += num;
    document.querySelector('.screen').innerHTML = currentNum;
}

function operator(op) {
    if (operator !== '') {
        preNum = currentNum;
        currentNum = '';
        opertor = op;
        document.querySelector('.screen').classList.add(preNum)
    
    } else {
        console.log('sum');
    }
}