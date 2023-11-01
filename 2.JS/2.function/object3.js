

// 1. date
// const today = new Date();
// console.log(today);

// // 2. Math
// const number = Math.max(10, 20, 30, 40, 5, 3, 1);
// console.log(number);


// 미션 1. 배열에서 가장 큰 숫자 출력

// function max_numbers(numbers) {
//     let currentNum = numbers[0];
//     for (i=1; i < numbers.length; i++) {
//         // 현재 숫자와 직전 숫자를 비교하기 
//         if (currentNum < numbers[i]) {
//             currentNum = numbers[i];
//         }
//         console.log(numbers[i]);
//     } 
//     return currentNum;
// }

function max_number(nums) {
    let num = nums[0];

    for (let i=0; i < nums.length; i++) {
        if (nums[i] > num) {
            num = nums[i];
            console.log(num);
        }
    }
    return num;
}
const numbers = [10, 20, 30, 5, 3, 50];
const max_num = max_number(numbers);
console.log("===== 결과 ====");
console.log(max_num);


// 미션.min 만들기
// 미션.평균 만들기
// function min_numbers() {

// }

// const min_num = min_number(numbers);


// 3. string
const text = 'Hello, world';
console.log(text.length);

