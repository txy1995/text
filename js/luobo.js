window.onload =function(){
	var imgs =document.getElementById("imgs");
	var rgbtn =document.getElementsByClassName("rgbtn")[0];
	var lfbtn =document.getElementsByClassName("lfbtn")[0];
	var dianlist =document.getElementsByClassName("dianlist")[0];
	var list =dianlist.getElementsByTagName("li");
	var i = 0;
	imgsAttr=['lunbo1.jpg','lunbo2.jpg','lunbo3.jpg']
	rgbtn.onclick=function(){
		i++;
		if(i== imgsAttr.length){
			i=0;
		}
		imgs.src="img/"+imgsAttr[i]
		aa()
	}
	lfbtn.onclick=function(){
		
		if(i==0){
			i=imgsAttr.length;
		}
		i--;
		imgs.src="img/"+imgsAttr[i]
		aa()
	}
	for(var j = 0;j<imgsAttr.length;j++){
		list[j].index=j;
		list[j].onclick=function(){
			i= this.index
			imgs.src="img/"+imgsAttr[this.index]
			aa()
		}
		}
	function aa(){
		for(var x= 0;x<imgsAttr.length;x++){
			list[x].index=x;
		if(x!=i){
				list[x].className=''
			}else{
				list[x].className='donghua'
			}
			}
	}
	function bb(){
		i++;
		if(i== imgsAttr.length){
			i=0;
		}
		imgs.src="img/"+imgsAttr[i]
		aa()
	}
	setInterval(bb,4000)
	
}
