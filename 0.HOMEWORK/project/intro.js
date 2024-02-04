document.addEventListener("DOMContentLoaded", function() {
    var bgImage = document.getElementById("background-image");
    var iconImage = document.getElementById("icon-image");
    var titleImage = document.getElementById("title-image");

    var animationEnd = 'animationend';

    function startIconAnimation() {
        iconImage.style.top = '0px'; // 아이콘의 시작 위치를 상단으로 초기화
        iconImage.style.animation = 'dropIcon 2s forwards';
    }

    function startTitleAnimation() {
        titleImage.style.animation = 'popTitle 2s forwards';
    }

    // 수정: 'fillScreen 3s forwards'를 'expandBackground 0.5s forwards'로 변경
    bgImage.style.animation = 'expandBackground 0.5s forwards';

    bgImage.addEventListener(animationEnd, function() {
        console.log("Background image animation completed.");
        startIconAnimation(); // 배경 애니메이션이 끝나면 아이콘 애니메이션 시작
    });

    iconImage.addEventListener(animationEnd, function() {
        console.log("Icon image animation completed.");
        startTitleAnimation(); // 아이콘 애니메이션이 끝나면 타이틀 애니메이션 시작
    });

    titleImage.addEventListener(animationEnd, function() {
        console.log("Title image animation completed.");
        // 모든 애니메이션이 완료된 후 리다이렉트
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 30000); 
    });
});
