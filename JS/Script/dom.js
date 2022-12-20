/*console.log(document.getElementById('nome_usuario')) // pegar id
console.log(document.getElementsByTagName('input')) // tag html
console.log(document.getElementsByClassName('campo_texto')) // pegar class
console.log(document.getElementsByName('nome')) // pegar id
*/

function distribuiCaracter(){ // onkeyup = para capturar valor digitado, sem precisar submeter
    var caracter = document.getElementById('entrada').value
    document.getElementById('entrada').value = ''

    caracter.trim() //limpar espaços em branco nas extremidades

    switch(caracter){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adicionar o caracter no campo referente
            document.getElementById('numeros').value = caracter
        break;
        default:
            document.getElementById('letras').value = caracter
    }
}