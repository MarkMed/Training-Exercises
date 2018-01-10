/*Saving LMNts :v*/
var div_crear=document.getElementById('agregar');
var div_mostrar=document.getElementById('showerer');
var div_editar=document.getElementById('editar');
var regis_btn=document.getElementById('crear');
var overW_btn=document.getElementById('crear2');

/*View Changer*/
function creating(){
	div_mostrar.setAttribute("class", "no_mostrando");
	div_editar.setAttribute("class", "no_mostrando");
	div_crear.setAttribute("class", "mostrando");
}
function shower(){
	div_mostrar.setAttribute("class", "mostrando");
	div_editar.setAttribute("class", "no_mostrando");
	div_crear.setAttribute("class", "no_mostrando");
}
function editing(){
	div_mostrar.setAttribute("class", "no_mostrando");
	div_editar.setAttribute("class", "mostrando");
	div_crear.setAttribute("class", "no_mostrando");
}

/*Inmob Object Class*/
function InmObject(id, nombre, direction, dorm_amount, tipo, precio, precio_tipo, email, aviable_day, aviable_month, aviable_year, cont_duration){
	this.id=id;
	this.nombre=nombre;
	this.direction=direction;
	this.dorm_amount=dorm_amount;
	this.tipo=tipo;
	this.precio=precio;
	this.precio_tipo=precio_tipo;
	this.email=email;
	this.aviable_day=aviable_day;
	this.aviable_month=aviable_month;
	this.aviable_year=aviable_year;
	this.cont_duration=cont_duration;
}

/*Inmob Array*/
var inmob_array=[];

/*Some instances*/
function gettingInmuebles(){
	var xhr=new XMLHttpRequest();
	var link="http://localhost:3080/inmuebles";
	xhr.open('GET', link, true);
	//xhr.onload=console.log;
	xhr.send(null);
}
xhr.send(null);
	//Una vez respondido llenar el array con lo que responda
	//showLista();
}

/*A "For" for show Obj in the table*/
//This add all Obj(s) from the array
function showLista(){
	var Nlista=document.getElementById("lista");
	Nlista.innerHTML="";
	for(var i=0; i<inmob_array.length; i++){
		var list_LMNts=document.createElement("li");
		list_LMNts//To be used in the Obj Viewer n editor
		//list_LMNts.addEventListener("click", showObj);
		list_LMNts.setAttribute("name", "listInstance");
		Nlista.appendChild(list_LMNts);//Add the Li 2 the Ul
		//H3
		var head3=document.createElement("h3");
		head3.innerHTML=inmob_array[i].nombre;
		head3.setAttribute("class", "inmob_title");
		list_LMNts.appendChild(head3);
		//P inmobrooms
		var parag1=document.createElement("p");
		parag1.innerHTML=inmob_array[i].dorm_amount+" doritorios";
		parag1.setAttribute("class", "inmob_rooms");
		list_LMNts.appendChild(parag1);
		//P inmob_contraT
		var parag2=document.createElement("p");
		parag2.innerHTML="Se "+inmob_array[i].tipo+" por "+inmob_array[i].precio+" "+inmob_array[i].precio_tipo;
		parag2.setAttribute("class", "inmob_contraT");
		list_LMNts.appendChild(parag2);
		//Adding "Buttons"
		var btnEditing=document.createElement("a");
		btnEditing.innerHTML="Editar";
		btnEditing.setAttribute("class", "inmob_buttons");
		btnEditing.setAttribute("name", i);
		btnEditing.addEventListener("click", editing);
		btnEditing.addEventListener("click", editing2);
		//////////////////////////////////////////////////
		var btnErasing=document.createElement("a");
		btnErasing.innerHTML="Borrar";
		btnErasing.setAttribute("class", "inmob_buttons");
		btnErasing.setAttribute("name", i);
		btnErasing.addEventListener("click", erasing);
		/////////////////////////////////////////////////
		list_LMNts.appendChild(btnEditing);
		list_LMNts.appendChild(btnErasing);

	}
}
//showLista();

/*Creating*/
function creando(){
	var nombre1=document.getElementById("nombre").value;
	var direction1=document.getElementById("direc").value;
	var dorm_amount1=document.getElementById("cant_dorm").value;
	var tipo1;
	if(document.getElementById("alquiler_form").checked){
		tipo1="alquila";
	}
	else if(document.getElementById("venta_form").checked){
		tipo1="vende";
	}
	else{
		tipo1="";
	}
	var precio1=document.getElementById("precio_form").value;
	var precio_tipo1=document.getElementById("money_type").value;
	var email1=document.getElementById("mail_form").value;
	var aviable_day1=document.getElementById("dia_form").value;
	var aviable_month1=document.getElementById("mes_form").value;
	var aviable_year1=document.getElementById("ano_form").value;
	var cont_duration1=document.getElementById("durac_conter").value;
	var Inmobil=new InmObject(nombre1, direction1, dorm_amount1, tipo1, precio1, precio_tipo1, email1, aviable_day1, aviable_month1, aviable_year1, cont_duration1);
	inmob_array.push(Inmobil);
	showLista();
	shower();
	document.getElementById('form').reset();
}
regis_btn.addEventListener("click", creando);

//Varianble global con objeto cargado para ser usado en la funcion que muestra los datos usados y para sobreescribir
var listObj_Posit;

function editing2(){
	listObj_Posit=inmob_array[parseInt(this.getAttribute("name"))];
	//Showing previous data	
	document.getElementById("nombre2").value=listObj_Posit.nombre;
	document.getElementById("direc2").value=listObj_Posit.direction;
	document.getElementById("cant_dorm2").value=listObj_Posit.dorm_amount;
	listObj_Posit.tipo
	document.getElementById("NoShowRB_form2").setAttribute("checked", true);
	document.getElementById("precio_form2").value=listObj_Posit.precio;
	document.getElementById("money_type2").value=listObj_Posit.precio_tipo;
	document.getElementById("mail_form2").value=listObj_Posit.email;
	document.getElementById("dia_form2").value=listObj_Posit.aviable_day;
	document.getElementById("mes_form2").value=listObj_Posit.aviable_month;
	document.getElementById("ano_form2").value=listObj_Posit.aviable_year;
	document.getElementById("durac_conter2").value=listObj_Posit.cont_duration;
}

function overwriting(){
	//Getting new data
	var nombre2=document.getElementById("nombre2").value;
	var direction2=document.getElementById("direc2").value;
	var dorm_amount2=document.getElementById("cant_dorm2").value;
	var tipo2;
	if(document.getElementById("alquiler_form2").checked){
		tipo2="alquila";
	}
	else if(document.getElementById("venta_form2").checked){
		tipo2="vende";
	}
	else{
		tipo2="";
	}
	var precio2=document.getElementById("precio_form2").value;
	var precio_tipo2=document.getElementById("money_type2").value;
	var email2=document.getElementById("mail_form2").value;
	var aviable_day2=document.getElementById("dia_form2").value;
	var aviable_month2=document.getElementById("mes_form2").value;
	var aviable_year2=document.getElementById("ano_form2").value;
	var cont_duration2=document.getElementById("durac_conter2").value;
	//Overwriting data
	listObj_Posit.nombre=nombre2;
	listObj_Posit.direction=direction2;
	listObj_Posit.dorm_amount=dorm_amount2;
	listObj_Posit.tipo=tipo2;
	listObj_Posit.precio_tipo=precio_tipo2;
	listObj_Posit.precio=precio2;
	listObj_Posit.email=email2;
	listObj_Posit.aviable_day=aviable_day2;
	listObj_Posit.aviable_month=aviable_month2;
	listObj_Posit.aviable_year=aviable_year2;
	listObj_Posit.cont_duration=cont_duration2;
	showLista();
	shower();
	document.getElementById('form2').reset();
}
overW_btn.addEventListener("click", overwriting);

function erasing(){
	var CSGo=parseInt(this.getAttribute("name"));
	var lists=document.getElementsByName("listInstance");
	var UL=document.getElementById("lista");
	UL.removeChild(lists[CSGo]);
	inmob_array.splice(CSGo, 1);
	showLista();
}