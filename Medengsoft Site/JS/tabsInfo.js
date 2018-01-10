//Saving LMNts
var zelda=document.getElementsByName("zelda");
var tabs=document.getElementsByClassName("div_info");

//Adding events to zeldas
for(var i=0; i<zelda.length; i++){
	zelda[i].addEventListener("click", changing);
}

//Function of tabs
function changing(){
	var CSGo=parseInt(this.getAttribute("counter"));
	//Hidde all
	for(var i=0; i<tabs.length; i++){
		tabs[i].setAttribute("class", "div_info showing0");
	}
	//Show especified
	tabs[CSGo].setAttribute("class", "div_info showing1");
}
//This is to demostrate

//Only active when the id appears in the url
var url=window.location.href;
var Extracted_Id=url.split("#")[1];
if(Extracted_Id!==undefined){
	for(var i=0; i<tabs.length; i++){
		tabs[i].setAttribute("class", "div_info showing0");
	}
	//Show especified
	tabs[Extracted_Id].setAttribute("class", "div_info showing1");
}
//With only this the page can run. Just setting href attribute to the <a> and everyting shall work