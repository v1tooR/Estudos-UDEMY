function exibir( id, callbackSuccess, callbackError){
    if (true){
        callbackSuccess('Callback em js', 'Callback')
    }else{
        callbackError('erro ao recuperar')
    }
}

var callbackSuccess = function(titulo, desc){
    document.write('<h1>'+ titulo + '</h1>')
    document.write('<hr>')
    document.write('<h3>'+ desc + '</h3>')
}

var callbackError = function(error){
    document.write('<h1>'+ error + '</h1>')
} // referindo a função

exibir(1, callbackSuccess, callbackError)

// Estrutura de um callback