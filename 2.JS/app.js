// console.log(1);
// console.log(2);
// console.log(3);


// for (let i = 1; i < 6; i += 1) {
//     console.log("IM LOOP");
//     console.log(i);
// }

let quizNum = 5;
let inputNum = prompt('insert your Number');


console.log(quizNum);
if (quizNum == inputNum) {
    console.log('yes, quizNum= ' + inputNum);
}

for (let i = 1; i <= 2; i ++ ) {
    console.log(i);
    for(let j = 1; j < 3; j++) {
        console.log(`j is: ${j} `);
    }
}