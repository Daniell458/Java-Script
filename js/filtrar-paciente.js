var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    // no código abaixo pode ser usado tanto o nome do elemento "campFiltro" quanto a palavra de contexto "this" ambos tem o mesmo resultado pois se referem ao elemento atrelado a esta função.
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if( this.value.length > 0 ){
        for( var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            // Abaixo temos um exemplo de pesquisa usando o ".substr" com distinção de maiúsculo/minúsculo.
            /* var comparavel = nome.substr(0, this.value.length);
            if (!(this.value == comparavel)) {
                paciente.classList.add("invisivel");
            } else{
                paciente.classList.remove("invisivel");
            }*/

            // Abaixo temos um exemplo de pesquisa usando o ".substr" sem distinção de maiúsculo/minúsculo.
            /* var comparavel = nome.substr(0, this.value.length);
            var comparavelMinusculo = comparavel.toLowerCase();
            var valorDigitadoMinusculo = this.value.toLowerCase();

            if(!(valorDigitadoMinusculo == comparavelMinusculo)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            } */

            var expressao = new RegExp(this.value,"i");

            if( !expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }
});