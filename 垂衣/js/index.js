$(function(){
	$('.menu a').eq(0).css({'background-color':'#00339e','color':'#fff'});//首个显示
	$('.menu a').click(function(){
		$('.menu .menu-img').show();
		$('.menu .menu-imgs').hide();
		$('.menu .menu-img1').hide();
		$('.menu .menu-img2').show();
		$(this).css({'background-color':'#00339e','color':'#fff'});
		$('.menu a').not($(this)).css({'background-color':'#fff','color':'#c0c0c0'})
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>550){
			$('.menu').show();
			$('.menu .change1-blue').css({'background-color':'#00339e','color':'#fff'});
			$('.menu a').not($('.menu .change1-blue')).css({'background-color':'#fff','color':'#c0c0c0'});
			$('.menu .menu-img').show();
			$('.menu .menu-imgs').hide();
		}else{
			$('.menu').hide();
		}
		if($(this).scrollTop()>1600){
			$('.menu .change2-white').css({'background-color':'#00339e','color':'#fff'});
			$('.menu a').not($('.menu .change2-white')).css({'background-color':'#fff','color':'#c0c0c0'});
			$('.menu .menu-img1').hide();
			$('.menu .menu-img2').show();
		}
		if($(this).scrollTop()>3500){
			$('.menu .change3-white').css({'background-color':'#00339e','color':'#fff'});
			$('.menu a').not($('.menu .change3-white')).css({'background-color':'#fff','color':'#c0c0c0'});
			$('.menu .menu-img1').hide();
			$('.menu .menu-img2').show();
		}
		if($(this).scrollTop()>5000){
			$('.menu .change4-white').css({'background-color':'#00339e','color':'#fff'});
			$('.menu a').not($('.menu .change4-white')).css({'background-color':'#fff','color':'#c0c0c0'});
			$('.menu .menu-img1').hide();
			$('.menu .menu-img2').show();
		}
	})

	
})
