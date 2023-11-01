class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "Some Sound ....";
    }
}


class Dog extends Animal {
    makeSound() {
        return "멍멍";
    }
}

const myDog = new Dog("강아지");
console.log(myDog.makeSound());
