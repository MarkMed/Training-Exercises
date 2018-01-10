var imprimirAlumnos = function(data){
  var body = document.getElementById("body-content");
  body.innerHTML = ''; 
  for (var i = 0; i< data.length; i++) {
  	var alumno = data[i];
  	var hilera=document.createElement("tr");
    hilera.title = "Alumno: " + alumno.nombre;
   	var celdaNombre = document.createElement("td");
   	var celdaEdad = document.createElement("td");
   	var celdaCi = document.createElement("td");
   	var nombre =document.createTextNode(alumno.nombre);
   	var edad =document.createTextNode(alumno.edad);
   	var ci =document.createTextNode(alumno.id);
   	celdaNombre.appendChild(nombre);
   	celdaEdad.appendChild(edad);
   	celdaCi.appendChild(ci);
   	hilera.appendChild(celdaNombre);
   	hilera.appendChild(celdaEdad);
   	hilera.appendChild(celdaCi);
   	body.appendChild(hilera);
   };
 }