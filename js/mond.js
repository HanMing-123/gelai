$(function(){
	$(".about-more i").click(function(){
		if($(".company-info").height()==0){
			$(".company-info").animate({"height":100+"%"})
		    $(".about-more i").addClass("glyphicon glyphicon-minus-sign")
		}
		else{
			$(".company-info").animate({"height":0})
			$(this).removeClass("glyphicon glyphicon-minus-sign")
			$(".about-more i").addClass("glyphicon glyphicon-plus-sign")
		}
	})
	var n;
	var infoheight;
	$(".p-nav li").click(function(){
		n =$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		scrollpage();
		infoheight = $(".company-info").height();
	})
	function scrollpage() {
	if(n == 0) {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	}
	if(n == 1) {
		$("html,body").animate({
			scrollTop: 490+"px"
		}, 500);
	}
	if(n == 2) {
		$("html,body").animate({
			scrollTop: 940+"px"
		}, 500);
	}
	if(n == 3) {
		$("html,body").animate({
			scrollTop: 1420+"px"
		}, 500);
	}
	if(n==4){
		if(infoheight !=0){
			$("html,body").animate({
			scrollTop: (1760+infoheight)+"px"
		    }, 500);
		}else{
			$("html,body").animate({
			scrollTop:1760+"px"
		    }, 500);
		}
	}
	if(n==5){
		if(infoheight !=0){
			$("html,body").animate({
			scrollTop: (2060+infoheight)+"px"
		    }, 500);
		}else{
			$("html,body").animate({
			scrollTop:2060+"px"
		    }, 500);
		}
	}
}
})

