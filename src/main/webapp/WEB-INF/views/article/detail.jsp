<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script src="/js/article/detail.js"></script>
<link rel="stylesheet" href="/css/article/detail.css" />
<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal" var="principal" />
</sec:authorize>
<section class="-info">
	<div>
		<input type="hidden" value="${article.id}" id="id">
		<div class="d-flex article-box">
			<span class="title">${article.title}</span>
		</div>
		<hr>
		<div class="d-flex article-box">
			<span>${article.etc.writer}</span>
		</div>
		<hr>
		<div class="d-flex article-box">
			<div class="article-content">${article.content}</div>
		</div>
	</div>
	<hr>
	<div class="d-flex justify-content-flex-end btn-box">
		<button class="btn" data-page-move="list">목록</button>
		<c:if test="${article.userId == principal.user.id}">
			<button class="btn" data-page-move="modify">수정</button>
			<button class="btn" data-page-move="delete">삭제</button>
		</c:if>
	</div>
	<form action="./list" method="get" id="pagemove-form">
		<input type="hidden" name="pageNum" value="${cri.pageNum}" />
		<input type="hidden" name="amount" value="${cri.amount}" />
	</form>
</section>

