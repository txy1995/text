
var leftbtn =document.getElementById('leftbtn');
var rightbtn =document.getElementById('rightbtn');
var lunbo2 =document.getElementById("lunbo2");
var m =0;
leftbtn.onclick=function(){
	xx();
 }
rightbtn.onclick=function(){
	xx();

 }
function xx(){
	if(m==0){
		leftbtn.style.color="#ffac13";
		rightbtn.style.color="";
		lunbo2.style.marginLeft=-1240+"px";
		m++;
	}else{
			
		leftbtn.style.color="";
		rightbtn.style.color="#ffac13";
		lunbo2.style.marginLeft="";
		m--;
	}
}
setInterval(xx,10000);

