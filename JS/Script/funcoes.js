/*function calcularArea(largura, comprimento){ //parametro para a função ter um init

  var area = largura * comprimento
  return area;

}//function void

var largura = prompt()
var comprimento = prompt()

document.write('Area: '+calcularArea(largura,comprimento)+' metros^2' )

function calcular(a, b){
  return a + b
}

console.log(calcular(1,5))
console.log(calcular(5)) // 5 + undefined = not a number

// Primeira e segunda aula

//funcoes anonimas
*/

//wrapper
var saudacao = function(nome){
  document.write('Ola ' + nome + ', Bem vindo!')
}

saudacao('victor')