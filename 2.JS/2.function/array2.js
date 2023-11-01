let array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6];

console.log(array1[0]);
console.log(array2[0]);

console.log(array1[2]);
console.log(array2[3]);

array1.push(7);
console.log(array1);

// array1.pop();
// console.log(array1);

// let new_array1 = array1.slice(1,3);
// console.log(new_array1);

let new_array1 = array1.splice(1, 3);
console.log(new_array1);

// const array3 = array1.concat(array2);
// console.log(array3);

