//Select Change
/*Selecting by ID*/
document.getElementById("BckColors").onchange=change_color1;
function change_color1(){
	//default_color();
	/*Cambia el color del input. Para que se visualize qué se elijió :v*/
	if(document.getElementById("BckColors").value==="#00218D"){
		document.getElementById("BckColors").style.background="#00218D";
		document.getElementById("BckColors").style.color="#224BCD";
	}
	else if(document.getElementById("BckColors").value==="#C9C306"){
		document.getElementById("BckColors").style.background="#C9C306";
		document.getElementById("BckColors").style.color="#FAF438";
	}
	else if(document.getElementById("BckColors").value==="#018DBB"){
		document.getElementById("BckColors").style.background="#018DBB";
		document.getElementById("BckColors").style.color="#00C6D2";
	}
	else if(document.getElementById("BckColors").value==="#BBB"){
		document.getElementById("BckColors").style.background="#FFF";
		document.getElementById("BckColors").style.color="#BBB";
	}
	else if(document.getElementById("BckColors").value==="#777"){
		document.getElementById("BckColors").style.background="#555";
		document.getElementById("BckColors").style.color="#777";
	}
	else if(document.getElementById("BckColors").value==="#19CD01"){
		document.getElementById("BckColors").style.background="#14A501";
		document.getElementById("BckColors").style.color="#19CD01";
	}
	else if(document.getElementById("BckColors").value==="#222"){
		document.getElementById("BckColors").style.background="#000";
		document.getElementById("BckColors").style.color="#222";
	}
	else if(document.getElementById("BckColors").value==="#C90202"){
		document.getElementById("BckColors").style.background="#C90202";
		document.getElementById("BckColors").style.color="#FF2828";
	}
	else{
		document.getElementById("BckColors").style.background="#FFF";
		document.getElementById("BckColors").style.color="#000";
	}
}
document.getElementById("BrdrColors").onchange=change_color2;
function change_color2(){
	//default_color();
	if(document.getElementById("BrdrColors").value==="#00218D"){
		document.getElementById("BrdrColors").style.background="#00218D";
		document.getElementById("BrdrColors").style.color="#224BCD";
	}
	else if(document.getElementById("BrdrColors").value==="#C9C306"){
		document.getElementById("BrdrColors").style.background="#C9C306";
		document.getElementById("BrdrColors").style.color="#FAF438";
	}
	else if(document.getElementById("BrdrColors").value==="#018DBB"){
		document.getElementById("BrdrColors").style.background="#018DBB";
		document.getElementById("BrdrColors").style.color="#00C6D2";
	}
	else if(document.getElementById("BrdrColors").value==="#BBB"){
		document.getElementById("BrdrColors").style.background="#FFF";
		document.getElementById("BrdrColors").style.color="#BBB";
	}
	else if(document.getElementById("BrdrColors").value==="#777"){
		document.getElementById("BrdrColors").style.background="#555";
		document.getElementById("BrdrColors").style.color="#777";
	}
	else if(document.getElementById("BrdrColors").value==="#19CD01"){
		document.getElementById("BrdrColors").style.background="#14A501";
		document.getElementById("BrdrColors").style.color="#19CD01";
	}
	else if(document.getElementById("BrdrColors").value==="#222"){
		document.getElementById("BrdrColors").style.background="#000";
		document.getElementById("BrdrColors").style.color="#222";
	}
	else if(document.getElementById("BrdrColors").value==="#C90202"){
		document.getElementById("BrdrColors").style.background="#C90202";
		document.getElementById("BrdrColors").style.color="#FF2828";
	}
	else{
		document.getElementById("BrdrColors").style.background="#FFF";
		document.getElementById("BrdrColors").style.color="#000";
	}
	//Me hice kk y no quise usar el switch n' KC :v
}
//Cell changer
function dameunapista(){
	//Saving data:
	/*Selecting by ID*/
	//CL = Cell, BckG = Background, C = Color, T = Type
	var CLBckGC=document.getElementById("BckColors").value;
	var CLBrdrT=document.getElementById("BrdrTypes").value;
	var CLBrdrC=document.getElementById("BrdrColors").value;
	var nametype=document.getElementById("prefabs").value;
	/*Selecting by Name*/
	var CLarray1=document.getElementsByName('rowdata');
	/*Selecting by Tag*/
	var CLarray2=document.getElementsByTagName('td');
	//Searching Cell:
	var rowry=document.getElementById("rows").value;
	var golumn=document.getElementById("golumns").value;
	var freeza="r"+rowry+" c"+golumn;
	var cooler=document.getElementById(freeza);
	//Doing things xD
		//Table Brdr:
	for(var i=0; i<CLarray1.length; i++){
		CLarray1[i].style.border="2px "+CLBrdrT+" #667";
	}
		//Cells BrdrC:
	for(var i=0; i<CLarray2.length; i++){
		CLarray2[i].style.border="2px "+CLBrdrT+" "+CLBrdrC;
		CLarray2[i].style.background="rgba(0, 0, 0, 0)";
	}
		//Cell Choosed:
	cooler.style.background=CLBckGC;
}
//Changing attribute (title)
document.getElementById("prefabs").onchange=change_title;
function change_title(){
	var CLarray2=document.getElementsByTagName('td');
	if(document.getElementById("prefabs").value==="rx cx"){
		var j=1;
		for(var h=0; h<3; h++){
			CLarray2[h].setAttribute("title", ("r1"+" c"+j));
			j++;
		}
		j=1;
		for(var h=3; h<6; h++){
			CLarray2[h].setAttribute("title", ("r2"+" c"+j));
			j++;
		}
		j=1;
		for(var h=6; h<9; h++){
			CLarray2[h].setAttribute("title", ("r3"+" c"+j));
			j++;
		}
		j=1;
		for(var h=9; h<12; h++){
			CLarray2[h].setAttribute("title", ("r4"+" c"+j));
			j++;
		}
	}
	else if(document.getElementById("prefabs").value==="rowx colx"){
		var j=1;
		for(var h=0; h<3; h++){
			CLarray2[h].setAttribute("title", ("row1"+" col"+j));
			j++;
		}
		j=1;
		for(var h=3; h<6; h++){
			CLarray2[h].setAttribute("title", ("row2"+" col"+j));
			j++;
		}
		j=1;
		for(var h=6; h<9; h++){
			CLarray2[h].setAttribute("title", ("row3"+" col"+j));
			j++;
		}
		j=1;
		for(var h=9; h<12; h++){
			CLarray2[h].setAttribute("title", ("row4"+" col"+j));
			j++;
		}
	}
	else if(document.getElementById("prefabs").value==="Rowx Colx"){
		var j=1;
		for(var h=0; h<3; h++){
			CLarray2[h].setAttribute("title", ("Row: 1"+" Col: "+j));
			j++;
		}
		j=1;
		for(var h=3; h<6; h++){
			CLarray2[h].setAttribute("title", ("Row: 2"+" Col: "+j));
			j++;
		}
		j=1;
		for(var h=6; h<9; h++){
			CLarray2[h].setAttribute("title", ("Row: 3"+" Col: "+j));
			j++;
		}
		j=1;
		for(var h=9; h<12; h++){
			CLarray2[h].setAttribute("title", ("Row: 4"+" Col: "+j));
			j++;
		}
	}
	else if(document.getElementById("prefabs").value==="Rowx Columnx"){
		var j=1;
		for(var h=0; h<3; h++){
			CLarray2[h].setAttribute("title", ("Row: 1"+" Column: "+j));
			j++;
		}
		j=1;
		for(var h=3; h<6; h++){
			CLarray2[h].setAttribute("title", ("Row: 2"+" Column: "+j));
			j++;
		}
		j=1;
		for(var h=6; h<9; h++){
			CLarray2[h].setAttribute("title", ("Row: 3"+" Column: "+j));
			j++;
		}
		j=1;
		for(var h=9; h<12; h++){
			CLarray2[h].setAttribute("title", ("Row: 4"+" Column: "+j));
			j++;
		}
	}
}