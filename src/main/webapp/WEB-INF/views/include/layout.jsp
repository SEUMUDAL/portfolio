<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<link rel="stylesheet" href="/css/layout.css" />
</head>
<body>
	<!-- header -->
	<tiles:insertAttribute name="header" />
	<div class="content">
		<div class="content-wrap">
			<main id="main">
				<!-- main -->
				<tiles:insertAttribute name="main" ignore="true" />
			</main>
		</div>
	</div>
	<!-- footer -->
	<tiles:insertAttribute name="footer" />
</body>
</html>