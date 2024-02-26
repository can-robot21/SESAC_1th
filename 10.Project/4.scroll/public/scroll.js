const itemsPerLoad = 20;
let start = 0;
let end = start + itemsPerLoad;

const container = document.getElementById('scroll-container');
const dataList = document.getElementById('data-list'); // 데이터를 출력할 리스트 엘리먼트 추가

// 데이터 로딩
console.log(`초기 데이터 로딩 ${start}..${end}`);
fetch(`/get-items?start=${start}&end=${end}`) // end 파라미터 오타 수정
    .then((response) => response.json())
    .then((items) => {
        items.forEach((item) => {
            const itemElemet = document.createElement('div');
            itemElemet.classList.add('item');
            itemElemet.textContent = item;
            container.appendChild(itemElemet);

            // 데이터를 리스트에도 추가
            const listItem = document.createElement('li');
            listItem.textContent = item;
            dataList.appendChild(listItem);

            // 다음 데이터 로딩을 위한 출발값 변경
            start += itemsPerLoad;
        });
    });

// 무한 스크롤 이벤트 추가..
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const nextEnd = start + itemsPerLoad; // 다음 end 값을 계산
        console.log('화면 끝까지 도착 후 다음');
        fetch(`/get-items?start=${start}&end=${nextEnd}`)
            .then((response) => response.json())
            .then((items) => {
                items.forEach((item) => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('item');
                    itemElement.textContent = item;
                    container.appendChild(itemElement);

                    // 데이터를 리스트에도 추가
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    dataList.appendChild(listItem);
                });

                // 다음 데이터 로딩을 위한 출발값 변경
                start += itemsPerLoad;
            });
    }
});
