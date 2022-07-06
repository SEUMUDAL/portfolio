package com.nana.port.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
	// 회원가입 홈페이지
	@GetMapping("/signup")
	public String signUp() {
		return "user/signup";
		
	}
	@GetMapping("/login")
	public String loginForm() {
		return "user/login";
	}
}
