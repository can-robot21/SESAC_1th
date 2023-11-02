const Manager = require('./person');

class Manager extends Person {
    constructor(name, age, gender, jobTitle, salary) {
        super(name, age, gender, jobTitle, salary);
    }
    greeting() {
        console.log(`안녕, 나는 ${this.name}이고 ${age}이야.`);
    }
    work() {
        console.log(`${this.name} ${this.jobTitle}이(가) 업무를 배분하고 있습니다.`);
    }
}

module.exports{Manager};