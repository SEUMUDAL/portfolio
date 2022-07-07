// article/detial

window.addEventListener("load", () => {
	const pageMoveForm = document.getElementById("pagemove-form");
	const pageMoveBtns = document.querySelectorAll("[data-page-move]");
	const id = document.querySelector("#id");

	pageMoveBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			if (btn.dataset.pageMove == 'modify') {
				pageMoveForm.setAttribute("action", `/article/modify/${id.value}`);
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
				fetch(`/article/del/${id.value}`, {
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

});