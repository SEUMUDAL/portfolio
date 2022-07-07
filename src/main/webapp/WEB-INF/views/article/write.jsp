<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
<script src="/js/article/write.js"></script>
<script src="/js/article/summernote.js"></script>
<link rel="stylesheet" href="/css/article/write.css" />
<section class="-info">
	<form>
		<div class="d-flex justify-content-center write-box">
			<input type="text" placeholder="제목을 입력해주세요" id="title" />
		</div>
		<hr>
		<div class="d-flex  justify-content-center write-box">
			<textarea rows="10" cols="50" placeholder="내용을 입력해주세요" id="content" class="summernote"
				style="width: 100%"></textarea>
		</div>
		<div class="d-flex  justify-content-center write-box">
			<button class="btn write-btn" type="button">글쓰기 완료</button>
		</div>
	</form>
</section>