const WebSocket = require('ws');

const port = 8080;

// 웹서버 소켓 생성
const wss = new WebSocket.Server({ port: port });

wss.on('listening', () => {
    console.log(`웹 소켓이 대기중 on port ${port}`);
});

// 소켓으로 연결 요청 처리
wss.on('connection', (ws, req) => {
    const clientIp = req.socket.remoteAddress;
    console.log('클라이언트가 접속하였습니다:', clientIp);

    // 연결 후 메시지 처리
    ws.on('message', (message) => {
        // 받은 메시지는 네트워크 바이트 스트림 형태(소켓 버퍼 타입)
         console.log('전달받은 메시지 | ', message.toString());
         
             // 모든 사용자
             wss.clients.forEach((client) => {
                 if (client.readyState === WebSocket.OPEN) {
                     client.send(" 메시지 수신 완료");
                 }
             })
    })

    // 연결 후 연결 종료 처리    
    ws.on('close', () => {

    })
})

console.log('웹소켓 서버가 시작되었습니다.');