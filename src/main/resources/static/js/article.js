window.addEventListener("load", () => {
	// list에서 detail로 이동
	const pageMoveForm = document.getElementById("pagemove-form");
	const detaLinks = document.querySelectorAll(".deta-links");
	detaLinks.forEach(link => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			let createInput = document.createElement("input");
			createInput.setAttribute("type", "hidden");
			createInput.setAttribute("name", "id");
			createInput.setAttribute("value", link.getAttribute("href"));
			pageMoveForm.appendChild(createInput);
			pageMoveForm.setAttribute("action", "/article/detail");
			pageMoveForm.submit();
		})
	});
	

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
		$('.summernote').summernote({
		placeholder: '내용을 입력해주세요',
		tabsize: 2,
		minHeight: 300,
		maxHeight: 600,
		fontNames: ['Arial', 'Fira Code', '굴림', '빙그레 메로나체'],
		toolbar: [
			['style', ['style']],
			['fontname', ['fontname']],
			['fontsize', ['fontsize']],
			['style', ['bold', 'italic', 'underline']],
			['color', ['forecolor', 'color']],
			['table', ['table']],
			['para', ['ul', 'ol', 'paragraph']],
			['height', ['height']],
			['insert', ['picture', 'link', 'video']]
		]
	});
});