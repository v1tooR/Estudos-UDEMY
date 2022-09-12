var carrinho = new Array();
    carrinho[0] = ["Livro", 100.0, 2]; // livro = carrinho[i][0] Valor = carrinho[i][1] Quantidade = carrinho[i][2]
    carrinho[1] = ["Caderno", 20.0, 3];

var totalItemCarrinho = 0;
var totalCompra = 0;

for(let i = 0; i < carrinho.length; i++){ // i = a quantidade de produtos dentro do carrinho
    totalItemCarrinho = carrinho[i][1] * carrinho[i][2]; // multiplica a quantidade pelo valor do produto dentro da matriz
    document.write("<br>Nome do produto: " + carrinho[i][0] + " / Valor do produto "+ carrinho[i][1].toLocaleString('pt-BR', 
    { style: 'currency', currency: 'BRL' }) + " / Quantidade: " + carrinho[i][2] + " / Valor total do item: " + 
    totalItemCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    totalCompra += totalItemCarrinho;
}

console.log("O valor total da compra é " + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
document.write("<br><br>O valor total da compra é " + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));