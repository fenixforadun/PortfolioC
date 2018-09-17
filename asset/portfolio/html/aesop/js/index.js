$(document).ready(function(){

	
	$(".content1-2 > a > img").click(function(){
		$("#modal").addClass("active");
	});
	$("#btn-close").click(function(){
		$("#modal").removeClass("active");
	});
	
	//dropdown menu
	
	$("#nav > li").hover(function(){
		$(this).find(".drop-nav").stop().slideDown();
	}, function(){
		$(this).find(".drop-nav").stop().slideUp();
	});
	
});