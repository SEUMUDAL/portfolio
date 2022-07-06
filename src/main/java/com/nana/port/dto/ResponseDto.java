package com.nana.port.dto;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseDto<T> {
	private HttpStatus status;
	private T data;
}
