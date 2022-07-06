package com.nana.port.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nana.port.mapper.ArticleMapper;
import com.nana.port.payload.Article;
@Service
public class ArticleService {
	@Autowired
	ArticleMapper articleMapper;
	
	// 리스트
	public List<Article> getList() {
		return articleMapper.getList();
	}

}
