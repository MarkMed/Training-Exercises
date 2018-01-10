//Warning
alert("This page is not responsive. Just a JS DOM CSS practice.")

//Save ids in vars
var body=document.getElementById("id_body");
var nav=document.getElementById("id_nav");
var main=document.getElementById("id_main");
var section=document.getElementById("id_section");
var aside=document.getElementById("id_aside");
var footer=document.getElementById("id_footer");

var opt1=document.getElementById("color_option_1");
var opt2=document.getElementById("color_option_2");
var opt3=document.getElementById("color_option_3");
var opt4=document.getElementById("color_option_4");


//Change da Background and letters colors
document.getElementById("slt_txt_color").onchange=change_color;
function change_color(){
	//default_color();
	if(document.getElementById("slt_txt_color").value==="1"){
		body.style.color="#C00000";
		body.style.background="#FE5858";
		document.getElementById("slt_txt_color").style.background="#FE5858";
		document.getElementById("slt_txt_color").style.color="#C00000";
	}
	else if(document.getElementById("slt_txt_color").value==="2"){
		body.style.color="#0101A0";
		body.style.background="#3657FF";
		document.getElementById("slt_txt_color").style.background="#3657FF";
		document.getElementById("slt_txt_color").style.color="#0101A0";
	}
	else if(document.getElementById("slt_txt_color").value==="3"){
		body.style.color="#017A01";
		body.style.background="#44FD44";
		document.getElementById("slt_txt_color").style.background="#44FD44";
		document.getElementById("slt_txt_color").style.color="#017A01";
	}
	else if(document.getElementById("slt_txt_color").value==="4"){
		body.style.color="#CAB900";
		body.style.background="#FEFC58";
		document.getElementById("slt_txt_color").style.background="#FEFC58";
		document.getElementById("slt_txt_color").style.color="#CAB900";
	}
	else if(document.getElementById("slt_txt_color").value==="5"){
		body.style.color="#9521DE";
		body.style.background="#430292";
		document.getElementById("slt_txt_color").style.background="#430292";
		document.getElementById("slt_txt_color").style.color="#9521DE";
	}
	else if(document.getElementById("slt_txt_color").value==="6"){
		body.style.color="#816F44";
		body.style.background="#55451E";
		document.getElementById("slt_txt_color").style.background="#55451E";
		document.getElementById("slt_txt_color").style.color="#816F44";
	}
	else if(document.getElementById("slt_txt_color").value==="7"){
		body.style.color="#FFFFFF";
		body.style.background="#EEEEEE";
		nav.style.background="#F3F3F3";
		section.style.background="#DEDDDD";
		aside.style.background="#DEDDDD";
		document.getElementById("slt_txt_color").style.background="#EEEEEE";
		document.getElementById("slt_txt_color").style.color="#FFFFFF";
	}
	else{
		body.style.color="#374F6C";
		body.style.background="#AFAFAF";
		document.getElementById("slt_txt_color").style.background="#FFFFFF";
		document.getElementById("slt_txt_color").style.color="#000000";
	}
}
//Change all document theme
opt1.onclick=orokin_color;
function orokin_color(){
	footer.style.background="#EFEEDA";
	footer.style.border="3px solid #FFB90B";
	body.style.background="#605D54";
	body.style.color="#0B54BB";
	nav.style.background="#EFEEDA";
	nav.style.border="3px solid #FFB90B";
	nav.style.width="99.55%";
	main.style.background="#EFEEDA";
	main.style.border="3px solid #FFB90B";
	section.style.background="#E5E4DA";
	section.style.border="2px solid #FFB90B";
	aside.style.background="#E5E4DA";
	aside.style.border="2px solid #FFB90B";
}
opt2.onclick=w3c_color;
function w3c_color(){
	footer.style.background="#ffffff";
	footer.style.border="1px solid #D0D0D0";
	body.style.background="#ffffff";
	body.style.color="#000000";
	nav.style.background="#4caf50";
	nav.style.border="3px solid #4caf50";
	main.style.background="#f1f1f1";
	main.style.border="none";
	section.style.background="#ffffff";
	section.style.border="none";
	aside.style.background="#ffffff";
	aside.style.border="none";
}
opt3.onclick=wiki_color;
function wiki_color(){
	footer.style.background="#ffffff";
	footer.style.border="2px solid #a2a9b1";
	body.style.background="#f6f6f6";
	body.style.color="#000000";
	nav.style.background="#ffffff";
	nav.style.border="2px solid #a2a9b1";
	main.style.background="#abd2d0";
	main.style.border="2px solid #a2a9b1";
	section.style.background="#f8f9fa";
	section.style.border="2px solid #a2a9b1";
	aside.style.background="#f8f9fa";
	aside.style.border="2px solid #a2a9b1";
}
opt4.onclick=default_color;
function default_color(){
	footer.style.background="#C1C0C0";
	footer.style.border="2px solid #0011EE";
	body.style.background="#AFAFAF";
	body.style.color="#374F6C";
	nav.style.background="#C1C0C0";
	nav.style.width="99.7%";
	nav.style.border="2px solid #0011EE";
	main.style.background="#C1C0C0";
	main.style.border="2px solid #0011EE";
	section.style.background="#B9B8B8";
	section.style.border="none";
	aside.style.background="#B9B8B8";
	aside.style.border="none";
}