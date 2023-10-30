var result = 10;

function add(a, b) {
    let res = a + b;
    result = 20;
    console.log("result", result);
    return res;
}

console.log("result:", result);
console.log(add(2, 5));
// console.log("res:", res);
console.log("result:", result);
