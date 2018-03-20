var slideItem = 0;
window.onload = function(){
	setInterval(mudarSlide, 5000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for (var i=0; i < objs.length; i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function mudarSlide(){
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	if (slideItem >= 3){
		slideItem = 0;
	}else{
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function clickSlide(pos){
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
