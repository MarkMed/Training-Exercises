document.getElementById("modal_content").style.display="none";

var GMale=document.getElementById("Nuser_GenM");
var GFemale=document.getElementById("Nuser_GenF");
GMale.value="Male";
GFemale.value="Female";

//Extract info from URL
function getUrlData(link){
	// Getting the string between '?' and '#'.
	var strings=link.match(/\?([^#]*)/i)[1];
	// Separate the data into an array.
	var ArrayData=strings.split('&');
	// Object to add the data
	var URLData={};
	// Separate data name and data value from pairs and add to object
	for(var i=0; i<ArrayData.length; i++) {
		var ArrayValues=ArrayData[i].split('=');
		URLData[ArrayValues[0]]=ArrayValues[1];
	}
	return URLData;//Return an object with the data
}
//Only active when the data appears in the url
var url=window.location.href;
var checkining=url.match(/\?([^#]*)/i);
if(checkining!==null){
	//Pop-up showing info
	document.getElementById("modal").setAttribute("class", "showing1");
	document.getElementById("modal_content").setAttribute("class", "showing11");
	document.getElementById("modal_content").style.display="flex";
	////////////////////////////////////////////////////////////////////////////
	var URLData=getUrlData(url);//Save da returned Object in a var
	var email=((URLData.Nuser_email).match("%40").input.split("%40"))[0]+"@"+((URLData.Nuser_email).match("%40").input.split("%40"))[1];//I am a hardcore guy :v
	var pass=URLData.Nuser_pass;
	var name=URLData.Nuser_name;
	var lastname=URLData.Nuser_Lname;
	var BirDate=((URLData.BirDate).split("-"))[2]+"/"+((URLData.BirDate).split("-"))[1]+"/"+((URLData.BirDate).split("-"))[0];;
	var Gen=URLData.Nuser_Gen;
	//email
	document.getElementById("email_value").innerHTML=email;
	//Account Pass
	document.getElementById("Nuser_pass_value").innerHTML=pass;
	//User Name
	document.getElementById("Nuser_name_value").innerHTML=name;
	//User Last Name
	document.getElementById("Nuser_Lname_value").innerHTML=lastname;
	//User BDate
	document.getElementById("BirDate_value").innerHTML=BirDate;
	//Genre
	document.getElementById("Nuser_Gen_value").innerHTML=Gen;
	////////////////////////////////////////////////////////////////////////////
	//Greetings with the typed name
	document.getElementById("greetings").innerHTML="Welcome "+name+"!"
}

/*Closing the viewer*/
document.getElementById("closer").addEventListener("click", function(){
	document.getElementById("modal").setAttribute("class", "showing0");
	document.getElementById("modal_content").setAttribute("class", "showing10");
	setTimeout(
		function(){			
			document.getElementById("modal_content").style.display="none";
		}
	, 1000);
});

//Fill the form once
function fillIt(){
	document.getElementById("Nuser_name").value="Iam";
	document.getElementById("Nuser_Lname").value="YourGOD";
	document.getElementById("BirDate").value="1927-01-01";
	document.getElementById("Nuser_GenM").checked=true;
	document.getElementById("Nuser_email").value="lordofgods@godmail.god";
	document.getElementById("Nuser_pass").value="GreatArchitect";
	document.getElementById("Nuser_Rpass").value="GreatArchitect";
}
