package com.nana.port.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nana.port.auth.PrincipalDetails;
import com.nana.port.dto.ResponseDto;
import com.nana.port.payload.Reply;
import com.nana.port.service.ReplyService;

@RestController
@RequestMapping("/reply")
public class ReplyApiController {
	@Autowired
	ReplyService replyService;
	
	/* 댓글목록보기 */
	/* 댓글목록보기 */
	@PostMapping("/list/{articleId}")
	public List<Reply> replyList(@PathVariable int articleId) {
		List<Reply> replyList = replyService.getList(articleId);
		return replyList;
	}
	
	/* 댓글작성하기 */
	@PostMapping("/write/{articleId}")
	public ResponseDto<Integer> Write(@PathVariable int articleId, @RequestBody Reply reply, @AuthenticationPrincipal PrincipalDetails principal) {
		int rs = replyService.write(articleId,reply,principal.getUser());
		return new ResponseDto<>(HttpStatus.OK,rs);
	}
	/* 댓글 삭제하기 */
	@DeleteMapping("/delete/{Id}")
	public ResponseDto<Integer> delete(@PathVariable int id) {
		int rs = replyService.delete(id);
		return new ResponseDto<>(HttpStatus.OK,rs);
	}
	@GetMapping("/list2")
	public List<Reply> list2() {
		List<Reply> list = replyService.getList(74);
		return list;
	}
	
	
}
