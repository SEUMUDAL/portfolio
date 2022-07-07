package com.nana.port.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.nana.port.dto.Criteria;
import com.nana.port.payload.Article;
@Mapper
public interface ArticleMapper {
	// 게시글 목록
	List<Article> getList(Criteria cri);
	
	// 게시글 상세보기
	Article getArticle(int id);

	// 게시글 작성하기
	int write(Article article);
	
	// 게시글 수정하기
	int modify(Article reqArticle);

	// 게시글 삭제하기	
	int delete(int id);
	
	// 게시글 조회수 증가
	void increseHit(int id);

	// 게시글 전체갯수
	int getTotal(Criteria cri);

}
