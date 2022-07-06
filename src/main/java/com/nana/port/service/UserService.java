package com.nana.port.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nana.port.mapper.UserMapper;
import com.nana.port.payload.User;

@Service
public class UserService {
	@Autowired
	UserMapper userMapper;
	// 회원가입
	public int signup(User user) {
		user.setRole("USER");
		return userMapper.signup(user);
	}


}
