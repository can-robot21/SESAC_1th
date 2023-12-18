const nodemailer = require('nodemailer');
require('dotenv').config();

// naver.com mail
const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true, // Use secure connection
    auth: {
        user: process.env.NAVER_ID,
        pass: process.env.NAVER_PASS
    }
});

// 이메일
const mailOptions = {
    from:  process.env.NAVER_ID,
    to: 'can.robot21@gmail.com',
    subject: '네이버 메일 발송',
    text: '네이버 SMTP에서 보내는 메일'
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('발송성공 ' + info.response);
    }
});