$(document).ready(function(){ 
		$("#menu > ul > li").mouseover(function(){
			$(this).find(".submenu").stop().slideDown();
		});
		
		$("#menu > ul > li").mouseleave(function(){
			$(this).find(".submenu").stop().slideUp();
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