class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야.`)
    }

    walk() {
        console.log(`${this.name}이(가) 걷고 있습니다.`);
    }

    eat() {
        console.log(`${this.name}이(가) 식사 중입니다.`);
    }
}

class Employee extends Person {
    constructor(name, age, gender, jobTitle, salary) {
        super(name, age, gender);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    displayInfo() {
        console.log(`직원 ${this.name}의 직위는 ${this.jobTitle}이며, 급여는 ${this.salary}원 입니다.`);
    }

    work() {
        console.log(`${this.name}이(가) 업무 중입니다.`);
    }
}

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




// Employee 생성
const employee1 = new Employee("영희", 30, "여성", "매니저", 50000);
employee1.greet();
employee1.displayInfo();
employee1.walk();
employee1.work();

console.log("=============<>==============");


const person1 = new Person("철수", 25, "남성");
person1.greet();
person1.walk();
person1.eat();

console.log("=============<>==============");
const manager1 = new Manager("영민", 35, "남성", '팀장', 6000);
manager1.greet();
manager1.work();

console.log("=============<>==============");
const student1 = new Student("지연", 20, "여성", "202300","컴퓨터 공학");
student1.greet();
student1.study(); // ""지연 학생이 컴퓨터 공학을 공부하고 있습니다."" 출력

console.log("=============<>==============");
const customer1 = new Customer("태식", 30, "남성", "C1001", ["주문1", "주문2"]);
customer1.greet(); // 
customer1.placeOrder(); // ""태식 고객님 주문을 완료했습니다."" 출력


// =====>

///함수의 다형성 활용

function introduce(people) {
    for (const person of people) {
        person.greeting();
    }
}

introduce(people);

