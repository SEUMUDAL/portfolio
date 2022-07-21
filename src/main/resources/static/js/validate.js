// 비어있는 값인지 체크한다.
function isEmpty(value) {
	return value === '' ? true : false;
}
// 아이디 규칙
/* 영문 소문자로 시작하는 5~20자의 영문 소문자, 숫자와 만 사용 가능하다*/
function validateId(value) {
	const regx = /^[a-z][a-z0-9]{4,19}$/g;
	return regx.test(value);
};

// 비밀번호 규칙
/*최소 하나의 영문자,숫자,특수문자*/
/*최소 8자-20자*/
function validatePassword(value) {
	const regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
	if (/\s/g.test(value)) {
		/*공백이 존재하면 false 반환*/
		return false;
	}
	return regx.test(value);
};

// 닉네임규칙
/*2자-9자, 영어소문자 또는 숫자 또는 한글로 구성*/
/*자음만,모음만은 불가*/
function validateNickname(value) {
	const regx = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,9}$/
	return regx.test(value);
};

function validateEmail(value) {
	const regx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
	return regx.test(value);
}
