var minImgs=document.getElementsByName('minImg');
var bigImgs=document.getElementsByName('bigImg');
for(var i=0; i<bigImgs.length; i++){
	bigImgs[i].style.display="none";
	bigImgs[i].setAttribute("class", "showing0");
}
bigImgs[0].style.display="block";
bigImgs[0].setAttribute("class", "showing1")
function changeIt(){
	for(var i=0; i<bigImgs.length; i++){
		bigImgs[i].setAttribute("class", "showing0");
	}
	var CSGo=this.getAttribute("counter");
	setTimeout(
		function(){
			for(var i=0; i<bigImgs.length; i++){
				bigImgs[i].style.display="none";
			}
			bigImgs[CSGo].style.display="block";
			setTimeout(
				function(){
					bigImgs[CSGo].setAttribute("class", "showing1");
				}
			, 500);
		}
	, 1000);
}
for(var i=0; i<minImgs.length; i++){
	minImgs[i].addEventListener("click", changeIt);
}