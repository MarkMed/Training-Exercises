function CalcEdad(fechaNac){
	var Nacim=fechaNac;
	var day=Nacim.getDate();
	var month=Nacim.getMonth();
	var year=Nacim.getFullYear();
	var today=new Date();
	var todDay=today.getDate();
	var todMonth=today.getMonth();
	var todYear=today.getFullYear();
	var totEdad=todYear-year;
	if (month>todMonth){
		totEdad--;
		return totEdad;
	}
	else if((day+1)>todDay){
		totEdad--;
		return totEdad;		
	}
	else{
		return totEdad;
	}
}

/*function resetear() {
	var formulario=document.getElementById("alumno_form");
	var inputs=document.getElementById("div2");
	formulario.removeChild(inputs);
}*/

function agregarAlumno(){
	var fechaNac=new Date(document.getElementById("fnac").value);
	var Edad=CalcEdad(fechaNac);
	parseInt(Edad);
	var name=(document.getElementById("nombre").value);
	var email=(document.getElementById("email").value);
	var cuidad=(document.getElementById("ciudad").value);
	var tablet=document.getElementById("cuerpo");
	var fila=document.createElement("tr");
	tablet.append(fila);
	fila.innerHTML="<td>"+name+"</td>"+"<td>"+email+"</td>"+"<td>"+Edad+"</td>"+"<td>"+cuidad+"</td>";
	//resetear();
	document.getElementById("alumno_form").reset();
}
