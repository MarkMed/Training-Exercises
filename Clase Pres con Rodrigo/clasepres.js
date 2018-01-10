//Defino la clase.
function alumno(name, lastname, age, id){
	this.name=name;
	this.lastname=lastname;
	this.age=age;
	this.id=id;
}
//Defino los objetos usando la clase.
var alumno1=new alumno("Marcos", "Medina", 18, 51465245);
var alumno2=new alumno("Melina", "Molina", 19, 57467245);
var alumno3=new alumno("Roberto", "Pereira", 22, 51475275);
var alumno4=new alumno("Maria", "Hernandez", 21, 45652452);
var alumno5=new alumno("Mario", "Perez", 25, 35467842);
//Defino lista y agrego obetos.
var listAlumno=new Array;
listAlumno.push(alumno1, alumno2, alumno3, alumno4, alumno5);
//Uso DOM para modificar
var body=document.getElementById('cuerpo');
for(var i=0; i<listAlumno.length; i++){
	var fila=document.createElement("tr");
	body.append(fila);
	var alum=listAlumno[i];
	fila.innerHTML="<td>"+(alum.name)+"</td>"+"<td>"+(alum.lastname)+"</td>"+"<td>"+(alum.id)+"</td>";
}