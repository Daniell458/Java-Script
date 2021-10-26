// aqui está o calculo IMC
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector('.info-peso').textContent;

    var altura = paciente.querySelector('.info-altura').textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        console.log("peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }    
    
    if(!alturaEhValida) {
        console.log("altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if( alturaEhValida && pesoEhValido) {
    // formula IMC
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){

    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){

    if(altura >= 0 && altura < 3.00 ){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}