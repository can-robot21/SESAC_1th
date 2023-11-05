function maxNum(num) {
    let number = num[0];
    for (i=1; i < num.length; i++) {
        if (number < num[i]) {
            number = num[i];
        }
    }
    return number;
}

function minNum(num) {
    let number = num[0]
    for (y=1; y < num.length; y++) {
        if (number > num[y]) {
            number = num[y];
        }
    }
    return number;
}

function average(num) {
    let number = num[0];
    for (i=1; i < num.length; i++) {
        number += Number(num[i]);
        console.log(num[i]);
    }
    return number/num.length;
}

num = [10, 40, 45, 2, 5];
maxNumber = maxNum(num);
console.log(`최대숫자: ${maxNumber}`);

minNumber = minNum(num);
console.log(`최소숫자: ${minNumber}`);

aveNumber = average(num);
console.log(`평균: ${aveNumber}`);

