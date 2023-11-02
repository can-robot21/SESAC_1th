const Person = require('./person');

class Student extends Person {
    constructor(name, age, gender, studentNo, major) {
        super(name, age, gender, studentNo, major);
        this.studentNo = studentNo;
        this.major = major;
    }
    greeting() {
        console.log(`안녕, 나는 ${this.name}이고 ${this.age}이고, 연봉은 ${this.salary}원이야.`);
    }
    study() {
        console.log(`${this.name} 학생이 ${this.major}을 전공하고 있습니다.`)
    }
}

module.exports = Student;