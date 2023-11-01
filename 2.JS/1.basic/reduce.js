const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc, curr) => acc +curr, 0);
const sumMap = numbers.map(numbers);

console.log(sum);

console.log(sumMap);
