/**
 * 게시글 수정 페이지 article/modify
 */
window.addEventListener("load", () => {
	const listBtn = document.querySelector(".list-btn");
	
	listBtn.addEventListener("click",()=>{
		location.href="/article/list";
	})
	const modifyBtn = document.querySelector(".modify-btn");
	if (modifyBtn != null) {
		modifyBtn.addEventListener("click", () => {
			const id = document.querySelector("#id");
			const title = document.querySelector("#title");
			const content = document.querySelector("#content.summernote");


			if (title.value === '') {
				alert("수정하실 제목을 입력해주세요");
				title.focus();
				return;
			}
			if (content.value === '') {
				alert("수정하실 내용을 입력해주세요");
				content.focus();
				return;
			}
			let data = {
				id: id.value,
				title: title.value,
				content: content.value,
			};

			fetch("/article/modify", {
				method: "PUT",
				headers: {
					"content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify(data),
			})
				.then((resp) => resp.json())
				.then((data) => {
					if (data.status === "OK") {
						alert("글 수정 완료");
						location.href = `/article/detail?id=${id.value}`
					} else {
						alert("글 수정 실패");
					}
				})
				.catch((error) => console.error("ERROR :" + error));
		});
	}
});