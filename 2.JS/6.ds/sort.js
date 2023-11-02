// const array = [65, 25, 12, 22, 11];
const array = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

function selectionSort(arr) {
  const length = arr.length;
  for (let i=0; i < length - 1; i++) {
    let minIndex = i;

    // i 부터 배열의 끝까지 최소값을 찾음;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    //최소값을 현재 위치로 교환
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log("before:", array);
const sortedArray = selectionSort(array);
console.log("after: ", sortedArray);
console.time("selectSort");
selectionSort([...array]);
console.timeEnd('selectSort');
