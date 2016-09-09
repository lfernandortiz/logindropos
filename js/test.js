
function inicio(){
	console.log("Registrando eventos....");
	var user = document.getElementById("usuario");
	user.addEventListener("focus", desenfocarFondo(), false);
	var clave = document.getElementById("contrasenia");
	clave.addEventListener("focus", desenfocarFondo(), false);
}

function desenfocarFondo(){
	console.log("desenfocando..");
	var fondo = document.getElementById("cb-slideshow");
	fondo.setAttibutte("style", "filter: blur(5px)");
}

window.addEventListener("load", inicio(), false);