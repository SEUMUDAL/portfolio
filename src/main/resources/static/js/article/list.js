/**
 * 목록 페이지
 */
window.addEventListener("load", () => {
	// list에서 detail로 이동
	const pageMoveForm = document.getElementById("pagemove-form");
	const detailLinks = document.querySelectorAll(".detail-links");
	detailLinks.forEach(link => {
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
	const writeBtn = document.querySelector(".write-btn");
	writeBtn.addEventListener("click", () => {
		location.href = "/article/write";
	});
})