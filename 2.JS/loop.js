//
//

// for (i = 0; i < 5; i++) {
//     console.log(i);
//     for (j = 0; j < 5; j++) {
//         console.log('j = '+j);
//     }
// }


// 구구단
// let x;
// let y;

// for (x = 1; x < 10; x++) {
//     for (y = 1; y < 10; y++) {  
//         let result = x * y;
//         console.log(x +'*'+ y +'=' + result);
//     }
//     console.log(x + 'th');
// }

// while (조건문)

let n = 0

while (n < 10) {
    console.log(n);
    n = n + 1;
}

n = 0;
while (n < 20) {

    if (n == 10) {
        n = n + 1;
        continue;
        break;
    }
    console.log(n);
    n = n + 1;
}

// do {
// } while {

// n = 0;
// do {
//     console.log(n);
//     n = n +1;

// } while {n < 3};
// }
