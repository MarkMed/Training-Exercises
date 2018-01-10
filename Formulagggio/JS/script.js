/*Class*/
function person(name, lastname, age, id, country, sx){
	this.name=name;
	this.lastname=lastname;
	this.age=age;
	this.id=id;
	this.country=country;
	this.sx=sx;
}

/*Empty List*/
var personList=[];

/*Some Intances as examples*/
var person1=new person("name1", "lastname1", "19", "n.nn.nnn-n1", "English", "Male");
var person2=new person("name2", "lastname2", "22", "n.nn.nnn-n2", "Germanian", "Female");
var person3=new person("name3", "lastname3", "18", "n.nn.nnn-n3", "Japanese", "Male");
var person4=new person("name4", "lastname4", "30", "n.nn.nnn-n4", "Spanish", "Female");
var person5=new person("name5", "lastname5", "26", "n.nn.nnn-n5", "Spanish", "Male");
personList.push(person1, person2, person3, person4, person5);

/*Math 4 age*/
function AgeMath(bdate){
	//Save the "typed" date
	var birth=bdate;
	//Get day, week, month
	var day=birth.getDate();
	var month=birth.getMonth();
	var year=birth.getFullYear();
	//Today date 2 coparate
	var today=new Date();
	//Get day, week, month
	var todDay=today.getDate();
	var todMonth=today.getMonth();
	var todYear=today.getFullYear();
	//Compare
	var totAge=todYear-year;
	if (month>todMonth){
		totAge--;
		return totAge;
	}
	else if((day+1)>todDay){
		totAge--;
		return totAge;		
	}
	else{
		return totAge;
	}
}

/*A "For" for show Obj in the table*/
//This add all Obj(s) from the array
function refreshing(){
	var body=document.getElementById('tbl_B');
	for(var i=0; i<personList.length; i++){
		var fila=document.createElement("tr");
		fila.setAttribute("title", ((personList[i].name)+" "+(personList[i].lastname)));//To show the complete name of the Obj when do hover
		fila.setAttribute("name", i);//To be used in the Obj Viewer (Line 207)
		fila.addEventListener("click", showObj);//Line 202
		body.append(fila);
		fila.innerHTML=
			"<td>"+(personList[i].id)+"</td>"+
			"<td>"+(personList[i].name)+"</td>"+
			"<td>"+(personList[i].age)+"</td>"+
			"<td>"+(personList[i].country)+"</td>";
	}
}
refreshing();//Line 52

//Function 4 function
//"Removing" (overwriting the function) of errors messages
function removing(id, id2){	
	document.getElementById(id).style.opacity=0;
	document.getElementById(id).addEventListener("mouseover", function duchando(){
		document.getElementById("error_explan").style.display="none";
		document.getElementById(id2).style.opacity=0;
	});
}

//Getting Out the previous errors
//This will remove all errors mesages
function getOutErrors(){
	document.getElementById("error_notif").style.display="none";
	//Name
	removing("error_name", "error_name_explan");//Line 71
	//LastName
	removing("error_lastname", "error_lastname_explan");//Line 71
	//Age
	removing("error_Bdate", "error_Bdate_explan");//Line 71
	//Id Number
	removing("error_NId", "error_NId_explan");//Line 71
	//Country
	removing("error_country", "error_country_explan");//Line 71
	//Gender
	removing("error_sx", "error_sx_explan");//Line 71
}

/*Reset all Form fields*/
/*rest.addEventListener("click", function(){
	document.getElementById("formu").reset();
});*/
function reseting(){
	getOutErrors();//Line 80
	document.getElementById("formu").reset();
	wizard();//Line 194
	notif_exclam.setAttribute("class", "NTrigerred");
}

/*Saving buttons*/
//Two ways 2 "save"
var vender=document.getElementById('bender');//Saving in a var
document.getElementById('reseter').onclick=reseting;//Line 100 //Setting a event

/*Add prson*/
//This is for add a new Obj to the array and show it in the table
vender.addEventListener("click", function(){
	getOutErrors();//Line 80
	/*Saving Data*/
	var Vname=document.getElementById("name").value;
	var Vlastname=document.getElementById("surname").value;
	var VBdate=new Date(document.getElementById("Bdate").value);
	var Age=AgeMath(VBdate);
	var AgeS=(AgeMath(VBdate)).toString();
	var Id=(document.getElementById("CI").value).split("");
	var VNId=Id[0]+"."+Id[1]+Id[2]+"."+Id[3]+Id[4]+Id[5]+"-"+Id[6]+Id[7];
	var Vcountry=document.getElementById("country").value;
	var Vsx;
	if(document.getElementById("SX_FM").checked){
		Vsx="Female";
	}
	else if(document.getElementById("SX_M").checked){
		Vsx="Male";
	}
	else{
		Vsx="";
	}
	//Validating
	//Check n think fixes and upgrades
	if(Vname.length<=1){
		changing("error_name", "error_name_explan");
		triggering_Bnotif();//Line 224
	}
	if(Vlastname.length<=2){
		changing("error_lastname", "error_lastname_explan");
		triggering_Bnotif();//Line 224
	}
	if((Age<=10)||(AgeS==="NaN")||(Age>100)){
		changing("error_Bdate", "error_Bdate_explan");
		triggering_Bnotif();//Line 224
	}
	if(!(Id.length===8)){
		changing("error_NId", "error_NId_explan");
		triggering_Bnotif();//Line 224
	}
	if(Vcountry===""){
		changing("error_country", "error_country_explan");
		triggering_Bnotif();//Line 224
	}
	if(Vsx===""){
		changing("error_sx", "error_sx_explan");
		triggering_Bnotif();//Line 224
	}
	//An "else" works with the last "if", if the last "if" condition is false the "else" will run. In this case it will add things without data and a lot of errors will apear in the form.
	if((!(Vname.length<=1))&&(!(Vlastname.length<=2))&&(!((Age<=10)||(AgeS==="NaN")||(Age>100)))&&(!(!(Id.length===8)))&&(!(Vcountry===""))&&(!(Vsx===""))){
		/*var personX=new person(Vname, Vlastname, Age, VNId, Vcountry, Vsx);
		personList.push(personX);
		document.getElementById('tbl_B').innerHTML="";
		refreshing();//Line 52
		reseting();//Line 100
		triggering_Gnotif();//Line 229
		CSGo=0;
		document.getElementById("notification_area").addEventListener("mouseout", changeCSGo);//Line 246*/
		disableBtn();
	}
});

/*New function*/
//This will disable the button.
function disableBtn(){
	vender.setAttribute("disable", true);
	vender.style.cursor="not allowed";
	vender.setAttribute("class", "disabled");
}

/*Changing style n showing*/
//This shows the errors messages, add events to that error messages, and allows show the explanation of the error and how to fix it
function changing(id1, id2){
	document.getElementById("error_notif").style.display="flex";
	document.getElementById(id1).style.opacity=1;
	document.getElementById(id1).addEventListener("mouseover", function duchando(){
		document.getElementById("error_explan").style.display="flex";
		document.getElementById(id2).style.opacity=1;
	});
	document.getElementById(id1).addEventListener("click", function Nduchado(){
		document.getElementById(id1).style.opacity=0;
		document.getElementById(id2).style.opacity=0;
		removing(id1, id2);//Line 71
		wizard();//Line 194
	});
	document.getElementById(id1).addEventListener("mouseout", function Nducha2(){
		document.getElementById("error_explan").style.display="none";
		document.getElementById(id2).style.opacity=0;
	});
}

/*Disappearing errors*/
//Once all error messages are cliacked, this will hide the error message container, update the noticiations, and change the notification Xclamation style
function wizard(){
	if((document.getElementById("error_name").style.opacity==0)&&(document.getElementById("error_lastname").style.opacity==0)&&(document.getElementById("error_Bdate").style.opacity==0)&&(document.getElementById("error_NId").style.opacity==0)&&(document.getElementById("error_country").style.opacity==0)&&(document.getElementById("error_sx").style.opacity==0)){
		document.getElementById("error_notif").style.display="none";
		document.getElementById("paragraph").innerHTML="<i>"+"There is not any notification"+"</i>";
		notif_exclam.setAttribute("class", "NTrigerred");
	}
}

/*Viewing the Obj*/
//I do not remember how to identify where a functio is called, what element is callig the function and what objetc is loaded in that element
//And, I have not internet, I can not search :c I do what I know
function showObj(){
	var listaObj_Posit=parseInt(this.getAttribute("name"));//Taking and parsing the name of element in line 58
	var Obj2Show=personList[listaObj_Posit];//Object position in the array using the parsed name of element
	//Showing and assigning the info
	document.getElementById("Obj_viewer").setAttribute("class", "showing");
	document.getElementById("value_NId").innerText=Obj2Show.id;
	document.getElementById("value_name").innerText=Obj2Show.name;
	document.getElementById("value_lastname").innerText=Obj2Show.lastname;
	document.getElementById("value_Age").innerText=Obj2Show.age;
	document.getElementById("value_sx").innerText=Obj2Show.sx;
	document.getElementById("value_country").innerText=Obj2Show.country;
}

/*Closing the viewer*/
document.getElementById("closer").addEventListener("click", function(){
	document.getElementById("Obj_viewer").setAttribute("class", "Nshowing");
});

/*Notification*/
var notif_exclam=document.getElementById("notification_exclam");
notif_exclam.onmouseover=function(){//The exlamation without effects to show that there is not a new notification
	notif_exclam.setAttribute("class", "NTrigerred");
};
function triggering_Bnotif(){//The exlamation with red effects to show that there is a negative notification
	notif_exclam.setAttribute("class", "TrigerredBad");
	document.getElementById("notification_area").removeEventListener("mouseout", changeCSGo);//Line 236
	document.getElementById("paragraph").innerHTML="There is some errors. For know how to fix it, stand over the error message."+"<br/>"+"You can close a error message just clicking it.";
}
function triggering_Gnotif(){//The exlamation with red effects to show that there is a good notification
	notif_exclam.setAttribute("class", "TrigerredGood");
	document.getElementById("notification_area").removeEventListener("mouseout", changeCSGo);//Line 236
	document.getElementById("paragraph").innerHTML="Registered!"+"<br/>"+"Start to enjoy our services. Visit our "+"Store!";
}

/*Changing the notifications*/
//This send diferents notifcations setTimeout for make more realistic.
var CSGo=0;
setTimeout(
	function(){
		notif_exclam.setAttribute("class", "TrigerredGood");}
, 1000);
document.getElementById("paragraph").innerHTML="This is the notification area. Here you can read the events messages."+"<br/>"+"Stay sharp!";
function notif2(){
	setTimeout(
		function(){document.getElementById("paragraph").innerHTML="Click in a row of the table and you will see the complete data.";
			notif_exclam.setAttribute("class", "TrigerredGood");}
	, 1000);
}
function notifNoNotif(){
	setTimeout(
		function(){document.getElementById("paragraph").innerHTML="<i>"+"There is not any notification"+"</i>";}
	, 1000);
}
function changeCSGo(){
	if(CSGo===1){
		notif2();//Line 246
	}
	else{
		notifNoNotif();//Line 252
	}
	CSGo++;
}
document.getElementById("notification_area").addEventListener("mouseout", changeCSGo);//Line 236

/*Skiping*/
//Use the console. Call the function to skip the validation and register at once.
//This is for try the functions that executes after validation
function Registrardeuna(){
	var Vname="I am";
	var Vlastname="your God";
	var Age="Unkown";
	var VNId="Unkown";
	var Vcountry="Everywhere";
	var Vsx="All";
	var personX=new person(Vname, Vlastname, Age, VNId, Vcountry, Vsx);
	personList.push(personX);
	document.getElementById('tbl_B').innerHTML="";
	refreshing();//Line 52
	reseting();//Line 100
	triggering_Gnotif();//Line 229
	CSGo=0;
	document.getElementById("notification_area").addEventListener("mouseout", changeCSGo);//Line 246
}