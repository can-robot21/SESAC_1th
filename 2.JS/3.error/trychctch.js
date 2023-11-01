function divide(a, b) {
    try {
        if (typeof b !== "number") {
            throw new TypeError('숫자를 입력하세요');
        }
        //길이 제한 코드 추가
        if (a.toString().length > 9) {
            throw new Error('길이가 9 글자 이상인 경우 지원되지 않습니다.')
        }


        if (b == 0) {
            throw new Error('0으로 나눌 수 없습니다.');
        }
        return a/b;
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("타입 오류 발생", error.message);
        } else {
            console.log("기타 오류 발생", error.message);

        }
    }
}

console.log(divide(10,2));
console.log(divide(10, '문자열'));
console.log(divide(10,0));
console.log(divide(12345,5));
console.log(divide(1234567891234,2));