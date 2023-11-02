const array = Array.from({length:100}, () => Math.floor(Math.random() *100));

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i + 1 ; // 찾는 요소의 인텍스 변환
        }
    }
    return -1; // 요소를 찾지 못할때 -1 출력
}

console.log(array);
console.log(linearSearch(array, 5));

