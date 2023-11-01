class Shape {
    getArea() {
        return 0;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    getArea() {
        return this.sideLength **2;
    }
    getInfo() {
        return ('객체의 정보를 추가해 주세요.')
    }
}

class Triangle extends Square {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return this.base*this.height / 2;
    }

    getInfo(){
        return (` 가로 : ${this.base}, 높이: ${this.height}`);
    }
}


// 객체 생성 및 활용

const square = new Square(5);
console.log(`Square Area: `, square.getArea());
console.log(`Square Info: `, square.getInfo());


// 미션1. 삼각형 추가하기
const triangle = new Triangle(10, 3);
console.log('Triangle Area:', triangle.getArea());
console.log(triangle.getInfo());

// 미션2. 사다리꼴 추가하기
// 미션3. 동그라미 추가하기

