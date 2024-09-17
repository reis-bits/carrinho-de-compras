// Esvazia os elementos no HTML tirando o valor total pré-definido e o deixando preparado pra receber novos valores.
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML =  '';

// Variável total declarada como 0.
let total = 0;

function navegacaoPorTeclado() {
    const inputQtd = document.getElementById('quantidade');

    inputQtd.addEventListener('keydown', (event) => {
        if(event.key == 'Enter') {
            event.preventDefault();
            adicionar();
        }
    })
}

window.onload = navegacaoPorTeclado;

function adicionar() {

    // Recupera os produtos, suas quantidades, seus nomes e seus valores, além do subtotal.
    let listaDeCompras = document.getElementById('lista-produtos')
    // Produto e quantidade;
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidadeProdutos = document.getElementById('quantidade').value;
    // Nome e Valor;
    let nomeProdutoSelecionado = produtoSelecionado.split('-')[0];
    let valorProdutoSelecionado = produtoSelecionado.split('R$')[1];

    if(quantidadeProdutos == '') {
        alert('Insira uma quantidade.');
        return;
    }
    // Calcula o subtotal.
    let subTotal = quantidade.value * valorProdutoSelecionado;
    

    // Adiciona os produtos no carrinho.
    listaDeCompras.innerHTML +=
        `<section class="carrinho__produtos__produto">
        <span class="texto-azul"> ${quantidadeProdutos}x </span> ${nomeProdutoSelecionado} <span class="texto-azul">R$ ${subTotal}</span>
        </section>`;

    // Declara um campo pro valor total.
    let campoTotal = document.getElementById('valor-total');
    // Calcula o total em si
    total = total + subTotal;

    // Altera o campo do valor total no HTML com o valor total.
    campoTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$ ${total}</span>`
    quantidade.value = "";

    // Infomações do desenvolvedor.
    console.log(nomeProdutoSelecionado, valorProdutoSelecionado, quantidadeProdutos, subTotal);
}

//Função que limpa os valores tanto no Javascript quanto no HTML.
function limpar() {
    quantidade.value = "";
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML =  '';
}