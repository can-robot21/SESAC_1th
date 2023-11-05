// 일반 계산기 

const calculator = require ('./calculator');

class calculatorProgrammer extends Calculator {
    constructor(result) {
        super(result);
    }
    hex(result) {
        // 16진수 변환
    }
    dec(result) {
        // 10진수 변환
    }
    oct(result) {
        // 8진수 변환
    }
    bin(result) {
        // 2진수 변환
    }
    getResult() {
        return this.result;
    }
}


 module.experts = calculatorProgrammer;