// 주소 가상으로 조합하기
const cities = ['서울 동대문구', '서울 중구', '서울 강남구', '서울 서초구', '부산 중구', '부산 해운대구', '대구 달성구', '강원도 원주시', '제주 서귀포시']
const streets = ['22길 33', '15길 67', '33길 44', '13길 11', '55길 26', '82길 15', '72길 88', '89길 90']

function address() {
    const add = cities[Math.floor(Math.random() * cities.length)] + streets[Math.floor(Math.random() * streets.length)];
    return add;
};

module.exports = {address}