var objetos = Array('Cadeira', 'Impressora', 'Garfo')

document.write(objetos)

 function adicionarObjetos() {
 //recupera o valor inserido no campo id objeto
    var objeto = document.getElementById('objeto').value

    //caso possua algum valor preenchido entra no if
    if(objeto != '') {
    //verifica se o valor já não foi inserido anteriormente
    //se sim, informa que valor já existe, se não insere novo valor
        if( objetos.indexOf(objeto) !== -1) {
            alert('Objeto já foi adicionado')
        } else {
            objetos.push(objeto)
            console.log(objetos)

            document.getElementById('objeto').value = ''
        }

    } else {
        alert('Informe um objeto válido')
    }
 }

 function ordenarObjetos() {
    objetos.sort()
    console.log(objetos)
 }