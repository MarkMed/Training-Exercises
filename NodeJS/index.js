var list=require("./Require/data.json");
var printUser=function(){
	console.log("Printing List...");
	for(var i=0; i<list.length; i++){
		console.log(list[i]);
	}
}
setInterval(printUser, 5000);