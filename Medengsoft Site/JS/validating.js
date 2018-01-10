/*Save inputs*/
var Fname=document.getElementById('Nuser_name');
var Lname=document.getElementById('Nuser_Lname');
var GenM=document.getElementById('Nuser_GenM');
var GenF=document.getElementById('Nuser_GenF');
var BDate=document.getElementById('BirDate');
var email=document.getElementById('Nuser_email');
var password=document.getElementById('Nuser_pass');
var Rpassword=document.getElementById('Nuser_Rpass');
/*Save labels*/
var Fname_label=document.getElementById('Nuser_name_label');
var Lname_label=document.getElementById('Nuser_Lname_label');
var GenM_label=document.getElementById('Nuser_GenM_label');
var GenF_label=document.getElementById('Nuser_GenF_label');
var BDate_label=document.getElementById('BirDate_label');
var email_label=document.getElementById('Nuser_email_label');
var password_label=document.getElementById('Nuser_pass_label');
var Rpassword_label=document.getElementById('Nuser_Rpass_label');

/*Validating*/
//Name
function nameV(){
	if((Fname.value.length)<2){
		Fname.setAttribute("class", "input_error");
		Fname_label.style.color="#FF0E0E";
		Fname_label.innerHTML="You must type your real name. More of one character.";
	}
	else{
		Fname.setAttribute("class", "input_style");
		Fname_label.style.color="";
		Fname_label.innerHTML="User Name:";
	}
	sendIt();
}
Fname.onchange=nameV;
//Last Name
function LnameV(){
	if((Lname.value.length)<3){
		Lname.setAttribute("class", "input_error");
		Lname_label.style.color="#FF0E0E";
		Lname_label.innerHTML="You must type your real Last name. More of three character.";
	}
	else{
		Lname.setAttribute("class", "input_style");
		Lname_label.style.color="";
		Lname_label.innerHTML="User Last name:";
	}
	sendIt();
}
Lname.onchange=LnameV;
//Genre
function GenV(){
	sendIt();
}
GenM.onchange=GenV;
GenF.onchange=GenV;
//Birth date
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
function BDateV(){
	var birDate=AgeMath(new Date(BDate.value));
	if((birDate<=10)||(birDate>=90)){
		BDate.setAttribute("class", "input_error");
		BDate_label.style.color="#FF0E0E";
		BDate_label.innerHTML="Your age must be between 10 and 90 years old.";
	}
	else{
		BDate.setAttribute("class", "input_style");
		BDate_label.style.color="";
		BDate_label.innerHTML="Place your date of Birth:";
	}
	sendIt();
}
BDate.onchange=BDateV;
//email
function emailV(){
	var char=(email.value).split("@");
	if(char.length===1||char[0]===""||char[1]===""||char.length>2){
		email.setAttribute("class", "input_error");
		email_label.style.color="#FF0E0E";
		email_label.innerHTML='Type a valid email format.';
	}
	else{
		email.setAttribute("class", "input_style");
		email_label.style.color="";
		email_label.innerHTML="e-mail Account:";
	}
	sendIt();
}
email.onchange=emailV;
//Password
function passV(){	
	if((password.value)!==(Rpassword.value)){
		password.setAttribute("class", "input_error");
		Rpassword.setAttribute("class", "input_error");
		password_label.style.color="#FF0E0E";
		Rpassword_label.style.color="#FF0E0E";
		Rpassword_label.innerHTML="Both password are diferent.";
	}
	else{
		password.setAttribute("class", "input_style");
		Rpassword.setAttribute("class", "input_style");
		password_label.style.color="";
		Rpassword_label.style.color="";
		Rpassword_label.innerHTML="Confirm Pass:";
	}
	sendIt();
}
password.onchange=passV;
Rpassword.onchange=passV;

/*Activate the button*/
	//First disable
function noAllow(){
	var btn=document.getElementById("submeet");
	btn.setAttribute("disabled", true);
	btn.style.cursor="not-allowed";
}
noAllow();
	//Then check all data
function sendIt(){
	var BoolFname=(!(Fname.getAttribute("class")==="input_error"));
	var BoolLname=(!(Lname.getAttribute("class")==="input_error"));
	var BoolGen=(GenM.checked||GenF.checked)?(true):(false);
	var BoolBDate=(!(BDate.getAttribute("class")==="input_error"));
	var Boolemail=(!(email.getAttribute("class")==="input_error"));
	var Boolpassword=(!(password.getAttribute("class")==="input_error"));
	var BoolRpassword=(!(Rpassword.getAttribute("class")==="input_error"));
	if(BoolFname&&BoolLname&&BoolGen&&BoolBDate&&Boolemail&&Boolpassword&&BoolRpassword){
		var btn=document.getElementById("submeet");
		document.getElementById("form").removeChild(btn);
		btn=document.createElement("button");
		btn.setAttribute("id", "submeet");
		document.getElementById("form").appendChild(btn);
		btn.innerHTML="Sign In";
	}
	else{
		noAllow();
	}
}