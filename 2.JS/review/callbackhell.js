const { symlink } = require("fs");

function asyncfunc1(response, callback) {
    setTimeout(() => {
        console.log('함수1 완료');
        callback('결과');
    }, 1000);
}

function asyncfunc2(response, callback) {
    setTimeout(() => {
        console.log('함수2 완료');
        callback('결과2');
    }, 1000);
}

// 콜백
asyncfunc1(null, function(response1){
    asyncfunc2(response2, function(response2){
        
    })
})