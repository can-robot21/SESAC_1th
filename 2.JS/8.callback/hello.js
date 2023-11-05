// 기본 APT

function greet(name, callback) {
    const message = `안녕, ${name}`;
    callback(message);
}


// 위 aPI를 호출하는 caller rk 나머지 부분을 작성해 채줘 줌
function displayGreenting(greeting) {
    console.log(greeting);
}

greet('예제', displayGreenting);