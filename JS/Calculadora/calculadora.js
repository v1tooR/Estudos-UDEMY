function calcular(tipo, valor){
   // console.log(tipo, valor) // pode ser acao também

   if(tipo === 'acao'){
    if(valor === 'c'){
        //limpar visor
        document.getElementById('resultado').value = ''
    }
    if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
    }
    if(valor === "="){
        var valor_campo = eval(document.getElementById('resultado').value)
        //console.log(eval(valor_campo)) = eval submete qualquer string como codigo script, basicamente transformando a string em numerico
        document.getElementById('resultado').value = valor_campo
    
    }
   }else if(tipo === 'valor'){
    //var valor_campo = document.getElementById('resultado').value
    document.getElementById('resultado').value += valor // concatenar e adicionar
   }
}