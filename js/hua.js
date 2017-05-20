var lista = document.getElementById("lista");
var list = lista.getElementsByTagName("li");
var smbx2 =document.getElementsByClassName('smbx2')[0];
var ullist =smbx2.getElementsByTagName('ul');

for(var i =0;i<list.length;i++){
	list[i].index = i;
	list[i].onmouseover=function(){
		i=this.index;
		for(var a =0;a<ullist.length;a++){
			ullist[a].index = a;
			if(a == i){
				ullist[a].style.display="block";
			}else{
				ullist[a].style.display="none";
			}
		}
	}
}
	


