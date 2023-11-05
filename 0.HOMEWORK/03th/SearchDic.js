// 검색함수 구현 search(num), 검색위치 index출력
// class SearchDic(word1, word2) {
//     let inputWord = word1[0];
//     let wordOrder = 1;
//     for (let i = 1; i < word1.length; i++) {
//       if ((word2 === word1[i])) {
//         inputWord = word1[i];
//         wordOrder = i + 1;
//         break;
//       }
//     }
//     if (inputWord === word2) {
//       console.log(`찾으시는 단어는 ${inputWord}로 ${wordOrder}번째 있습니다.`);
//     } else {
//       console.log("일치하는 단어가 없습니다.");
//     }
//   }

//   module.export = (SearchDic);

class SearchDic {
    constructor(wordList) {
        this.wordList = wordList;
    }
    
    search(word) {
        let inputWord = this.wordList[0];
        let wordOrder = 1;
        for (let i=1; i < wordList.length; i++) {
            if (word === this.wordList[i]) {
                inputWord = this.wordList[i]
                wordOrder = i + 1;
                break;
            }
        }
        if (word === inputWord[0]) {
            console.log(`찾으시는 ${inputWord}(은)는 ${wordOrder}번째 있습니다.`)
        } else {
        }
        console.log('배열에 일치하는 단어가 없습니다.!!');
    }

    module.exports = SearchDic;