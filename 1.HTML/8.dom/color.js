function changeRedColor() {
    var textElement = document.getElementById("myText");
    console.log("textElement");
    textElement.style.color = "red";

}
// 미션1. blue 색상 버튼동작 완성

function changeBlueColor() {
    var textElement = document.getElementById("myText");
    textElement.style.color = "Blue";

}

// 미션2. 버튼 하나로 Red/Blue 토글
function changeColor() {
    var textElement = document.getElementById("myText");
    var currentColor = textElement.style.color;

    if (currentColor === 'red') {
        textElement.style.color = "blue";
    } else {
        textElement.style.color = "red";
    }
}

 // 미션3. 내용 삭제 버튼을 통해 추가한 내용 삭제

 function addElement() {
    var div = document.createElement("div");
    div.textContent = "새로운 내용";
    document.body.appendChild(div);
 }

function removeElement() {
    var textElement = document.querySelector('div');
    textElement.remove(textElement);
 }

 // 기타 기능
 function myfunc() {
    // print();
    console.log(screen.width);
    console.log(screen.innerWidth);
 }
