// // 검색함수 구현 search(num), 검색위치 index출력
// function searchDic(word1, word2) {
//   let inputWord = word1[0];
//   let wordOrder = 1;
//   for (let i = 1; i < word1.length; i++) {
//     if ((word2 === word1[i])) {
//       inputWord = word1[i];
//       wordOrder = i + 1;
//       break;
//     }
//   }
//   if (inputWord === word2) {
//     console.log(`찾으시는 단어는 ${inputWord}로 ${wordOrder}번째 있습니다.`);
//   } else {
//     console.log("일치하는 단어가 없습니다.");
//   }
// }

// class 호출해 검색하기
const SearchDic = require('./SearchDic');

// 배열입력
const wordList = [20, 15, 'seoul', 30, 'file1', 45, 2, 100];
let wordA = "file1";

const searchDic1 = new SearchDic(wordList, wordA);

searchDic1.search();