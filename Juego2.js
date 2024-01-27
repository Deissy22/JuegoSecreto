//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Juego del número secreto"; //Asignar el titulo de h1 

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Digita un número del 1 al 10';

let numeroSecreto;// condicionesIniciales ya les da el valor
let intentos;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){         //Se generalizo la función y se optimizo el codigo 
    let elementoHTML = document.querySelector(elemento);//ya que no hay que declarar cada variable.
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
        //console.log(numeroUsuario === numeroSecreto); //Dara un boolean (true or false)
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento ('p', `¡Felicidades! Acertaste. Te tomo ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
         if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número es menor');
        }   else{
        asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarInput();
    } 
    return;
}

function condicionesIniciales(){ //encapsula las condiciones de inicio en un funcion
    /*1*/asignarTextoElemento('h1', 'Juego del número secreto'); //para que la funcion reinicialJuego y el codigo
    /*1*/asignarTextoElemento('p', `Digita un número del 1 al ${numeroMaximo}`); //sea incluso mas optimo
    /*2*/numeroSecreto = generarNumeroSecreto();
            //console.log(numeroSecreto);
    /*3*/intentos = 1;
}

function limpiarInput(){
    document.querySelector('#valorUsuario').value = ''; //el # sirve para identificar una id
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumeroSorteados);
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se han sorteado todos los números posibles');
    }else {
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    //limpiar caja
    limpiarInput();
    //1. indicar mensaje de inicio
    //2. generar numero aleatorio
    //3. reiniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales(); //llamar la funcion.
 

