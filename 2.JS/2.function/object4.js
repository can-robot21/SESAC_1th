// 객체(오브젝트) 리터럴
let car = { make: "kia", model: "k3"}

console.log(car.make);
console.log(car.model);

console.log("make" in car);

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let newCar = new Car("kia", "K3");
console.log(newCar);
console.log(newCar.make);
console.log(newCar.model);

let Car1 = new Car('kia', '셀토스');

console.log(Car1);
