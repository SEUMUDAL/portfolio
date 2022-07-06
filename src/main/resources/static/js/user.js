window.addEventListener("load", () => {
	const signupBtn = document.querySelector(".signup-btn");
	const username = document.querySelector("#username");
	const password = document.querySelector("#password");
	const nickname = document.querySelector("#nickname");
	const email = document.querySelector("#email");
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
				} else
					alert("회원가입에 실패하셨습니다.");
			})
			.catch(error => console.error(error));
	});
});