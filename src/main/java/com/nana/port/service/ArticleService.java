package com.nana.port.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nana.port.mapper.ArticleMapper;
import com.nana.port.payload.Article;
import com.nana.port.payload.User;
@Service
public class ArticleService {
	@Autowired
	ArticleMapper articleMapper;
	
	// 리스트
	public List<Article> getList() {
		return articleMapper.getList();
	}
	// 게시글 상세보기	
	public Article getArticle(int id) {
		return articleMapper.getArticle(id);
	}
	// 게시글 작성하기
	public int write(Article article, User user) {
		article.setUserId(user.getId());
		return articleMapper.write(article);
	}
	// 게시글 수정하기
	public int modify(Article reqArticle) {		
		Article article = articleMapper.getArticle(reqArticle.getId());
		if(article == null) {
			return -1;
		}
		return articleMapper.modify(reqArticle); 
	}
}
