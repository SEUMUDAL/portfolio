// article/detial

window.addEventListener("load", () => {
	const pageMoveForm = document.getElementById("pagemove-form");
	const pageMoveBtns = document.querySelectorAll("[data-page-move]");
	const id = document.querySelector("#id").value;

	pageMoveBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			if (btn.dataset.pageMove == 'modify') {
				pageMoveForm.setAttribute("action", `/article/modify/${id}`);
				pageMoveForm.submit();
			}
			else if (btn.dataset.pageMove == 'list') {
				pageMoveForm.submit();
			}
			else if (btn.dataset.pageMove == "delete") {
				if (confirm("정말 삭제하시겠습니까?") == false) {
					alert("삭제를 취소합니다.");
					return false;
				}
				fetch(`/article/del/${id}`, {
					method: "DELETE"
				})
					.then(resp => resp.json())
					.then(data => {
						if (data.status === "OK") {
							alert("삭제가 완료되었습니다.");
							pageMoveForm.submit();
						}
					}).catch(error => console.error("ERROR" + error))
			}
		})
	})
	// 댓글 목록
	function refreshReplyList(articleId) {
		fetch(`/reply/list/${articleId}`, {
			method: "POST"
		}).then(resp => resp.json())
			.then(data => {
				data.map(function(reply) {
					let replyList = document.querySelector(".reply-list");
					let replys = document.createElement("ul");
					replys.className = "replys";
					let writer = document.createElement("li");
					let content = document.createElement("li");
					writer.innerHTML = reply.etc.writer;
					content.innerHTML = reply.content;
					replys.append(writer);
					replys.append(content);
					replyList.append(replys);
				});
			})
	}

	refreshReplyList(id);

	// 댓글 작성하기
	const replyWriteBtn = document.querySelector(".reply-write-btn");
	replyWriteBtn.addEventListener("click", () => {
		let replyContent = document.querySelector("#reply-content").value;
		if (replyContent === '') {
			alert("댓글을 입력해주세요");
			return false;
		}
		let data = {
			content: replyContent
		};
		fetch(`/reply/write/${id}`, {
			method: "POST",
			headers: {
				"content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(data)
		}).then(resp => resp.json())
			.then(data => {
				if (data.status === "OK") {
					alert("댓글이 작성되었습니다.");
					let replyList = document.querySelector(".reply-list");
					replyList.innerHTML = '';
					refreshReplyList(id);
				}

			}).catch(error => console.error("ERROR : " + error));
	});
});