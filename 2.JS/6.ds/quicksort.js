const array = [65, 25, 12, 22, 11];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[arr.length -1];
        const left = [];
        const right= [];

        // pivot 을 기준으로 정렬을 위한 코드 추가
    }

}

console.log("before:", array);
const sortedArray = selectionSort(array);
console.log("after: ", sortedArray);
console.time("sort");
console.timeEnd('seletSort');
