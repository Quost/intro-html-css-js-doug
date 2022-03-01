
/* Lista de usuários

1º passo: capturar valores dos campos da minha página
2º passo: armazenar/salvar valores no meu script
3º passo: criar/adicionar elementos na interface
4º passo: remover elementos da minha interface

*/

const listaSolicitações = [];

const listaResultadosContainer = document.querySelector('.secaoListaContatos__lista');

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
    
    renderizarLayout();
}

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

    renderizarLayout();

};


botaoAdicionarDobro.addEventListener('click', dobro);
botaoAdicionarMetade.addEventListener('click', metade);

function renderizarLayout () {
    listaResultadosContainer.innerHTML = '';
    for(let i = 0; i < listaSolicitações.length; i++) {
        criarLayout(listaSolicitações[i]);
    };
};

function criarLayout(contato) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');

    button.id = "removerPedido";

    h2.innerText = contato.nome;
    p.innerText = contato.email;
    span.innerText = contato.numero;

    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    listaResultadosContainer.appendChild(li);
}

/* <li>
    <button id="removerContato"></button>
    <h2>Manu</h2>
    <p>manu555@gmail.com</p>
    <span>9999999999</span>
</li> */ 


