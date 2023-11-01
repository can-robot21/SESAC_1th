// class declaration
class Car {
    constructor(make, model) {
        this._make = make;
        this.model = model;
    }

    drive() {
        return `${this._make} ${this.model} 이 운전중입니다.`
    }

    stop() {
        return `${this._make} ${this.model} 가 멈췄습니다.`
    }
}

const myCar = new Car('Kia', 'K3');
const yourCar = new Car('Tesla', 'model3');

console.log(myCar._make);
console.log(myCar.drive());
console.log(myCar.stop());
console.log(yourCar);

