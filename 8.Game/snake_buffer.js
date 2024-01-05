const canvas = document.getElementById('snakeCanvas'); // 캔버스 요소 가져오기
const context = canvas.getContext('2d'); // 2D 그래픽 컨텍스트 가져오기
const blockSize = 20; // 블록 크기
const canvasSize = 300; // 캔버스 크기
const snakeSpeed = 200; // 뱀 이동 속도 (밀리초)

let snake = [
    { x: 0, y: 0 }, // 초기 뱀 위치
];
let direction = 'right'; // 뱀 초기 이동 방향
let food = generateFood(); // 초기 음식 생성
let gameover = false; // 게임 오버 여부
let directionBuffer = '';

// 화면 그리기 함수
function draw() {
    context.clearRect(0, 0, canvasSize, canvasSize); // 캔버스 지우기

    if (gameover) {
        // 게임 오버 메시지 표시
        context.fillStyle = '#F00';
        context.font = '30px Arial';
        context.fillText('Game Over', 80, canvasSize / 2);
        return;
    }

    // 뱀과 음식 그리기
    drawSnake();
    drawFood();

    // 뱀 이동 및 충돌 체크
    moveSnake();
    checkCollision();
    checkFood();
}

// 뱀 그리기 함수
function drawSnake() {
    context.fillStyle = '#00F';
    snake.forEach(segment => {
        context.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize);
    });
}

// 음식 그리기 함수
function drawFood() {
    console.log('음식추가');
    context.fillStyle = '#F00';
    context.fillRect(food.x * blockSize, food.y * blockSize, blockSize, blockSize);
}

// 뱀 이동 함수
function moveSnake() {
    const head = { ...snake[0] };
    console.log(head);
    switch (direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }
    snake.unshift(head); // 뱀의 머리 추가
}

// 충돌 체크 함수
function checkCollision() {
    if (gameover) {
        return;
    }

    const head = snake[0];
    console.log(head);
    if (
        head.x < 0 ||
        head.x >= canvasSize / blockSize ||
        head.y < 0 ||
        head.y >= canvasSize / blockSize ||
        isSnakeCollision()
    ) {
        gameover = true; // 게임 오버 처리
    }
}

// 뱀과 자기 자신 충돌 체크 함수
function isSnakeCollision() {
    const head = snake[0];
    return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

// 음식과 뱀의 충돌 체크 및 처리 함수
function checkFood() {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
        console.log("얌얌");
        food = generateFood(); // 음식을 먹으면 새로운 음식 생성
    } else {
        snake.pop(); // 뱀이 음식을 먹지 않으면 꼬리 줄이기
    }
}

// 무작위로 음식 생성 함수
function generateFood() {
    let foodPosition;
    do {
        foodPosition = {
            x: Math.floor(Math.random() * (canvasSize / blockSize)),
            y: Math.floor(Math.random() * (canvasSize / blockSize)),
        };
    } while (isFoodOnSnake(foodPosition));

    return foodPosition;
}

// 음식이 뱀 위에 있는지 체크 함수
function isFoodOnSnake(foodPosition) {
    return snake.some(segment => segment.x === foodPosition.x && segment.y === foodPosition.y);
}

// 게임 재시작 함수
function resetGame() {
    snake = [{ x: 0, y: 0 }]; // 초기 뱀 위치로 설정
    direction = 'right'; // 초기 이동 방향으로 설정
    food = generateFood(); // 초기 음식 생성
    gameover = false; // 게임 오버 상태 초기화
}

// 키보드 이벤트 처리 함수
document.addEventListener('keydown', handleKeyPress);

// 키 입력에 따른 방향 전환 함수
function handleKeyPress(event) {
    console.log(event);
    if (gameover) {
        resetGame(); // 게임 오버 상태에서 키 입력 시 게임 재시작
        return;
    }

    if (directionBuffer.length >= 2) {
        console.log(directionBuffer);
        return;
    }

    let preiousKeyPress = direction;
    if (directionBuffer.length > 0) {
        preiousKeyPress = directionBuffer[directionBuffer.length - 1];
    }

    switch (event.key) {

        // TODO: 키 눌린것에 따라서 direction 을 변경하시오.
        case 'ArrowUp':
            if (direction !== 'down') {
                // direction = 'up';
                directionBuffer = 'up';

            }
            break;
        case 'ArrowDown':
            if (direction !== 'up') {
                // direction = 'down';
                directionBuffer = 'down';
            }
            break;
        case 'ArrowLeft':
            if (direction !== 'right') {
                // direction = 'left';
                directionBuffer = 'left';
            }
            break;
        case 'ArrowRight':
            if (direction !== 'left') {
                // direction = 'right';
                directionBuffer = 'right';
            }
            break;
    }
}

// 일정 시간마다 화면 그리기 함수 호출
setInterval(draw, snakeSpeed);