import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL || 'http://localhost:5000', // 환경변수로부터 읽어 올 수 있도록
     timeout: 10000, // 요청대시시간
     headers: {
        'Content-Type': 'application/json'
     }
});

export default instance;