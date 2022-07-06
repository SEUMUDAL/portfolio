package com.nana.port.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.nana.port.payload.Article;
@Mapper
public interface ArticleMapper {
	// 게시글 목록
	List<Article> getList();
	
	// 게시글 상세보기
	Article getArticle(int id);

	// 게시글 작성하기
	int write(Article article);

	

}
