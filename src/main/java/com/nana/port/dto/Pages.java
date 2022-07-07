package com.nana.port.dto;

import lombok.Getter;

@Getter
public class Pages {
	// 게시글 전체 갯수
	private int total;
	private Criteria cri;
	// 화면 시작 페이지
	private int strPage;
	// 화면 끝 페이지
	private int lstPage;
	// 페이지 이전 버튼
	private boolean prev;
	// 페이지 다음 버튼
	private boolean next;
	// 화면에 보여지는 페이지 버튼 갯수
	private int display = 5;

	public Pages(Criteria cri, int total) {
		this.cri = cri;
		this.total = total;

		this.lstPage = (int) (Math.ceil(cri.getPageNum() / (double) display)) * display;
		this.strPage = (lstPage - display) + 1;

		int realEnd = (int) (Math.ceil((total * 1.0) / cri.getAmount()));

		if (lstPage > realEnd) {
			this.lstPage = realEnd;
		}

		this.prev = strPage == 1 ? false : true;
		this.next = this.lstPage < realEnd;
	}

}
