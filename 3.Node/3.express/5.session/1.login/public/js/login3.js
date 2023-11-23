function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 비동기처리
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('로그인 실패');
        }
    })
    .then(data => {
        console.log("data.message: ", data.message);
        alert(data.message);
        checkLoginStatus();
    })
    .catch(error => {
        console.log('로그인 실패: ', error);
        alert('로그인 실패!!');
    });
}

function logout() {
    fetch('/logout')
    .then(response => response.json())
    .then(data => {
        alert(data);
        showLoginForm();
    })
}

function checkLoginStatus() {
    fetch('/check-login')
    .then(response => response.json())
    .then(data => {
        if (data.username) {
            showProfile(data.username);
            console.log('사용자 이름:', data.username);
        } else {
            console.log('로그인된 사용자 없음');
        }
    })
    .catch(error => {
        console.error('로그인 상태 확인 오류: ', error);
        showLoginForm();
    })
}


function showProfile(username) {
    console.log('showProfile');
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('usernameSpan').innerText = username;
}

function showLoginForm() {
    console.log("showLoginForm");
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}