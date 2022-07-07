window.addEventListener("load", () => {
	// 게시글 작성
	const articleWrtieBtn = document.querySelector(".write-btn");

	articleWrtieBtn.addEventListener("click", () => {
		let title = document.querySelector("#title").value;
		let content = document.querySelector("#content").value;

		if (title === '') {
			alert("제목을 입력해주세요");
			return false;
		};
		if (content === '') {
			alert("내용을 입력해주세요");
			return false;
		};

		let data = {
			title: title,
			content: content
		};

		fetch("/article/write", {
			method: "POST",
			headers: {
				"content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(data)
		})
			.then((resp) => resp.json())
			.then((data) => {
				if (data.status === "OK") {
					alert("글쓰기가 완료되었습니다.");
					location.href = "/article/list";
				}
			})
			.catch((error) => console.error("error" + error))
	});
});