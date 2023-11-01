// 예외처리를 할 수 있는 exception 이란 기능

function divide(a, b) {
    try {
        if (b === 0) {
            throw " 0으로 나눌 수 없습니다.";
        }
        res = a / b;
    } catch {
        console.log("오류 발생")
    }
    return res;
}

console.log(divide(10,2));
console.log(divide(3, 0));


// try {
//  const result = myvariable *2;
// } catch (error) {
//     console.log("오류가 발생했습니다.")
// }
