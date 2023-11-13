function externalAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random() >= 0.8;
            if (result) {
                resolve('결과 없음');
            } else {
                reject("응답 없음");
            }
        }, 1000); // 살제 네트워크 응답을 시뮬레이션 하기 위한 값(1초)
    });
}

async function waitForResult(retryCount = 0) {
    try {
        result =await externalAPI();
        console.log("결과 도착:", result);
        return result;
    } catch (error) {
        console.error(`에러발생: ${error}, 재시도 ${retryCount +1 }`);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(waitForResult(retryCount+1));
             },  1000); // 재시도할때까지 대기하는 시간 (1초)
        });
    }
}

waitForResult()
    .then((finalResult) => {
        console.log('최종 비동기 결과??', retryCount);
    });

console.log('실행 완료');