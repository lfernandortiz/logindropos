var user;
var clave;
function inicio(){
	console.log("Registrando eventos....");
	user = document.getElementById('usuario');
	console.log(user);
	user.addEventListener("onblur", desenfocarFondo(), false);
	clave = document.getElementById("contrasenia");
	clave.addEventListener("onfocus", desenfocarFondo(), false);
	console.log(clave);
}

function desenfocarFondo(){
	console.log("desenfocando..");
	if(user.focus()){
		console.log("si");
		var fondo = document.getElementById("cb-slideshow");
		fondo.setAttribute("style", "-webkit-filter: blur(5px)");
	}else{
		console.log("no");
	}
	
}

window.addEventListener("load", inicio, false);