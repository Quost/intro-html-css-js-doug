
/* Lista de usuários

1º passo: capturar valores dos campos da minha página
2º passo: armazenar/salvar valores no meu script
3º passo: criar/adicionar elementos na interface
4º passo: remover elementos da minha interface

*/

const listaSolicitações = [];
let id = 0;

const listaResultadosContainer = document.querySelector('.listaSolicitacao_lista');

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
        id: id,
        nome: valorNome,
        email: valorEmail,
        numero: valorNumero * 2 + " Dobro"
    };
    
    id++;
    listaSolicitações.push(novaSolicitação);
    
    renderizarLayout();
}

function metade() {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorNumero = campoNumero.value;

    const novaSolicitação = {
        id: id,
        nome: valorNome,
        email: valorEmail,
        numero: valorNumero / 2 + " Metade"
    };
    
    id++;
    listaSolicitações.push(novaSolicitação);

    renderizarLayout();

};


botaoAdicionarDobro.addEventListener('click', dobro);
botaoAdicionarMetade.addEventListener('click', metade);

function removerSolicitacao(evento) {
    const clickBotao = evento.target;
    const clickRemove = clickBotao.parentElement;
    const idClickRemove = clickRemove.dataset.id;

    const removeClick = listaSolicitações.find((contato) => contato.id == idClickRemove);
    const posicaoSolicitaçãoRemovida = listaSolicitações.indexOf(removeClick);
    listaSolicitações.splice(posicaoSolicitaçãoRemovida, 1);

    renderizarLayout();
}

function renderizarLayout () {
    listaResultadosContainer.innerHTML = '';

    if(listaSolicitações.length !== 0) {

        for(let i = 0; i < listaSolicitações.length; i++) {
        criarLayout(listaSolicitações[i]);
        }
    } else {
        const listaVazia = `<li>
        <p>Não há solicitações na sua lista</p>
        </li>`; 

        listaResultadosContainer.innerHTML = listaVazia;
    }
};
renderizarLayout();

function criarLayout(contato) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');

    button.id = "removerPedido";
    button.addEventListener('click', removerSolicitacao)

    li.dataset.id = contato.id; 
    h2.innerText = contato.nome;
    p.innerText = contato.email;
    span.innerText = contato.numero;

    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    listaResultadosContainer.appendChild(li);
}


window.localStorage.setItem('usuario', 'Douglas Williams');
var usuario = window.localStorage.getItem('usuario');


