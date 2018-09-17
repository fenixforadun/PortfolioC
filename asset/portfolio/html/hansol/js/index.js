$(document).ready(function(){ // 문서가 모두 로딩되면, 이후 안쪽의 스크립트 구문을 실행

	// 실제 스크립트 코드를 입력할 공간

	$("#lnb > ul > li").css({"font-weight":"bold"}); // #lnb css 속성 변경
	$("#lnb > ul > li > .submenu > li").css({"font-weight":"normal"});
	$("#lnb > ul > li > .submenu > li").children("a").css({"font-size":"1em"});
	// $("ul").parent().css({"color":"red"});
	// $("li").siblings().css({"color":"blue"});
	// $(".btn").find(".downbtn").css({"color":"#444"});
	// eq 형제요소 선택 $(".secondbanner > .bannerbox > .second-ban-info").eq(0).css({"color":"red"});
	// prev 이전 요소 선택 $(".notice > .fa").eq(0).prev().css({"color":"blue"});
	// $("i").not(".fa-plus").css({"color":"red"});
	// $(".jqtest").on("click",function(){$(".jqtest > a").text("바닥재")});
	// $(".jqtest").on("mouseenter",function(){$(".jqtest > a").text("바아다악재에")});
	// $(".jqtest").on("mouseleave",function(){$(".jqtest > a").text("마우스 벗어났을 때")});
	// $(".jqtest").on("mousemove",function(){$(".jqtest > a").text("선택영역에서 마우스 움직일 때")});
	// $(window).on("scroll",function(){$(".jqtest > a").text("브라우저 스크롤")});
	// $(window).on("resize",function(){$(".jqtest > a").text("화면 리사이즈")});
	//
	$("#sub-lnb > ul > li > ul > li > a > img").on("mouseenter",function(){$("#sub-lnb > ul > li > ul > li > a > img").stop().animate({"width":"120px","height":"140px"},100,"easeOutBounce");});
	$("#sub-lnb > ul > li > ul > li > a > img").on("mouseleave",function(){$("#sub-lnb > ul > li > ul > li > a > img").stop().animate({"width":"50px","height":"50px"},100,"easeOutBounce")});


// 	$("#sub-lnb > ul > li > ul > li > a > img").on("click",function() {
// 	$("#sub-lnb > ul > li > ul > li > a > img").attr("src":"img/ico2.png" , "alt":"서브메뉴아이콘테스트"}); });

	$(".content4 #third-lnb > ul > li").eq(0).on("mouseenter",function(){
		$(".content4 #third-lnb > ul > li > a").addclass("third-lnb-fi-li-a"); // .removeclss => 클래스 제거
	});

	$(".content4 #third-lnb > ul > li").on("click",function(){
		var txt = $(this).text();
		$(".cont4-content ul > .cont4-curtain").text(txt);
		$(".cont4-content ul > .cont4-curtain").css({"background":txt});
	});

});
















