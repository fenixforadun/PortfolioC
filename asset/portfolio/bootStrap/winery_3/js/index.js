$(document).ready(function(){ 
		$(".nav > li").mouseover(function(){
			$(this).find(".drop").stop().slideDown();
		});
		
		$(".nav > li").mouseleave(function(){
			$(this).find(".drop").stop().slideUp();
		});

		$('#banner').slick({
        autoplay:true,
				autoPlaySpeed:5000,
				dots:true,
				arrows:true,
				pauseOnHover:true,
      });
});