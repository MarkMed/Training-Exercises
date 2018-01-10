setTimeout(
	function running(){
		var tablet=document.getElementById("prinTable");
		var adding;
		while(texto!=="00"){
			var texto=prompt("Escriba algo. 00 para finalizar", "");
			if (texto!=="00"){
				adding="<tr>"+"<td>"+texto+"</td>"+"</tr>";
				tablet.innerHTML+=adding;
			}
			else{
				adding="<tr>"+"<td style='color: red;'>"+"Hemos termonado"+"</td>"+"</tr>";
				tablet.innerHTML+=adding;
			}
		}
	}, 3000
);