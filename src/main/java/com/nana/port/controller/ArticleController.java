package com.nana.port.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.nana.port.payload.Article;
import com.nana.port.service.ArticleService;

@Controller
@RequestMapping("/article")
public class ArticleController {
	
	@Autowired
	private ArticleService articleService;
	/* 게시글 목록 */	
	@GetMapping("/list")
	public ModelAndView List() {
		ModelAndView mv = new ModelAndView("article.list");
		List<Article> list = articleService.getList();
		mv.addObject("list", list);
		return mv;
	}
	
	/* 게시글 상세보기 */
	@GetMapping("/detail")
	public ModelAndView detail(@RequestParam int id) {
		ModelAndView mv = new ModelAndView("article.detail");
		mv.addObject("article", articleService.getArticle(id));
		return mv;
	}
	/* 게시글 작성폼 */
	@GetMapping("/write")
	public String writeForm() {
		return "article.write";
	}
	
}
