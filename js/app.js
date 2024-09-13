document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML =  '';
let total = 0;

function adicionar() {

    //Recupera os produtos, suas quantidades, seus nomes e seus valores, além do subtotal.
    let listaDeCompras = document.getElementById('lista-produtos')
    //-Produto e quantidade;
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidadeProdutos = document.getElementById('quantidade').value;
    //-Nome e Valor;
    let nomeProdutoSelecionado = produtoSelecionado.split('-')[0];
    let valorProdutoSelecionado = produtoSelecionado.split('R$')[1];
    //Calcula o subtotal.
    let subTotal = quantidade.value * valorProdutoSelecionado;


    //Adiciona os produtos no carrinho (HTML).
    listaDeCompras.innerHTML +=
        `<section class="carrinho__produtos__produto">
        <span class="texto-azul"> ${quantidadeProdutos}x </span> ${nomeProdutoSelecionado} <span class="texto-azul">R$ ${subTotal}</span>
        </section>`;

    //Atualiza valor total.

    let campoTotal = document.getElementById('valor-total');
    total = total + subTotal;
    campoTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$ ${total}</span>`
    quantidade.value = "";

    //Infomações do desenvolvedor.
    console.log(nomeProdutoSelecionado, valorProdutoSelecionado, quantidadeProdutos, subTotal);
}

function limpar() {
    quantidade.value = "";
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML =  '';
}