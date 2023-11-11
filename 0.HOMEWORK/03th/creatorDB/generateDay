// 가상 일자 생성

// 생년월일 생성
function oneDay(period) {
    const year = Math.floor(Math.random() * period) + (2023-period);
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

    let oneDate = [String(year), String(month).padStart(2, "0"), String(day).padStart(2, "0")].join('-');
    let theDay = [oneDate, age];

    return theDay;
}

function oneDate() {
    const hour = Math.floor((Math.random) * 24);
    const minute = Math.floor((Math.random) * 60);
    const second = Math.floor((Math.random) * 60);

}

module.exports = {oneDay}