// const mailelements = document.querySelectorAll('mail');

// mailelements.foreach(mailelements => {
//     const senderButton = mailelement.querySelectorAll('.button_sender')
//     if (senderButton) {
//         const senderEmail = senderButton.getAttribute('.button_sender')

//         if (senderEmail.includes('webex.com')) {
//             const checkbox = mailelement.querySelector('.button_checkbox_wrap input[type='checkbox']);
//             checkbox.checked = true;
//         }
//     }
// });

//  gpt  수정코드

const mailelements = document.querySelectorAll('mail');

mailelements.forEach(mailelement => {
    const senderButton = mailelement.querySelector('.button_sender');
    if (senderButton) {
        const senderEmail = senderButton.getAttribute('data-email'); // 수정: 'data-email' 속성을 가져오도록 수정

        if (senderEmail.includes('webex.com')) {
            const checkbox = mailelement.querySelector('.button_checkbox_wrap input[type="checkbox"]'); // 수정: 문자열 내부의 따옴표를 수정
            if (checkbox) {
                checkbox.checked = true;
            }
        }
    }
});

let car = {
    brand = "kia",
    year = 2020,
    start: function () {
        return "Engine Started"
    },

    stop: function () {
        return "Engine Stop"
    }
}


console.log(car);
console.log(car.start);