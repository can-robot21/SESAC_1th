function add2(a, b) {
    return a + b;
}

function add3(a, b, c) {
    return a + b + c;
}

// 다른 모듈에서 사용하게끔...
module.exports = { add2, add3 };