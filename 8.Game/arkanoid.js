const canvas = document.getElementById('game'); // 캔버스 요소 가져오기
const context = canvas.getContext('2d'); // 2D 그래픽 컨텍스트 가져오기

// 기본 게임 속성 정의
const ballRadius = 10;

// 공의 적절한 시작 위치
let x = canvas.width / 2;
let y = canvas.height - 30;

// 공의 이동 속도
let dx = 2; // x방향
let dy = 2; // y방향

// 패들 정의
const paddleHeight = 10;
const paddleWidth = 100;
let paddleX = (canvas.width - paddleWidth) / 2;

// 블록 정의
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

// 실제 블릭을 두고 충돌 감지
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x:0, y:0, status: 1};
    }
}

// 키 입출력 제어
let rightPress = false;
let leftPress = false;

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status ===1) {
                const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft; 
                const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
    
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                context.fillStyle = '#0095DD';
                context.fill();
                context.closePath();
            }
        }
    }
}

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = '#009000'
    context.fill();
    context.closePath();
}

function drawPaddle() {
    // 네모박스 그리기
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = '#0095DD';
    context.fill();
    context.closePath();
}

function moveBall() {
    x += dx;
    y += dy;

    // 화면의 끝에 갔을때 튕기는 것 구현
    if (x > canvas.width - ballRadius || x < ballRadius) {
        dx = -dx;
    }

    if (y > ballRadius) {
        dy = -dy;
    }

    // 하단 경계에서 패들 충돌 처리
    else if (y + ballRadius > canvas.height - paddleHeight) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            // 공을 패들 위로 위치시킴
            y = canvas.height - paddleHeight - ballRadius -1;
        } else {
            console.log('게임오버');
            gameOver();
        }
    }
}

function movePaddle() {
    if (rightPress && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    } else if (leftPress && paddleX > 0) {
        paddleX -= 5;
    }

    if (paddleX < 0) {
        paddleX = 0;

    } else if (paddleX + paddleWidth > canvas.width) {
        paddleX = canvas.width = paddleWidth;
    }
}

function gameOver() {
    // 게임 초기화
    context.font = '30px Arial';
    context.fillStyle = "#0000";
    context.fillText('Game Over', canvas.width / 2 - 80, canvas.heitht / 2);
    
}

function collectionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            // 충돌로직
            // x, y - 공의위치
            // b.x, b.y - 브릭의 위치
            if (b.status === 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}

// 게임의 기본 로직 구형
function draw() {
    // console.log('무한 반복중');
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();

    moveBall();
    movePaddle();

    collectionDetection();

    requestAnimationFrame(draw); // 부드럽게 반복적으로 호출
}

// 키보드
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUphandler);

function keyDownHandler(e) {
    // console.log(e);
    if (e.key === 'ArrowRight'){
        rightPress = true;
    } else if (e.key === 'ArrowLeft') {
        leftPress = true;
    }
}

function keyUphandler(e) {
    if (e.key === 'ArrowRight') {
        rightPress = false;
    } else if (e.key === 'ArrowLeft') {
        leftPress = false;
    }
}

// 메인 함수를 호출
draw();