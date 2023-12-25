const express = require('express');
const expressWs = require('express-ws');
const WebSocket = require('ws');
const path = require('path');

const port = 3000;

const app = express();
expressWs(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client3.html'));
});
const wsClients =new Map();

// 웹소켓 핸들린 코드
app.ws('/chat', (ws, req) => {
    ws.on('message' , (message) => {
        console.log(message);
        let parsedMessage;
        let messageType;
        let username;
    
        // 받은 문자열 파싱해서 객체 형태로 만듦
        try {
            parsedMessage = JSON.parse(message);
            messageType = parsedMessage.type;
            username = parsedMessage.username;
    
            console.log(parsedMessage);
            console.log(req.socket.remoteAddress, parsedMessage.content);
        } catch (error) {
            console.log("JSON Format error:", error);
            return;
        }
    
        // 세션 ID ( 유저네임) 저장
        if (username && messageType === 'session') {
            wsClients.set(username, ws);
        }
    
        console.log(`메시지 받음  from ${username}`);
    
        // 모든 클라이언트에게 재전송
        if (messageType !== 'session' ) {
            wsClients.forEach((client, clientUsername ) => {
                console.log('메시지?',parsedMessage);

                const messageObj = {
                    type: client === ws ? 'sent' : 'received',
                    content: parsedMessage.content,
                    username: username 
                }
        
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(messageObj));

                }
            });
        }
    });

});

app.listen(port, () => {
    console.log(`익스프레스 서버 및 웹소켓 Ready`);
});