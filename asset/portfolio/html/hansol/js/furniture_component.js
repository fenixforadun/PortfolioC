$(document).ready(function(){ // 문서가 모두 로딩되면, 이후 안쪽의 스크립트 구문을 실행

	// 실제 스크립트 코드를 입력할 공간

	$("section .info03 .info03-feat > ul > li").on("mouseenter",function(){
		$("section .info03 .info03-feat > ul > li").stop().animate({"color":"#fff"},800,function(){
			$("section .info03 .info03-feat > ul > li").stop().animate({"color":"#2d5b79"},700);
		});
	});

	$("section .info03 .info03-feat > ul > li").on("mouseleave",function(){
		$("section .info03 .info03-feat > ul > li").stop().animate({"color":"#000"},800,function(){
			$("section .info03 .info03-feat > ul > li").stop().animate({"color":"#e351f9"},700);
		});
	});

	// $(".contact .inquiry > form > a:nth-of-type(1)").on("click",funtion(){ // .contact .inquiry > form > a:nth-of-type(1)를 클릭하면,
	//	var inquiry = $(".contact .inquiry > form > textarea").val(); // 변수 inquiry에 textarea의 정보 값을 저장

	//	if (inquiry=="") { // inquiry의 정보 값이 빈 문자열일 때
	//		alert("아무런 정보도 입력하지 않으셨습니다.");
	//	} else if (inquiry>=19) { // inquiry의 정보 값이 19와 같거나 클 때
	//		alert("당신은 성인입니다.");
	//	} else if (inquiry<19); { // inquiry의 정보 값이 19보다 작을 때
	//		alert("당신은 미성년입니다.");
	//	} else { //위의 세가지 경우를 제외한 나머지 모든 경우일 때
	//		alert("숫자만 입력해주세요.");
	//	}

//	});
//});

	$("li").on("click",function(){
		$(this).css({"color":"#2d5b79", "cursor":"pointer"});

	});


	// $(".info03 .info03-img").on("click",function(){

	//	var wid = $(this).width(); // 변수 wid에 방금 클릭한 .info03 .info03-img의 넓이 값을 저장
	//	$(this).height(wid);
	//});

	//$(".info03 .info03-img").on("mouseenter",function(){

	//	$(this).width(680);
	//});

	//$(".info03 .info03-img").on("mouseleave",function(){

	//	$(this).width(340);
	//});

	$(".info03 .info03-img").on("click",function(){
		$(".info03 .info03-img").fadeOut();
	});

	$(".info03 .info03-img").on("click",function(){
		$(".info03 .info03-img").fadeIn();
	});

	$("section .mainbanner > img").on("click",function(){
		$("section .mainbanner > img").fadeOut(800);
	});

	$("section .mainbanner > img").on("click",function(){
		$("section .mainbanner > img").fadeIn(800);
	});

});

















