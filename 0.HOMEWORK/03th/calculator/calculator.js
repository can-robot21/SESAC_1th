// 일반 계산기 

class Calculator {
    constructor (result) {
        this.result = result;
    }
    add(number) {
        this.result += number;
    }
    
    sub(number) {
        this.result -= number;
    }

    mul(number) {
        this.result *= number;
    }

    div(number) {
        this.result /= number;
    }

    getResult() {
        return this.result;
    }
}

module.exports = Calculator;