const entrada = document.querySelector(".entrada");
const resultado = document.querySelector(".resultado");


function btnEncriptar(){
    if(entrada.value == ""){
        alert("Digite um texto!");
    }else if(entrada.value != ""){
    const textoEncriptado = encriptar(entrada.value)
    resultado.value = textoEncriptado
    resultado.style.backgroundImage="none"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }    
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    if(entrada.value == ""){
        alert("Digite o texto!")
    } else if(entrada.value != ""){
        const textoDescriptado = desencriptar(entrada.value);
        resultado.value = textoDescriptado;
        resultado.style.backgroundImage="none"
        resultado.style.backgroundImage="block"
    }
}

function desencriptar(stringDescriptada){
    let matrizCodigo = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u","ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for (i = 0; i< matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][1])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptada;
}

function btnCopiar(){
    if (resultado.value == "") {
       resultado.placeholder = "Não há mensagem";
       entrada.placeholder = "Digite um texto"
       resultado.style.backgroundImage = "none";
   } else {
       navigator.clipboard.writeText(resultado.value); 
       resultado.value = "";
       resultado.placeholder = "Texto copiado!";
       entrada.placeholder = "Digite o texto";
   }
}