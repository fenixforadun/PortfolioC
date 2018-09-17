$(document).ready(function(){

	$("section .rel-business .tabmenu label:nth-of-type(1)").on("click",function(){
		$("section h1").html("해외조림");
	});
	$("section .rel-business .tabmenu label:nth-of-type(2)").on("click",function(){
		$("section h1").html("Green&amp;Recycling");
	});
	$("section .rel-business .tabmenu label:nth-of-type(3)").on("click",function(){
		$("section h1").html("재제목");
	});
	$("section .rel-business .tabmenu label:nth-of-type(4)").on("click",function(){
		$("section h1").html("목분");
	});
		$("section .rel-business .tabmenu").on("mouseleave",function(){
			$("section h1").html("연관사업");
	});
});
