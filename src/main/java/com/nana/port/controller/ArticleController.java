package com.nana.port.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.nana.port.dto.Criteria;
import com.nana.port.dto.Pages;
import com.nana.port.payload.Article;
import com.nana.port.service.ArticleService;

@Controller
@RequestMapping("/article")
public class ArticleController {
	
	@Autowired
	private ArticleService articleService;
	/* 게시글 목록 */	
	@GetMapping("/list")
	public ModelAndView List(Criteria cri) {
		ModelAndView mv = new ModelAndView("article.list");
		List<Article> list = articleService.getList(cri);
		int total = articleService.getTotal(cri);
		mv.addObject("list", list);
		mv.addObject("page", new Pages(cri, total));
		return mv;
	}
	
	/* 게시글 상세보기 */
	@GetMapping("/detail")
	public ModelAndView detail(@RequestParam int id, @ModelAttribute("cri") Criteria cri) {
		ModelAndView mv = new ModelAndView("article.detail");
		mv.addObject("article", articleService.getArticle(id));
		articleService.increseHit(id);
		return mv;
	}
	/* 게시글 작성폼 */
	@GetMapping("/write")
	public String writeForm() {
		return "article.write";
	}
	/* 게시글 수정 */
	@GetMapping("/modify/{id}")
	public String modifyForm(@PathVariable int id,Model model) {
		model.addAttribute("article", articleService.getArticle(id));
		return "article.modify";
	}
}
