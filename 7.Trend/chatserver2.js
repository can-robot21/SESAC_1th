const WebSocket = require('ws');
const express = require('express');
const path = require('path');

const port = 8080;
const express_server = 3000;

// 웹서버 소켓 생성
const wss = new WebSocket.Server({ port: port });

// express 서버
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client2.html'));
})

// 웹소켓 연결 대기(웹소캣 OPEN)
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
        let parsedMessage = "";

        // 받은 메시지 파싱
        try {
            parsedMessage = JSON.parse(message.toString());
            console.log(parsedMessage);
            console.log(clientIp, parsedMessage.content);
        } catch (error) {
            console.error("Invalid JSON Format: ", error);
            return;
        }

        // 모든 사용자에게 그대로 전송
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                const messageType = client === ws ? 'sent': 'received';
                const messageObj = { type: messageType, content: parsedMessage?.content}

                client.send(JSON.stringify(messageObj));
            }
        })
    })

    // 연결 후 연결 종료 처리    
    ws.on('close', () => {
        console.log( '클라이언트 연결 종료', clientIp);
        // 종료 처리

    })
})

app.listen(express_server, () => {
    console.log(`Express Server Ready, ${express_server}`);
});

console.log('웹소켓 서버가 시작되었습니다.');