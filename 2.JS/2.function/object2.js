const array = [1,2,3];

// for ...of <- 배열, 문자열, Map, Set ...
for (const element of array) {
    console.log(element);
}


const obj = {a:1, b:2, c:3, name:2023}
// for ...in <--  객체
for (const key in obj) {
    console.log(key, obj[key]);
    console.log(typeof(key));

}

