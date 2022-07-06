<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/css/article/list.css" />
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<section class="-info">
	<table>
		<thead>
			<tr>
				<th width="10%" class="cl">NO</th>
				<th width="50%">제목</th>
				<th width="10">작성자</th>
				<th width="10%">날짜</th>
				<th width="10%">조회수</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${list}" var="article" begin="1" end="10">
				<tr>
					<td>${article.id}</td>
					<td><a class="detail-link" href="${article.id}">${article.title}</a></td>
					<td>${article.etc.writer}</td>
					<td><fmt:formatDate value="${article.regDate}" pattern="yyyy-MM-dd" /></td>
					<td>${article.hit}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<div class="d-flex justify-content-space-between">
		<button class="btn first-list-btn">목록</button>
		<button class="btn write-btn">글쓰기</button>
	</div>
</section>