// User data - 1,000 명 생성

const fs = require('fs');
const generateNo = require('./generateNo')

// const GenerateAdd = require('./generateAdd');

let userData = '';

const lastNames = ['김', '이', '박', '최', '염', '남궁', '강'];
const firstNames = ['이랑', '박사', '하늘', '수영', '민주'];


// 입력된 이름을 랜덤으로 출력하는 기능
function generateName() {
    let fullName = lastNames[Math.floor(Math.random() * lastNames.length)] + firstNames[Math.floor(Math.random() * firstNames.length)];
    return fullName;
}


// 생년월일 생성
function generateBirthdate() {
    const year = Math.floor(Math.random() * 100) + 1900;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    // 만나이 구하기
    const today = new Date();
    const birth = new Date(year, month, day);
    let age = today.getYear() - birth.getYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0) {
        age--;
    }

    let birthDate = [String(year), String(month).padStart(2, "0"), String(day).padStart(2, "0")].join('-');
    let birthDay = [birthDate, age];

    return birthDay;
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
const cities = ['서울 동대문구', '서울 중구', '서울 강남구', '서울 서초구', '부산 중구', '부산 해운대구', '대구 달성구', '강원도 원주시', '제주 서귀포시']
const streets = ['22길 33', '15길 67', '33길 44', '13길 11', '55길 26', '82길 15', '72길 88', '89길 90']

function generateAddress() {
    const address = cities[Math.floor(Math.random() * cities.length)] + streets[Math.floor(Math.random() * streets.length)];
    return address;
};

// 사용자  uuid  생성 API 활용
// function generateUserId = 
// function uuidv4() {
//     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     );
// }


// csv 에 가상의 유저데이터 저장하기
// 입력된 숫자만큼의 데이터 생성 후  csv 생성

function makeCsv(uNum) {
    // csv 파일로 가상의 데이터 생성
    let csvData = '';
    let sumId = [];

    for (u = 0; u < uNum; u++) {
        let userId = generateNo.arrayIndex([8, 4, 4, 12]);
        let birthData = generateBirthdate();
        let newUser = [userId, generateName(), generateGender(), birthData[0], birthData[1], generateAddress()].join(',');
        csvData += newUser + '\n';
        sumId[u] = userId;
    }

    const sumCsv = [csvData, sumId];
    return sumCsv;

}

let randomIndex = makeCsv(10);
console.log('======================= csv 저장용 n개의 User 데이터와 userIndex =============================')
console.log(randomIndex);

// csv 에 쓰기

fs.writeFile('user.csv', randomIndex[0], 'utf-8', (err) => {
    if (err) {
        console.log('데이터 기록 중 에러가 발생했습니다.');
    } else {
        console.log('정상적으로 사용자 데이터 파일에 생성되었습니다.')
    }
});