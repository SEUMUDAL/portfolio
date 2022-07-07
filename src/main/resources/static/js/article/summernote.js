/**
 * 
 */
window.addEventListener("load", () => {
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
},{ passsive : true });