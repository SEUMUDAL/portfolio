const signupForm = document.getElementById("signup-form");
const signupBtn = document.querySelector(".signup-btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const matchPassword = document.querySelector("#match-password");
const nickname = document.querySelector("#nickname");
const email = document.querySelector("#email");

username.addEventListener("focusout", () => checkUsername(username));
password.addEventListener("focusout", () => checkPassword(password));
matchPassword.addEventListener("focusout", () => matchCheckPassword(password, matchPassword));
nickname.addEventListener("focusout", () => checkNickname(nickname));
email.addEventListener("focusout", () => checkEmail(email));

signupBtn.addEventListener("click", () => {
	
	const data = {
		username: username.value,
		password: password.value,
		nickname: nickname.value,
		email: email.value
	};
	fetch("/user/signup", {
		method: "POST",
		headers: {
			"content-Type": "application/json; charset=utf-8"
		},
		body: JSON.stringify(data)
	})
		.then(resp => resp.json())
		.then(resp => {
			if (resp.status === "OK") {
				alert("회원가입이 완료되었습니다.");
				location.href = "/user/login";
			} else {
				alert("회원가입에 실패하셨습니다.");
				console.log(resp.status);
			}
		})
		.catch(error => console.log(error));
});

function checkUsername(username) {
	const idMsg = signupForm.querySelector("#id-msg");
	if (isEmpty(username.value)) {
		idMsg.innerText = "아이디를 입력해주세요";
		idMsg.style.display = "block";
		return;
	}

	fetch(`/user/check/${username.value}`, {
		method: "POST"
	})
		.then(resp => resp.json())
		.then(resp => {
			if (resp.data === 0) {
				if (validateId(username.value)) {
					idMsg.innerText = "사용 가능한 아이디 입니다.";
				} else {
					idMsg.innerText = "영문 소문자로 시작하는 5~20자의 영문 소문자, 숫자와 만 사용 가능합니다.";
				}
			}
			else {
				idMsg.innerText = "이미 존재하는 아이디 입니다.";
			}
			idMsg.style.display = "block";
		})
		.catch(error => console.error(error));
}

function checkPassword(password) {
	const passwordMsg = signupForm.querySelector("#password-msg");
	if (isEmpty(password.value)) {
		passwordMsg.innerText = "비밀번호를 입력해주세요";
		passwordMsg.style.display = "block";
		return;
	}
	else if (validatePassword(password.value)) {
		passwordMsg.innerText = "사용가능한 비밀번호입니다.";
	} else {
		passwordMsg.innerText = "최소 하나의 영문자,숫자,특수문자를 포함한 8-20글자여야 합니다.";
	}
	passwordMsg.style.display = "block";
}

function matchCheckPassword(password, matchPassword) {
	const matchPasswordMsg = signupForm.querySelector("#match-passwordMsg")
	if (isEmpty(matchPassword.value)) {
		matchPasswordMsg.innerText = "비밀번호를 입력하세요";
	}
	else if (password.value !== matchPassword.value) {
		matchPasswordMsg.innerText = "비밀번호가 일치하지 않습니다"
	} else {
		matchPasswordMsg.innerText = "비밀번호가 일치합니다."
	}
	matchPasswordMsg.style.display = "block";
}

function checkNickname(nickname) {
	const nicknameMsg = signupForm.querySelector("#nickname-msg");
	if (isEmpty(nickname.value)) {
		nicknameMsg.innerText = "닉네임을 입력하세요";
		nicknameMsg.style.display = "block";
		return;
	}
	fetch(`/user/match/${nickname.value}`, {
		method: "POST"
	})
		.then(resp => resp.json())
		.then(resp => {
			if (resp.data === 0) {
				if (validateNickname(nickname.value)) {
					nicknameMsg.innerText = "사용 가능한 닉네임 입니다.";
				} else {
					nicknameMsg.innerText = "2-9자, 영어소문자 또는 숫자 또는 한글로 구성 가능합니다.";
				}
			}
			else {
				nicknameMsg.innerText = "이미 사용중인 닉네임입니다";
			}
			nicknameMsg.style.display = "block";
		})
		.catch(error => console.error(error));
}

function checkEmail(email) {
	const emailMsg = signupForm.querySelector("#email-msg");
	if (isEmpty(email.value)) {
		emailMsg.innerText = "이메일을 입력해주세요";
		emailMsg.style.display = "block";
	}
	else if (!validateEmail(email.value)) {
		emailMsg.innerText = "이메일 형식으로 입력해주세요";
		emailMsg.style.display = "block";
	} else {
		emailMsg.innerText = "사용가능한 이메일 입니다."
		emailMsg.style.display = "block";
	}
}


