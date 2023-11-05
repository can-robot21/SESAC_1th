const lastNames = ['김', '이', '박', '최', '염', '남궁', '강'];
const firstNames = ['이랑', '박사', '하늘', '수영', '민주'];


// 입력된 이름을 랜덤으로 출력하는 기능
function generateName() {
    let fullName = lastNames[Math.floor(Math.random() * lastNames.length)] + firstNames[Math.floor(Math.random() * firstNames.length)];
    return fullName;
}


// 생년월일 생성
function generateBirthdate() {
    const year = Math.floor(Math.random() *100) +1900;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    return `${year}-${month}-${day}`;
}


// Gender 생성하기
function generateGender() {
    // if (isMainThread.random() < 0.5 {
    //     return "Male";
    // } else {
    //     return "Famale";
    // }) 
    return Math.random() < 0.5 ? "Male" : "Female";
};


//주소 생성하기
const cities = ['서울 동대문구', '서울 중구', '서울 강남구', '서울 서초구', '부산 중구', '부산 해운대구', '대구 달성구', '강원도 원주시', '제주 서귀포시' ]
const streets = ['22길 33', '15길 67', '33길 44', '13길 11', '55길 26', '82길 15', '72길 88', '89길 90']

function generateAddress() {
    const address = cities[Math.floor(Math.random() * cities.length)] + streets[Math.floor(Math.random() * streets.length)];
    return address;
};

// 사용자  uuid  생성 API 활용
// function generateUserId = 
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  // random 생성

function generateUserNo() {
    i = Math.floor(Math.random()*16);
    return i.toString(16);
}

// 렌덤인덱스 1. 16진수 렌덤생성

function hexRandom() {
    const hexNum = '1234567890abcdef';
    const indexNum = Math.floor(Math.random() * hexNum.length);
    return hexNum[indexNum];
}


// 렌덤인덱스 2. 입력된 숫자배열만큼의 조합생성(수정중....)
function arrayPassword(arrayNum) {
    let passWord = [];
    for (i=0; i < arrayNum.length; i++) {
        let arrayWord = '';
        for (y=1; y <= arrayNum[i]; y++) {
            arrayWord += hexRandom();
        }
        passWord.push(arrayWord);
    }
    return passWord.join('-');
}

  
let passArr = arrayPassword([8, 4, 4, 12]); 
console.log(passArr);

// console.log(generateUserNo(passArr));
// console.log(uuidv4(), 'uuid');

console.log(generateName());
console.log(generateBirthdate());
console.log(generateGender());
console.log(generateAddress());






// "Id,Name,Gender,Age,Birthdate,Address
// 0a497257-2b1a-4836-940f-7b95db952e61,강준영,Male,28,1994-09-08,대구 강서구 59길 66
// 3e00736a-5978-48ee-9aa9-366b0c4ed0b8,장승현,Female,43,1979-11-05,서울 강남구 88길 78