package com.nana.port.dto;

import lombok.Data;

@Data
public class Criteria {
	private int pageNum; // 화면상 현재 페이지 번호, 무조건 기준은 1
	private int amount; // 한 p당 보여지는 게시글
	private int skip; //limit #{skip} : #{amount} , skip은 0부터 시작
	private String type;
	private String keyword;
	
	public Criteria() {
		this(1, 10);
	}
	public Criteria(int pageNum, int amount) {
		super();
		this.pageNum = pageNum;
		this.amount = amount;
		this.skip = (pageNum-1) * amount;
	}
	public void setPageNum(int pageNum) {
		if(pageNum <= 0) {
			this.pageNum = 1;
		}
		else {
			this.pageNum = pageNum;
		}
		this.skip = (pageNum-1)* amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
		this.skip = (pageNum-1)*amount;
	}
	public String[] getTypeArr() {
		return type == null? new String[] {}: type.split(""); 
	}
}

