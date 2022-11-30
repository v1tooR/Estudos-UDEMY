/*var produto1 = { 
    nome: "Maçã",
    preco: 2, 
    calculaDesconto: function(){ 
         //10% de desconto
         return this.preco * 0.1;  
         } 
};

var produto2 = { 
    nome: "Banana", 
    preco: 3, 
    calculaDesconto: function(){ 
        //10% de desconto
        return this.preco * 0.1;
        } 
}; 
produto1.calculaDesconto(); //1,98
produto2.calculaDesconto(); //2,97*/

class Produto{
    constructor(paramNome, paramPreco){
        this.nome = paramNome;
        this.preco = paramPreco;
    //Uma ação dentro da classe
    }calculaDesconto(){ 
        return this.preco * 0.1;
    }
}

var produto1 = new Produto("Maçã", 2);
var produto2 = new Produto("Banana", 3);
produto1.calculaDesconto();
produto2.calculaDesconto();