<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
<script src="/js/article/summernote.js"></script>
<script src="/js/article/modify.js"></script>
<link rel="stylesheet" href="/css/article/modify.css" />
<section class="-info">
	<form>
		<input type="hidden" value="${article.id}" name="id" readonly="readonly" id="id" />
		<div class="d-flex justify-content-center write-box">
			<input type="text" placeholder="제목을 입력해주세요" id="title" value="${article.title}" />
		</div>
		<hr>
		<div class="d-flex  justify-content-center write-box">
			<textarea rows="10" cols="50" placeholder="내용을 입력해주세요" class="summernote" id="content">${article.content}</textarea>
		</div>
		<div class="d-flex  justify-content-center write-box">
			<button type="button" class="modify-btn btn">수정하기</button>
			<button type="button" class="list-btn btn">목록</button>
		</div>
	</form>
</section>