
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


module.exports = Person;


// // Employee 생성
// const employee1 = new Employee("영희", 30, "여성", "매니저", 50000);
// employee1.greet();
// employee1.displayInfo();
// employee1.walk();
// employee1.work();

// console.log("=============<>==============");


// const person1 = new Person("철수", 25, "남성");
// person1.greet();
// person1.walk();
// person1.eat();

// console.log("=============<>==============");
// const manager1 = new Manager("영민", 35, "남성", '팀장', 6000);
// manager1.greet();
// manager1.work();

// console.log("=============<>==============");
// const student1 = new Student("지연", 20, "여성", "202300","컴퓨터 공학");
// student1.greeting();
// student1.study(); // ""지연 학생이 컴퓨터 공학을 공부하고 있습니다."" 출력

// console.log("=============<>==============");
// const customer1 = new Customer("태식", 30, "남성", "C1001", ["주문1", "주문2"]);
// customer1.greeting(); // 
// customer1.placeOrder(); // ""태식 고객님 주문을 완료했습니다."" 출력


// // =====>

// ///함수의 다형성 활용

// function introduce(people) {
//     for (const person of people) {
//         person.greeting();
//     }
// }

// introduce(people);

