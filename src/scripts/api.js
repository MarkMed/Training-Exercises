var Api = (function(){

	var alumnos = [{ 
		        "id" : "1", 
		        "nombre" : "Marcelo", 
		        "edad" : 15,
		        "correo" : "marcelo@ceibal.edu.uy", 
		        "perfil": "http://images.hellogiggles.com/uploads/2016/10/08143330/82639965_game-of-thrones-season-2-jon-snow.jpg",
		        "materias": [
		            { "nombre": "JS" , "nota" : 10},
		            { "nombre": "JS" , "nota" : 5},
		            { "nombre": "JS" , "nota" : 8}
		        ],
		        "ciudad" : "Salto"
		    }, 
	    	{ 
		        "id" : "2", 
		        "nombre" : "Sofia", 
		        "edad" : 18,
		        "correo" : "sofi@ceibal.edu.uy", 
		        "perfil": "http://bit.ly/2s0dcbg",
		        "materias": [
		            { "nombre": "JS" , "nota" : 9},
		            { "nombre": "JS" , "nota" : 9},
		            { "nombre": "JS" , "nota" : 9}
		        ],
		        "ciudad" : "Punta del Este"
		    },
		    { 
		        "id" : "3", 
		        "nombre" : "Gimena", 
		        "edad" : 19,
		        "correo" : "gime@ceibal.edu.uy", 
		        "perfil": "http://bit.ly/2qlER9z",
		        "materias": [
		            { "nombre": "JS" , "nota" : 5},
		            { "nombre": "JS" , "nota" : 5},
		            { "nombre": "JS" , "nota" : 5}
		        ],
		         "ciudad" : "Canelones"
		    },
		    { 
		        "id" : "4", 
		        "nombre" : "Estevan", 
		        "edad" : 17,
		        "correo" : "estevan@ceibal.edu.uy", 
		        "perfil": "http://bit.ly/2rrafUr",
		        "materias": [
		            { "nombre": "JS" , "nota" : 7},
		            { "nombre": "JS" , "nota" : 5},
		            { "nombre": "JS" , "nota" : 6}
		        ],
		         "ciudad" : "Paysand&uacute;"
		    },
		    { 
		        "id" : "5", 
		        "nombre" : "Rodrigo", 
		        "edad" : 15,
		        "correo" : "rodrigo@ceibal.edu.uy", 
		        "perfil": "http://bit.ly/2s0tUYc",
		        "materias": [
		            { "nombre": "JS" , "nota" : 10},
		            { "nombre": "JS" , "nota" : 2},
		            { "nombre": "JS" , "nota" : 1}
		        ],
		        "ciudad" : "Montevideo"
		    },
		    { 
		        "id" : "6", 
		        "nombre" : "Jaime", 
		        "edad" : 20,
		        "correo" : "jj@ceibal.edu.uy", 
		        "perfil": "http://itsh.bo/2r7O1Ww",
		        "materias": [
		            { "nombre": "JS" , "nota" : 1},
		            { "nombre": "CSS" , "nota" : 2},
		            { "nombre": "HTML" , "nota" : 3}
		        ],
		        "ciudad" : "Mercedes"
		    }];
	var cursos = [
	  { 
	    "id": 1, 
	    "nombre": "CSS", 
	    "descripcion": "Como mejorar el estilo de las paginas!"
	  },
	  { 
	    "id": 2, 
	    "nombre": "JS", 
	    "descripcion": "Como mejorar el comportamiento de las paginas!"
	  },
	  { 
	    "id": 3, 
	    "nombre": "HTML", 
	    "descripcion": "Como crear paginas!"
	  },
	  { 
	    "id": 4, 
	    "nombre": "Programación", 
	    "descripcion": "Como crear aplicaciones!"
	  }
	];
	function getAlumnos(){
		return alumnos;
	};
	function addAlumno(alumno){
		alumno.id = alumnos.length + 1;
		alumnos.push(alumno);
	};
	function getCursos(){
		return cursos;
	};
	return {
		addAlumno: addAlumno,
		getAlumnos: getAlumnos,
		getCursos: getCursos
	}
})();
