function asyncfunc1() {
    return new Promis((resolve, reject) => {
        setTimeout(() => {
            console.log('함수1 완료');
            resolve('결과1');
        }, 1000);
    });
}

function asyncfunc2(resolve, callback) {
    setTimeout(() => {
        console.log('함수2 완료');
        resolve('결과2');
    }, 1000);
}

async function excuteOperations() {
    try {
        const response1 = asyncfunc1();
        const response2 = asyncfunc2(response1);
        const response3 = asyncfunc3(response2);
        const response4 = asyncfunc4(response3);
    
        console.log('최종결과:', response4);
    } catch {
        console.log('에러발생:', error);
    }

}
// function executeOperate() {
// }

excuteOperations();