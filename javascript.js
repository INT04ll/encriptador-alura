var botonEncripta = document.querySelector(".btn-encriptar");
var botonDesencripta = document.querySelector(".btn-desencriptar");
var img = document.querySelector(".conteiner_munieco");
var sectionh2 = document.querySelector(".contenedor_h");
var sectionp = document.querySelector(".contenedor_text");
var textresult = document.querySelector(".text-result")

botonEncripta.onclick = areaEncriptar;
botonDesencripta.onclick = areaDesencriptada; 

function areaEncriptar(){
   ocultarCapas();
   textresult.textContent = textEncriptado(areaRecuperada());
}
function areaDesencriptada(){
    ocultarCapas();
    textresult.textContent = textDesencriptado(areaRecuperada());
}
function areaRecuperada(){
    var area = document.querySelector(".area");
    return area.value;
}
function ocultarCapas(){
    img.classList.add("ocult");
    sectionh2.classList.add("ocult");
    sectionp.classList.add("ocult");
}
function textEncriptado(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function textDesencriptado(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


























