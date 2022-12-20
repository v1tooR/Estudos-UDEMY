//eventos mouse
function acao(){
    let container = document.getElementById('container')
    container.style.backgroundColor = '#000'
}
function acao_c(){
    let container = document.getElementById('container')
    container.style.backgroundColor = '#ccc'
}
/**
 * Para Teclado
 * onkeydown: quando pressionar a tecla
 * onkeyup: quando soltar a tecla
 * onkeypress: quando se mantem pressionado
 */

 var btn = document.querySelector('button');

 function random(number) {
   return Math.floor(Math.random()*(number+1));
 }
 
 btn.onclick = function() {
   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
   document.body.style.backgroundColor = rndCol;
 }