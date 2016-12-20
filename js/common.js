;(function(){
		var swiper = new Swiper('.swiper-container', { 
		    paginationClickable: true
		});
		var aProItem = getByClass(document,'proItem');
		var aSlide = getByClass(document,'swiper-slide');
		var oProBox2 = document.getElementById('proBox2');
		for(var i = 0;i < aProItem.length;i++){
			aProItem[i].index = i;
			aProItem[i].onclick = function(){  
				var regx = /swiper-pagination-bullet-active/;
				for(var i = 0;i < aProItem.length;i++){
					aProItem[i].className = aProItem[i].className.replace(regx,'');
				} 
		                	if(this.className.search(regx)==-1){
		                    		this.className += '	swiper-pagination-bullet-active';
		                	}  
		                	oProBox2.setAttribute('style','transition-duration: 1000ms; transform: translate3d(-'+this.index*document.documentElement.clientWidth+'px, 0px, 0px);');
			}
		}
		document.addEventListener("touchend",function(){
			
			var left = oProBox2.getAttribute('style').split('(')[1].match(/\d+/)[0];
			var t = left/document.documentElement.clientWidth;
			 
			var regx = /swiper-pagination-bullet-active/;
			for(var i = 0;i < aProItem.length;i++){
				aProItem[i].className = aProItem[i].className.replace(regx,'');
			} 
	                	if(aProItem[t].className.search(regx)==-1){
	                    		aProItem[t].className += '	swiper-pagination-bullet-active';
	                	}  

		}, false);  
})();
;(function(){
	document.documentElement.style.fontSize 
		= document.documentElement.clientWidth/3.75 + 'px';
	window.onresize=function(){
		document.documentElement.style.fontSize 
		= document.documentElement.clientWidth/3.75 + 'px';
	}
})();
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var re = new RegExp('\\b'+sClass+'\\b');
		var aResult = [];
		var aEle = oParent.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
}
function addClass(obj,sClass){
	var regx = new RegExp('\\b'+sClass+'\\b');
	var regx2 = /^\s|$\s/;
	if(obj.className.search(regx) != -1){
		obj.className += ' '+sClass;
		obj.className = obj.className.replace(regx2,'');
	}

}
;(function () {
	var kDiv=document.getElementById('nav');
	var kLi=kDiv.getElementsByTagName('ul')[0];
	var kH=kDiv.children[1];
	var kOne=document.getElementById('last_one');
	var kTwo=document.getElementById('last_two');
	var ki=document.getElementById('last_ii');
	var oAfirst=document.getElementById('last_a');
	var oA=document.getElementById('last_aa');
	var oAA=document.getElementById('last_aaa');

	kLi.onclick= function () {
		kOne.style.display='block';
		kTwo.style.display='block';
		kLi.style.opacity=0;
		kH.style.opacity=0;
	};
	ki.onclick= function () {
		kOne.style.display='none';
		kTwo.style.display='none';
		kLi.style.opacity=1;
		kH.style.opacity=1;
	};
	oAA.onclick= function () {
		kOne.style.display='none';
		kTwo.style.display='none';
		kLi.style.opacity=1;
		kH.style.opacity=1;
		window.open('../index.html',"_self");

	};
	oAfirst.onclick= function () {
		kOne.style.display='none';
		kTwo.style.display='none';
		kLi.style.opacity=1;
		kH.style.opacity=1;
		window.open('../index.html',"_self");

	};
	oA.onclick= function () {
		window.open('product.html',"_self")
	}
})();