package com.nana.port.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.nana.port.mapper.UserMapper;
import com.nana.port.payload.User;

@Service
public class UserService {
	@Autowired
	UserMapper userMapper;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	// 회원가입
	public int signup(User user) {
		String rawPassword = user.getPassword();
		String encodePassword = bCryptPasswordEncoder.encode(rawPassword);
		user.setPassword(encodePassword);
		user.setRole("USER");
		return userMapper.signup(user);
	}


}
