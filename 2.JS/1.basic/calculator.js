function add (a, b) {
    let res = a + b;
    return res;
}

function sub(a, b) {
    let res = a - b;
    return res;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        console.log("0으로 나눌 수 없습니다. ")
    }
    return a / b;
}


// 유닛테스트 - 내가 짠 유닛(함수)에 대한 테스트 ...
console.log("------------ 테스트 케이스 -----------");
console.log(`add = ${add(1, 2)}`);
console.log(sub(10, 3));
console.log(mul(2, 3));

console.log(div(8, 2));

