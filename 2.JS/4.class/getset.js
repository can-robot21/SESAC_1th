class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(diameter) {
        return this._radius = diameter / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.diameter);
myCircle.diameter = 50;
console.log(myCircle.radius);
console.log(myCircle._radius);
