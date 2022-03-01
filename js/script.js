
/* Lista de usuários

1º passo: capturar valores dos campos da minha página
2º passo: armazenar/salvar valores no meu script
3º passo: criar/adicionar elementos na interface
4º passo: remover elementos da minha interface

*/

const listaSolicitações = [];

const campoNome = document.getElementById('campoNome');
const campoEmail = document.getElementById('campoEmail');
const campoNumero = document.getElementById('campoNumero');

const botaoAdicionarDobro = document.getElementById('Dobro');
const botaoAdicionarMetade = document.getElementById('Metade');

function dobro() {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorNumero = campoNumero.value;

    const novaSolicitação = {
        nome: valorNome,
        email: valorEmail,
        numero: valorNumero * 2 + " Dobro"
    };
    
    listaSolicitações.push(novaSolicitação);
    
    console.log(listaSolicitações);
    //console.log(valorNome);
    //console.log(valorEmail);
    //console.log(valorNumero * 2);
};

function metade() {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorNumero = campoNumero.value;

    const novaSolicitação = {
        nome: valorNome,
        email: valorEmail,
        numero: valorNumero / 2 + " Metade"
    };
    
    listaSolicitações.push(novaSolicitação);
    
    console.log(listaSolicitações);
    //console.log(valorNome);
    //console.log(valorEmail);
    //console.log(valorNumero / 2);

};


botaoAdicionarDobro.addEventListener('click', dobro);
botaoAdicionarMetade.addEventListener('click', metade);



