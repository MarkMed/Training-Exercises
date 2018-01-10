var campo1;
var campo2;
var myArray=[];
function adding(){
	campo1=document.getElementById("campo1").value;
	campo2=document.getElementById("campo2").value;
	if((campo1==="")&&(campo2==="")){
		alert("Ingrese datos en al menos un campo");
	}
	else if((campo1!=="")&&(campo2==="")){
		myArray.push(campo1);
	}
	else if((campo1==="")&&(campo2!=="")){
		myArray.push(campo2);
	}
	else{
		myArray.push(campo1, campo2);
	}
	document.getElementById("formul").reset();
}
function vacio(){
	myArray=[];
	document.getElementById("parrafo").innerHTML="";
}
function ducha(){
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2;
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2+ "<br/>"+"La suma da: "+(parseInt(campo1)+parseInt(campo2));
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2+ "<br/>"+"El modulo es: "+(parseInt(campo1)%parseInt(campo2));
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2 + "<br/>"+("Los campos "+((parseInt(campo1)==parseInt(campo2))?"son iguales.":"son diferentes."));
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2 + "<br/>"+((parseInt(campo1)==parseInt(campo2))?"Ambos campos son iguales.":((parseInt(campo1)>parseInt(campo2))?"El campo con mayor numero es el Campo 1.":"El campo con mayor numero es el Campo 2."));
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2 + "<br/>"+((parseInt(campo1)==parseInt(campo2))?"Ambos campos son iguales.":((parseInt(campo1)>parseInt(campo2))?"El campo con menor numero es el Campo 2.":"El campo con menor numero es el Campo 1."));
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2 + "<br/>"+((((parseInt(campo1)%2)==0)&&((parseInt(campo2)%2)==0))?"Entre ambos si hay numeros pares.":"Entre ambos no hay numeros pares.");
	//var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2 + "<br/>"+((parseInt(campo2)>numero)?alert("Campo2 es mayor a numero!."):"");
	/*var dias=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
	var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2 + "<br/>"+((((parseInt(campo1)<=7)&&(parseInt(campo1)>=1))&&((parseInt(campo2)<=7)&&(parseInt(campo2)>=1)))?("Campo 1 tiene el dia: "+dias[(parseInt(campo1)-1)]+"<br/>"+"Campo 2 tiene el dia: "+dias[(parseInt(campo2)-1)]):("Debes ingresar numeros de la semana (del 1 al 7)!"));*/
	/*var switcher1;
	var switcher2;
	switch(parseInt(campo1)){
		case 0:
			switcher1="*no hay terminacion para el 0";
			break;
		case 1:
			switcher1="Met-".toUpperCase();
			break;
		case 2:
			switcher1="Et-".toUpperCase();
			break;
		case 3:
			switcher1="Prop-".toUpperCase();
			break;
		case 4:
			switcher1="But-".toUpperCase();
			break;
		case 5:
			switcher1="Pent-".toUpperCase();
			break;
		case 6:
			switcher1="Hex-".toUpperCase();
			break;
		case 7:
			switcher1="Hept-".toUpperCase();
			break;
		case 8:
			switcher1="Oct-".toUpperCase();
			break;
		case 9:
			switcher1="Non-".toUpperCase();
			break;
		case 10:
			switcher1="Dec-".toUpperCase();
			break;
		default:
			switcher1="*es un numero elevado para tu nivel de noob xD";
			break;
	}
	switch(parseInt(campo2)){
		case 0:
			switcher2="*no hay terminacion para el 0";
			break;
		case 1:
			switcher2="Met-".toUpperCase();
			break;
		case 2:
			switcher2="Et-".toUpperCase();
			break;
		case 3:
			switcher2="Prop-".toUpperCase();
			break;
		case 4:
			switcher2="But-".toUpperCase();
			break;
		case 5:
			switcher2="Pent-".toUpperCase();
			break;
		case 6:
			switcher2="Hex-".toUpperCase();
			break;
		case 7:
			switcher2="Hept-".toUpperCase();
			break;
		case 8:
			switcher2="Oct-".toUpperCase();
			break;
		case 9:
			switcher2="Non-".toUpperCase();
			break;
		case 10:
			switcher2="Dec-".toUpperCase();
			break;
		default:
			switcher2="*es un numero elevado para tu nivel de noob xD";
			break;
	}
	var mensaje = "Campo 1 con valor: " + campo1 + "<br/>"+"Campo 2 con valor: " + campo2 + "<br/>"+"A esa cant. de C se le adjudica la terminnacion: "+switcher1+"<br/>"+"A esa cant. de C se le adjudica la terminnacion: "+switcher2;*/
	/*alert("Adios mundo cruel :´v")
	var nombre=prompt("Ingrese su nombre kawaii UwUr");
	var mensaje="Hola "+nombre+"."+"<br/>"+"Como estas? :3";*/
	/*function sumar(value1, value2){
		return value1+value2;
	}
	var suma=sumar(parseInt(campo1), parseInt(campo2));
	var mensaje="La suma de "+campo1+" + "+campo2+" da como resultado "+suma;*/
	/*function restar(value1, value2){
		return ((value1>value2)?(value1-value2):(value2-value1));
	}
	var resto=restar(parseInt(campo1), parseInt(campo2));
	var mensaje="La resta de "+campo1+" - "+campo2+" da como resultado "+resto+" si hacemos una sustraccion con naturales+"+"<br/>"+"Con Integers es izi :v";*/
	/*function Max(value1, value2){
		return ((value1===value2)?("ninguno, ambos son iguales :v"):((value1>value2)?(value1):(value2)));
	}
	var MaxConAcot=Max(parseInt(campo1), parseInt(campo2));
	var mensaje="Entre "+campo1+" y "+campo2+", el mayor es "+MaxConAcot;*/
	/*var nombres=["Marcos", "Nahuel", "Alexis", "Alejandro", "Monica", "Veronica"];
	var mensaje="<table>";
	for (var i=0; i <(nombres.length); i++){
		mensaje+="<tr>"+"<td>"+nombres[i]+" esta en la "+(i+1)+"a posicion de la lista. Y su direccion en el array es el "+(i)+"</td>"+"</tr>";
	}
	var mensaje+="</table>";*/

	/*var colors=["Blue", "Gold", "Silver", "Azure", "Sapphire", "White", "Platinum"];
	colors.reverse();
	var mensaje="<ul style='list-style: none; padding: 0;'>Normal<br/><br/>";
	for(var i=colors.length-1; i>=0; i--){
		mensaje+="<li>"+colors[i]+"</li>"
	}
	mensaje+="</ul>";
	colors.reverse();
	colors.shift();
	colors.reverse();
	mensaje+="<ul style='list-style: none; padding: 0;'>Shifteado :v<br/><br/>";
	for(var i=colors.length-1; i>=0; i--){
		mensaje+="<li>"+colors[i]+"</li>"
	}
	mensaje+="</ul>";*/
	if(myArray.length!==0){
		myArray.reverse();
		var mensaje="<ul style='list-style: none; padding: 0;'>";
		for(var i=myArray.length-1; i>=0; i--){
			mensaje+="<li>"+myArray[i]+"</li>"
		}
		mensaje+="</ul>";
	}
	else{
		var mensaje="Nothing 2 show. Type n add something!";
	}
	

	//NO SE TOCA LO DE ABAJO WN
	document.getElementById("parrafo").innerHTML=mensaje;
}

/*Números
	sumar campo1 y campo 2 mostrarlo en el parrafo	
	devoler el resto de la división del campo1 y campo2
	
	devolver un mensaje si los campos son iguales y otro si son diferentes
	devolver el número mayor
	devolver el número menor
	devolver si ambos números son pares
	si el campo2 es mayor a la variable numero, mostrar un alert
	
	El campo1 y campo2 son días de la semana
	entonces mostrar en el parrafo que dia corresponde.
	1. lunes 2. martes y así susceviamente.
	
	*/
	