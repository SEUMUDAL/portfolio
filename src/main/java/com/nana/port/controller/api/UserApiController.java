package com.nana.port.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nana.port.dto.ResponseDto;
import com.nana.port.payload.User;
import com.nana.port.service.UserService;

@RestController
@RequestMapping("/user")
public class UserApiController {
	@Autowired
	UserService userService;
	@PostMapping("/signup")
	public ResponseDto<Integer> signup(@RequestBody User user) {
		int rs = userService.signup(user);
		return new ResponseDto<>(HttpStatus.OK,rs);
	}
	@PostMapping("/check/{username}")
	public ResponseDto<Integer> checkExistUser(@PathVariable String username) {
		int rs = userService.checkExistUser(username);
		System.out.println("결과 " + rs);
		return new ResponseDto<>(HttpStatus.OK, rs);
	}
	@PostMapping("/match/{nickname}")
	public ResponseDto<Integer> matchNickname(@PathVariable String nickname) {
		int rs = userService.matchNickname(nickname);
		return new ResponseDto<>(HttpStatus.OK,rs);
	}
}
