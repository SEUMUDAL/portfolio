package com.nana.port.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.nana.port.payload.User;
@Mapper
public interface UserMapper {
	// 회원가입
	int signup(User user);

	User findByUsername(String username);

	int checkExistUser(String username);

	int matchNickname(String nickname);

}
