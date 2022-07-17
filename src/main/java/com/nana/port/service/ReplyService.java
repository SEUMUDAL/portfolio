package com.nana.port.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nana.port.mapper.ReplyMapper;
import com.nana.port.payload.Reply;
import com.nana.port.payload.User;

@Service
public class ReplyService {
	@Autowired
	ReplyMapper replyMapper;
	// 댓글 목록
	public List<Reply> getList(int articleId) {
		return replyMapper.getList(articleId);
	}
	// 댓글작성하기
	public int write(int articleId, Reply reply, User user) {
			reply.setArticleId(articleId);
			reply.setUserId(user.getId());
			return replyMapper.write(reply);
	}
	// 댓글 삭제하기
	public int delete(int id) {
		return replyMapper.delete(id);
	}

	


}
