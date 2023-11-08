// UUID 형식의 랜덤번호 생성

// 렌덤인덱스 1. 16진수 random 생성-1

function generateNo() {
    n = Math.floor(Math.random() * 16);
    return n.toString(16);
}

// 렌덤인덱스 1. 16진수 렌덤생성-2

// function hexRandom() {
//     const hexNum = '1234567890abcdef';
//     const indexNum = Math.floor(Math.random() * hexNum.length);
//     return hexNum[indexNum];
// }

// 렌덤인덱스 2. 입력된 숫자배열만큼의 조합생성
function arrayIndex(arrayNum) {
    let passWord = [];
    for (i = 0; i < arrayNum.length; i++) {
        let arrayWord = '';
        for (y = 1; y <= arrayNum[i]; y++) {
            arrayWord += generateNo();
        }
        passWord.push(arrayWord);
    }
    return passWord.join('-');
}

module.exports = { generateNo, arrayIndex };