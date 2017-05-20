$(document).ready(function(){

	
	for(var i=0;i<10;i++){
		$(".ltlist li ").eq(i).hover(function(){
			$('.xungoulist').css('display','block');
			$(this).css('background','#FF6700')
		},function(){
			$('.xungoulist').css('display','none');
			$(this).css('background','')
		})
	
	}
	
	
	
	
	
	
})
