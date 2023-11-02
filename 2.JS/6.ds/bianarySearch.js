function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length -1;

    while (left <= right) {
        const mid = Math.floor((left+right) /2);  //중간 포지션 계산

        if (arr[mid] === target) {
            return mid; // 결과 찾음

        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // 찾지못함
}


const sortedArray = [1, 3, 5, 7, 9, 10, 11, 13, 15, 17, 19];

const target = 13;
const result = binarySearch(sortedArrary, target);
console.log("result:", result);