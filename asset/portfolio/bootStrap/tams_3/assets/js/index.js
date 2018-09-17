$(document).ready(function(){ 
		$(".nav > li").mouseover(function(){
			$(this).find(".drop").stop().slideDown();
		});
		
		$(".nav > li").mouseleave(function(){
			$(this).find(".drop").stop().slideUp();
		});
	
	
	// 폰트 파일도 같이 첨부할 것
		$('#banner').slick({
        autoplay:true,
				autoPlaySpeed:5000,
				dots:true,
				arrows:true,
				pauseOnHover:true,
				/* fade:true,
					vertical:true,
					swipe:false,
				*/
      });
	
	
});