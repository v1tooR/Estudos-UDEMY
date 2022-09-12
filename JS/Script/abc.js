var a = 10
var b = 20
var c = null //auxiliar

document.write('A: ' + a + '<br>')
document.write('B: ' + b + '<br>')
document.write('C: ' + c + '<br>')

document.write('<hr />')

// inversão
c = a
a = b
b = c

c = null

//
document.write('A: ' + a + '<br>')
document.write('B: ' + b + '<br>')
document.write('C: ' + c + '<br>')

for( i=0; i<=10; i++){
    console.log(i)
}