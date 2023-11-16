const url = require('url');
const urlString = 'https://browse.auction.co.kr/search?keyword=oled&itemno=&nickname=&encKeyword=oled&arraycategory=&frm=&dom=auction&isSuggestion=No&retry=';
const parsedUrl = url.parse(urlString, true, true);

console.log(parsedUrl);