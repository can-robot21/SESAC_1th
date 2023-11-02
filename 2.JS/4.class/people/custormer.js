const Person = require('./person');

class Customer extends Person {
    constructor(name, age, gender, orderNo, order1, order2) {
    super(name, age, gender, orderNo, order1, order2);
    this.orderNo =orderNo;
    this.order1 = order1;
    this.order2 = order2;
    }
    greeting() {
        console.log(`${this.name}고객의 주문번호는 ${this.orderNo}에 ${this.order1}, ${this.order2}를 했습니다.`)
    }
    placeOrder() {
        console.log(`${this.name} 고객님의 주문이 완료되었습니다.`);
    }
}

module.exports = Customer;