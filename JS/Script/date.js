var data = new Date()
/* 
//add/rem dia
document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<hr/>')
document.write(data.toString())
document.write("<br> <hr/>")

//add/rem mes

data.setMonth(data.getMonth() + 1)
document.write('<hr/>')
document.write(data.toString())
document.write("<br> <hr/>")

//add/rem ano

data.setFullYear(data.getFullYear() + 1)
document.write('<hr/>')
document.write(data.toString())
document.write("<br> <hr/>")
*/


//15/01/2017
var data1 = new Date(2017, 0, 15) // 0 - mes de janeiro
//23/05/2017
var data2 = new Date(2017, 4, 23)


document.write(data1.toString() + "<hr/>")
document.write(data2.toString())

document.write("<br><br><br>")
document.write(data1.getTime() + "<hr/>")
document.write(data2.getTime()) // são calculadas a partir de 1 de janeiro de 1970

// qnt de mili sec entre data1 e data2

document.write('<br><br>Subtração: ' + Math.abs(data1.getTime() - data2.getTime()) + '<br>') // retorna valor absoluto do numero

var total_sub = Math.abs(data1.getTime() - data2.getTime())
//calculando
document.write('<br>um dia tem: ' + (1*24*60*60*1000) + ' milissegundos')
document.write("<br> <hr/>")

var dia = (1*24*60*60*1000)

document.write('A diferença de dias é: '+Math.ceil(total_sub/dia))