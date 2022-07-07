/**
 * 목록 페이지
 */
window.addEventListener("load", () => {
	const pageMoveForm = document.getElementById("pagemove-form");
	const pageBtns = document.querySelectorAll(".page-btn>a");
	const pageNum = document.querySelector("input[name='pageNum']");


	for (let link of pageBtns) {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			pageNum.setAttribute("value", link.getAttribute("href")); 
			pageMoveForm.setAttribute("action", "/article/list");
			pageMoveForm.submit();
		});
	};

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
	
	const strPageBtn = document.querySelector(".str-page-btn");
	strPageBtn.addEventListener("click",()=>{
		location.href="/article/list";
	});
	
	
})