let num;
let inputNum;
let currentNum = "";
let sumNum = 0;
let preOp;

function addNum(num) {
  currentNum += num;
  document.querySelector(".screen").innerHTML = currentNum;
}

function operator(op) {
  inputNum = parseFloat(currentNum);

  if (sumNum !== 0) {
    switch (preOp) {
      case "+":
        sumNum += inputNum;
        break;
      case "-":
        sumNum -= inputNum;
        break;
      case "*":
        sumNum *= inputNum;
        break;
      case "/":
        sumNum /= inputNum;
        break;
    }
  } else {
    sumNum = inputNum;
  }

  preOp = op;
  currentNum = "";
  // inputNum = 0;
  // num = "";
  document.querySelector(".screen").innerHTML = op;
}

function clearScreen() {
  document.querySelector(".screen").innerHTML = "JS 계산기";
  currentNum = "";
  sumNum = 0;
  num = 0;
}

function sum() {
  inputNum = parseFloat(currentNum);
  console.log('직전 연산자:',preOp);

  if (sumNum !== 0) {
    switch (preOp) {
      case "+":
        sumNum += inputNum;
        break;
      case "-":
        sumNum -= inputNum;
        break;
      case "*":
        sumNum *= inputNum;
        break;
      case "/":
        sumNum /= inputNum;
        break;
    }
  }

  document.querySelector(".screen").innerHTML = sumNum;
  currentNum = "";
  current = 'JS 계산기';
}
