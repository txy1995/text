$(document).ready(function(){
	
//	$(".list3 li a").eq(1).hover(function(){
//		$(this).css("color","orange")
//		$('.tanchu').css("display","block");
//	},function(){
//		$('.tanchu').css("display","none");
//		$(this).css("color","")
//	})

	for(var i =0;i<7;i++){
		$(".list3 li a").eq(i).hover(function(){
		$(this).css("color","orange")
		$('.tanchu').stop(false, true).slideDown("slow");
	},function(){
		$('.tanchu').stop(false, true).slideUp("slow");	
		$(this).css("color","")
	})
		$(".ltlist li ").eq(i).hover(function(){
			$('.xungoulist').css('display','block');
			$(this).css('background','#FF6700')
		},function(){
			$('.xungoulist').css('display','none');
			$(this).css('background','')
		})
	}
	
});