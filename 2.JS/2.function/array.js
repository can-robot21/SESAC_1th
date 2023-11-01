// 배열 .... (리스트)
const number2 = [1, 2, 3, 4, 5];
const numbers = [1,2,3,4,5];
const fruits = ["Apple", "Bannana", "Orange"];
const mixed = [1, "1", 2, "2", 3, "3"];

console.log(number2);
console.log(mixed);

// 숫자
// 문자
// 불리언 = true, false
// 객체 = {key:value}
// 스페셜 : null, undefined


let variable;
variable = "2";
console.log(typeof(variable));
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);

// 배열안에 있는 맴버를 반복접근 
for (let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// forEarch { }

fruits.forEach((fruit) => {
    console.log(fruit);
});