// article/detial

window.addEventListener("load", () => {
	const pageMoveBtns = document.querySelectorAll("[data-page-move]");
	const id = document.querySelector("#id");
	
	pageMoveBtns.forEach(btn=>{
		btn.addEventListener("click",()=>{
			if(btn.dataset.pageMove == 'modify') {
				location.href = `/article/modify/${id.value}`;
			}
			if(btn.dataset.pageMove == 'list') {
				location.href="/article/list";
			}
		})
	})
	
});