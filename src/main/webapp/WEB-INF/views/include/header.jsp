<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<link rel="stylesheet" href="/css/include/header.css" />
<sec:authentication property="principal" var="principal" />
<header>
	<div class="line">
		<div class="header-wrap">
			<div class="d-flex justify-content-between align-items-center">
				<a href="/" class="logo">MEGA</a>
				<ul class="login-box d-flex">
					<sec:authorize access="isAnonymous()">
						<li><a href="/user/login">로그인</a></li>
						<li><a href="/user/signup">회원가입</a></li>
					</sec:authorize>
					<sec:authorize access="isAuthenticated()">
						<li><a href="/logout">로그아웃</a></li>
						<li class="user"><a>${principal.user.nickname}</a>
							<ul class="drop-down">
								<li><a href="/user/my-page">my-page</a></li>
								<li><a href="#">menu</a></li>
								<li><a href="#">menu</a></li>
							</ul></li>
					</sec:authorize>
					<li><a href="#">고객센터</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="header-wrap">
		<nav class="d-flex">
			<ul class="d-inline-flex justify-content-start category">
				<li><a href="#">HOT</a></li>
				<li><a href="/article/list">게시판</a></li>
				<li><a href="/article/write">글쓰기</a></li>
			</ul>
		</nav>
	</div>
</header>