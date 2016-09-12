//varibles de uso global recibe los elementos de usuario, contraseña, y recordar usuario
var user;
var clave;
var recordar;

//funcion inicial que carga los objetos del DOM  a variables jS.
function inicio(){
	user = document.getElementById('usuario');
	clave = document.getElementById("contrasenia");
	recordar = document.getElementById("recordarme");
	user.addEventListener("click", desenfocarFondo, false);	
	user.addEventListener("blur", enfocarFondo, false);	
	clave.addEventListener("click", desenfocarFondo, false);
	clave.addEventListener("blur", enfocarFondo, false);
	recordar.addEventListener("click", desenfocarFondo, false);	
}


//Aplica desenfoque al fondo  de imagenes
function desenfocarFondo(){
	var fondo = document.getElementById("cb-slideshow");
	var evento = window.event.target.id;
	if(evento == recordar.id){
		if(recordar.checked){			
			fondo.setAttribute("style", "-webkit-filter: blur(6px); transition:.9s");
		}else{
			enfocarFondo();
		}
	}else{
		fondo = document.getElementById("cb-slideshow");
		fondo.setAttribute("style", "-webkit-filter: blur(6px); transition:.9s");
	}	
}

//Enfoca en fondo cuando los campos del formulario pierden el foco.
function enfocarFondo(){
	var fondo = document.getElementById("cb-slideshow");
	fondo.setAttribute("style", "-webkit-filter: blur(0) ; transition:.9s");
}

//Registra los manejadores de eventos de los componentes de la pagina al momet de cargar la pagina
window.addEventListener("load", inicio, false);