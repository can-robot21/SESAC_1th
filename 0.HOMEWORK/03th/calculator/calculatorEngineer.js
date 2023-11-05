// 공학용 계산기 

const Calculalor = require('/calculalor');

class CalculatorEngineer extends Calculator {
    constructor(result) {
        super(result); // super 키워드 사용
    }

    cos(number) {
        // cos 공식
    }
    sin(number) {
        // sin 공식
    }
    tan(number) {
        // tan 공식
    }
    nd2(number) {
        // 2nd 공식
    }
    getResult() {
        return this.result;
    }
    
}

module.exports = CalculatorEngineer;

