class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greeting() {
        console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야.`);

    }

    walk() {
        console.log(`${this.name}이 걷고 있습니다.`);
    }

    EventTarget() {
        console.log(`${this.name}는 밤을 먹고 있습니다.`);

    }
}

const person1 = new Person("철수", 25, "남성");
person1.greeting();
person1.walk();
person1.EventTarget();

