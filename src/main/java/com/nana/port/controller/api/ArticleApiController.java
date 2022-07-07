package com.nana.port.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nana.port.auth.PrincipalDetails;
import com.nana.port.dto.ResponseDto;
import com.nana.port.payload.Article;
import com.nana.port.service.ArticleService;

@RestController
@RequestMapping("/article")
public class ArticleApiController {
	
	@Autowired
	private ArticleService articleService;
	
	//게시글 작성
	@PostMapping("/write")
	public ResponseDto<Integer> write(@RequestBody Article article, @AuthenticationPrincipal PrincipalDetails principal) {
		int rs = articleService.write(article, principal.getUser());
		return new ResponseDto<>(HttpStatus.OK,rs);
	}
	/* 글 수정하기 */
	@PutMapping("/modify")
	public ResponseDto<Integer> modify(@RequestBody Article article) {
		int rs = articleService.modify(article);
		return new ResponseDto<>(HttpStatus.OK,rs);
	}
}
