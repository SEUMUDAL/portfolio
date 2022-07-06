window.addEventListener("load", () => {
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
});