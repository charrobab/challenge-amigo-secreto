// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let numeroAmigos = 0;
let amigos = [];
let lista = document.getElementById('listaAmigos')
let resultado = document.getElementById('resultado');

function agregarAmigo(){
    if (document.getElementById('amigo').value=== ''){
        alert('Por favor, inserte un nombre');
    }else {
        amigos.push(document.getElementById('amigo').value);
        console.log(amigos);
        listarAmigos();
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function listarAmigos(){
    lista.innerHTML = "";
    for(var i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Por favor, ingresa un nombre para iniciar el juego');
    } else{
        let numeroMaximo = amigos.length;
        console.log(numeroMaximo);
        let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        resultado.innerHTML = `<li>${amigos[numeroGenerado-1]}</li>`;
    }
}

function limpiarAmigos(){
    amigos.length === 0;
}