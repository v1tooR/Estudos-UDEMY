//array comum

var lista_numeros = Array()

lista_numeros[0] = 1
lista_numeros[1] = 2
lista_numeros[2] = 3
lista_numeros[3] = 4
lista_numeros[4] = 5

//array multidimensional
var lista_coisas = Array()

lista_coisas['numeros'] = Array(1,2,3,4,5)

lista_coisas['pessoas'] = []
lista_coisas['pessoas']['a'] = 'João'
lista_coisas['pessoas']['b'] = 'José'
lista_coisas['pessoas']['c'] = 'Maria'


document.write(lista_coisas['numeros'][3])

//array incluir/remover

var lista_itens = Array('maçã', 'banana', 'uva')
console.log(lista_itens)

    
    //incluir elemento no final do array
    lista_itens.push('morango')
    //incluir no inicio do array
    lista_itens.unshift('pêra')
    //excluir no final do array
    lista_itens.pop()
    //excluir no inicio do array
    lista_itens.shift()

    lista_itens['pessoas'] = []
    lista_itens['pessoas'].push('Vitor')
