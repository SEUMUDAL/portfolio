package com.nana.port.payload;

import java.sql.Timestamp;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reply {
	private int id;
	private String content;
	private Timestamp regDate;
	private int articleId;
	private int userId;
	private Map<String,Object> etc;
}
