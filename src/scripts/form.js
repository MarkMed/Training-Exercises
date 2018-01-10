function calcularEdad(fecha){ 
	var today = new Date();
	var edad = today.getFullYear() - fecha.getFullYear() - 1;
	if( today.getMonth() > fecha.getMonth()){
		edad++;
	}else if ( today.getMonth() === fecha.getMonth() &&  today.getDate() >= fecha.getDate()){
		edad++;
	}
   	return edad;
}
var Alumno = function(nombre, email, fnac, ciudad){
	this.nombre = nombre;
	this.email = email;
	this.fnac = new Date(fnac);
	this.fnac.setTime( this.fnac.getTime() + this.fnac.getTimezoneOffset()*60*1000 );
	this.ciudad = ciudad;
	this.edad = calcularEdad(this.fnac );
}
var agregarAlumno = function(){
	var nombre = document.getElementById('nombre').value;
	var email = document.getElementById('email').value; 
	var fnac = document.getElementById('fnac').value;
	var ciudadSelect = document.getElementById('ciudad');
	var ciudad = ciudadSelect.options[ciudadSelect.selectedIndex].value;
	var alumno = new Alumno(nombre, email, fnac, ciudad);
	Api.addAlumno(alumno);
	imprimirAlumnos();
	document.getElementById('nombre').value = '';
	document.getElementById('email').value = ''; 
	document.getElementById('fnac').value = '';
}