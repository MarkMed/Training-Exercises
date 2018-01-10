/*User actions*/
//To show what circle is turned on
var imgSliderCircles=document.getElementsByName('spanSelector');
function selecting(){
	for(var i=0; i<imgSliderCircles.length; i++){
		imgSliderCircles[i].setAttribute("class", "Nselected");
	}
	this.setAttribute("class", "selected");
}
//To show change the post (do the slider fx)
function changing(){
	var CSGo=parseInt(this.getAttribute("counter"));
	var container=document.getElementById('LMNts_container');
	container.setAttribute("class", "Nstuffs LMNt"+CSGo);
	var counter=0;
	function running(){};
}
//Adding functions to the circles
for(var i=0; i<imgSliderCircles.length; i++){
	imgSliderCircles[i].addEventListener("click", selecting);
	imgSliderCircles[i].addEventListener("click", changing);
}
/*Gambit(?*/
/*var counter=0;
function running(){
    for(var i=0; i<imgSliderCircles.length; i++){
		imgSliderCircles[i].setAttribute("class", "Nselected");
	}
    counter++;
    if (counter>imgSliderCircles.length){
    	counter=1;
    } 
    imgSliderCircles[counter-1].setAttribute("class", "selected");
    var container=document.getElementById('LMNts_container');
	container.setAttribute("class", "Nstuffs LMNt"+(counter-1));
	setTimeout(running, 8000);
} //Thx W3C School :D*/
