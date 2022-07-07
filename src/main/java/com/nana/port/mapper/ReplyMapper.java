package com.nana.port.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.nana.port.payload.Reply;

@Mapper
public interface ReplyMapper {
	
	// 댓글 목록 가져오기
	List<Reply> getList(int articleId);

	// 댓글 작성하기
	int write(Reply reply);

}
