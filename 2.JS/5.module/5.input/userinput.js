const readline = require('readline');
// import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('구구단의 단을 입력하세요:', (input) =>{
    const num = parseInt(input);

    if (num > 0 && num <10) {
        console.log(`${num} 단 구구단을 출력합니다.`);
        for (let i=1; i<10; i++) {
            console.log(num * i);
        }

    } else {
        console.log('숫자를 입력하세요.!!')
    }

    rl.close();
})