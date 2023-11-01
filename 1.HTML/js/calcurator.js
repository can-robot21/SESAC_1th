let num;
let inputNum;
let currentNum = "";
let sumNum = 0;
let preNum;

function addNum(num) {
  currentNum += num;
  document.querySelector(".screen").innerHTML = currentNum;
}

function operator(op) {
  inputNum = parseFloat(currentNum);
  if (sumNum !== 0) {
    switch (op) {
      case "+":
        sumNum += inputNum;
        console.log("더하기 후:", sumNum);
        break;
      case "-":
        sumNum -= inputNum;
        console.log("빼기 후:", sumNum);
        break;
      case "*":
        sumNum *= inputNum;
        console.log("곱하기 후:", sumNum);
        break;
      case "/":
        sumNum /= inputNum;
        console.log("나누기 후:", sumNum);
        break;
    }
  } else {
    sumNum = inputNum;
    console.log("연산 전:", sumNum);
  }

  currentNum = "";
  inputNum = 0;
  num = "";
  document.querySelector(".screen").innerHTML = op;
}

function clearScreen() {
  document.querySelector(".screen").innerHTML = "JS 계산기";
  currentNum = "";
  sumNum = 0;
  num = 0;
}

function sum() {
  document.querySelector(".screen").innerHTML = sumNum;
  currentNum = "";
  sumNum = 0;
  num = 0;
}
