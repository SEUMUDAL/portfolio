package com.nana.port.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nana.port.mapper.UserMapper;
import com.nana.port.payload.User;
@Service
public class PrincipalDetailsService  implements UserDetailsService {
	@Autowired
	UserMapper userMapper;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User principal = userMapper.findByUsername(username);

		if (principal == null) {
			System.out.println("사용자를 찾을 수 없음.");
		} else {
			System.out.println("princiapl user:" + principal);
		}
		return new PrincipalDetails(principal);
	}

}
