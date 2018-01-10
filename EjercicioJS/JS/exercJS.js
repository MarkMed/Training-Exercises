var persons = [
	{name:"Pepe", age:25, genre:"M"},
	{name:"Javier", age:18, genre:"M"},
	{name:"Gonzalo", age:14, genre:"M"},
	{name:"Laura", age:23, genre:"F"},
	{name:"Romina", age:56, genre:"F"},
	{name:"Lucia", age:34, genre:"F"},
	{name:"Roxana", age:17, genre:"F"},
	{name:"Esther", age:42, genre:"F"},
	{name:"Anacleta", age:21, genre:"F"},
	{name:"Jacinta", age:25, genre:"F"},
	{name:"Yolanda", age:29, genre:"F"},
	{name:"Claudio", age:37, genre:"M"},
];
function GetByGenre(list, genre){
	var result = [];
	for(var i = 0; i < list.length; i ++){
		if(list[i].genre == genre){
		result.push(list[i]);
		}
	}
	return result;
}
google.charts.load('current', {'packages':['corechart']});
function drawPie() {
	femaleCount = GetByGenre(persons, "F").length;
	maleCount = GetByGenre(persons, "M").length;
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Topping');
	data.addColumn('number', 'Slices');
	data.addRows([
	['Female', femaleCount],
	['Male', maleCount]
	]);
	google.charts.load('current', {'packages':['corechart']});
	var piechart_options = {title:'Gender Amount'};
	var piechart=new google.visualization.PieChart(document.getElementById('ducha'));
	piechart.draw(data, piechart_options);
}
google.charts.load('current', {'packages':['table']});
function drawTable() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Name');
	data.addColumn('number', 'Salary');
	data.addColumn('boolean', 'Full Time Employee');
	data.addRows([
	['Mike',  {v: 10000, f: '$10,000'}, true],
	['Jim',   {v:8000,   f: '$8,000'},  false],
	['Alice', {v: 12500, f: '$12,500'}, true],
	['Bob',   {v: 7000,  f: '$7,000'},  true]
	]);

	var table = new google.visualization.Table(document.getElementById('ducha'));

	table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}
