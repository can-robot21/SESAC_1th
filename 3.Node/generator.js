const names = ['John', 'jane', 'Michael', 'Emily', 'Willian', 'Olivia'];


// 입력된 이름을 랜덤으로 출력하는 기능
function generateName() {
    return names[Math.floor(Math.random() * names.length)];
}

console.log(generateName());

// 생년월일 생성

function generatorBirthdate() {
    const year = Math.floor(Math.random() *100) +1900;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    return `${year}-${month}-${day}`;
}

console.log(generatorBirthdate());

// "Id,Name,Gender,Age,Birthdate,Address
// 0a497257-2b1a-4836-940f-7b95db952e61,강준영,Male,28,1994-09-08,대구 강서구 59길 66
// 3e00736a-5978-48ee-9aa9-366b0c4ed0b8,장승현,Female,43,1979-11-05,서울 강남구 88길 78

 
