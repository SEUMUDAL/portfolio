package com.nana.port.payload;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	private int id;
	private String username;
	private String password;
	private String nickname;
	private Timestamp regDate;
	private String email;
	private String role;
}
