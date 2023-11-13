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

asyncfunc1()
    .then(response1 => asyncfunc2(response1))
    .then(response2 => asyncfunc1(response2))
    .then(response3 => asyncfunc2(response3))
    .then(response4 => {
        console.log('최종 결과:', response4);
    })
    catch(error => {
        console.error('에러 발생', error);
    })
