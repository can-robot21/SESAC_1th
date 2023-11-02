const Person = require('./person');
const Employee = require('./employee');
const Student = require('./student');
const Customer = require('./custormer');

const employee1 = new Employee("영희", 20, "남성", "매니저", "500");
const student1 = new Student("지연", 20, "여성", "202300","컴퓨터 공학");
const customer1 = new Customer("태식", 30, "남성", "C1001", ["주문1", "주문2"]);


employee1.greet();
student1.greeting();
student1.study();
customer1.placeOrder(); // ""태식 고객님 주문을 완료했습니다."" 출력
