function calcular(tipo, valor){
   // console.log(tipo, valor) // pode ser acao também

   if(tipo === 'acao'){
    if(valor === 'c'){
        //limpar visor
        document.getElementById('resultado').value = ''
    }
   }else if(tipo === 'valor'){
    //var valor_campo = document.getElementById('resultado').value
    document.getElementById('resultado').value += valor // concatenar e adicionar
   }
}