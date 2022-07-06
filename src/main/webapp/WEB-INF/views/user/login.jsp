<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/css/user/login.css" />
<section class="login-form-wrap">
	<span>로그인</span>
	<form class="login-form" method="post" action="/user/login">
		<div>
			<input type="text" placeholder="아이디를 입력해주세요" name="username">
		</div>
		<div>
			<input type="password" placeholder="비밀번호를 입력해주세요" name="password">
		</div>
		<div class="find-box">
			<a href="#">아이디/비밀번호</a>
		</div>
		<div>
			<button type="submit" class="login-btn">로그인</button>
		</div>
		<div>
			<button type="button" class="signup-btn" onclick="location.replace('/user/signup')">회원가입</button>
		</div>
	</form>
</section>
