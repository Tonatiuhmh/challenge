// La letra "e" es convertida para "enter"
  // La letra "i" es convertida para "imes"
   //La letra "a" es convertida para "ai"
   //La letra "o" es convertida para "ober"
   //La letra "u" es convertida para "ufat"


function encriptar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var txtCifrar = texto.replace(/e/img,"enter");
	var txtCifrar = txtCifrar.replace(/i/img,"imes");
	var txtCifrar = txtCifrar.replace(/a/img,"ai");
	var txtCifrar = txtCifrar.replace(/o/img,"ober");
	var txtCifrar = txtCifrar.replace(/u/img,"ufat");

document.getElementById("pngDer").style.display = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("texto2").innerHTML = txtCifrar;
document.getElementById("copiar").style.display = "show";
document.getElementById ("copiar").style.display = "inherit";
}
function desencrip(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var txtCifrar = texto.replace(/enter/img,"e");
	var txtCifrar = txtCifrar.replace(/imes/img,"i");
	var txtCifrar = txtCifrar.replace(/ai/img,"a");
	var txtCifrar = txtCifrar.replace(/ober/img,"o");
	var txtCifrar = txtCifrar.replace(/ufat/img,"u");

document.getElementById("pngDer").style.display = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("texto2").innerHTML = txtCifrar;
document.getElementById("copiar").style.display = "show";
document.getElementById ("copiar").style.display = "inherit";
}

function copiar(){
	var cont= document.querySelector("#texto2");
	cont.select();
	document.execCommand("copy");
	alert("  ¡texto copiado correcatamente!  ");
}