// setTimeout(callback함수, 지연시간....)

console.log('시작');
setTimeout(sayHello, 2000);
console.log('함수 호출 후');

function sayHello() {
    console.log('안녕하세요, 이것은 콜백함수 입니다.');
}

// -------------------------

setTimeout(() => {
    console.log("비동기 코드 실행");
}, 1000);