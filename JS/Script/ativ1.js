var num1 = prompt('Digite um número')
var op = prompt('Digite a operação desejada: subtração ou soma')
var num2 = prompt('Digite outro número número')

function calculo(num1, num2, op){

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    var result

    if(op === 'soma'){
        result = num1 + num2
    }
    if(op === 'subtração'){
        result = num1 - num2
    }


    return result
}

document.write(calculo(num1, num2, op))