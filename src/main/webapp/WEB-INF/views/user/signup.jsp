<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/css/user/signup.css" />
<script type="text/javascript" src="/js/validate.js"></script>
<script defer="defer" type="text/javascript" src="/js/signup.js"></script>
<section class="signup-form-wrap">
	<h3>회원가입</h3>
	<form id="signup-form">
		<div>
			<label for="">아이디</label>
			<input type="text" placeholder="아이디를 입력해주세요" id="username">
			<span style="display: none;" id="id-msg"></span>
		</div>
		<div>
			<label>비밀번호</label>
			<input type="password" placeholder="비밀번호를 입력해주세요" id="password" autocomplete="off">
			<span style="display: none;" id="password-msg"></span>
		</div>
		<div>
			<label>비밀번호 재확인</label>
			<input type="password" placeholder="비밀번호를 확인해주세요" id="match-password" autocomplete="off">
			<span style="display: none;" id="match-passwordMsg"></span>
		</div>
		<div>
			<label>닉네임</label>
			<input type="text" placeholder="사용하실 닉네임을 입력해주세요" id="nickname">
			<span style="display: none;" id="nickname-msg"></span>
		</div>
		<div>
			<label for="">이메일</label>
			<input type="email" placeholder="이메일을 입력해주세요" id="email">
			<span style="display: none;" id="email-msg"></span>
		</div>
		<div>
			<button type="button" class="btn signup-btn">회원가입</button>
		</div>
	</form>
</section>