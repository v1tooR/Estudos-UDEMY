function calcularArea(largura, comprimento){ //parametro para a função ter um init

  var area = largura * comprimento
  return area;

}//function void

var largura = prompt()
var comprimento = prompt()

document.write('Area: '+calcularArea(largura,comprimento)+' metros^2' )
