// article/detial

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

refreshReplyList(id);

const replyList = document.querySelector(".reply-list");

function refreshReplyList(articleId) {
	let replyEditor = document.querySelector("#reply-editor").value;
	fetch(`/reply/list/${articleId}`, {
		method: "POST"
	})
		.then(resp => resp.json())
		.then(data => {
			replyList.innerHTML = '';
			data.map(function(reply) {
				const ul = document.createElement("ul");
				const replyId = document.createElement("input");
				replyId.setAttribute("type","text");
				replyId.setAttribute("value",reply.id);
				replyId.className="reply-id";
				const firstLi = document.createElement("li");
				const replyWriterSpan = document.createElement("span");
				const replyDeleteBtn = document.createElement("button");
				firstLi.classList.add("d-flex", "justify-content-space-between")
				firstLi.appendChild(replyWriterSpan);
				const replyContentLi = document.createElement("li");
				replyDeleteBtn.setAttribute("type", "button");
				replyDeleteBtn.setAttribute("data-reply",reply.id);
				replyWriterSpan.innerHTML = reply.etc.writer;
				replyContentLi.innerHTML = reply.content;
				replyContentLi.style.borderBottom = "1px solid black";
				if (reply.etc.writer === replyEditor) {
					replyDeleteBtn.innerHTML = '삭제';
					replyDeleteBtn.className = "reply-delete-btn";
					replyDeleteBtn.addEventListener("click", this.deleteReply);
					firstLi.appendChild(replyDeleteBtn);
				}
				ul.append(replyId);
				ul.append(firstLi);
				ul.append(replyContentLi);
				replyList.append(ul);
			})
		}).catch(error => console.error(error));
}

function deleteReply() {
	//
}


// 댓글 작성하기
const replyWriteBtn = document.querySelector(".reply-write-btn");
replyWriteBtn.addEventListener("click", () => {
	let replyContent = document.querySelector("#reply-content");
	if (replyContent.value === '') {
		alert("댓글을 입력해주세요");
		replyContent.focus();
		return false;
	}
	let data = {
		content: replyContent.value
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
				replyContent.value = '';
				replyList.innerHTML = '';
				refreshReplyList(id);
			}
		}).catch(error => console.error("ERROR : " + error));
});
