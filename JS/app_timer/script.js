let display = document.getElementById('display');

let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let comecar = document.getElementById('comecar');


let cronSeg;

let minAtual;
let segAtual;

let interval;

for(i = 0; i <= 60; i++){
	minutos.innerHTML+= '<option value="'+i+'">'+i+'</option> ';
}
for(i = 1; i <= 60; i++){
	segundos.innerHTML+= '<option value="'+i+'">'+i+'</option> ';
}

comecar.addEventListener('click', function(){
	minutoAtual = minutos.value;
	segundoAtual = segundos.value;

	display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

	interval = setInterval(function(){

		segundoAtual--;
		if(segundoAtual <= 0){
			if (minutoAtual > 0) { //se o minuto for maior que 0, o segundo faz o loop
				minutoAtual--;
				segundoAtual = 59;
			}else{
				alert("Acabou o tempo!");
				document.getElementById("sound").play();
				clearInterval(interval);
			}
		}
		display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
	},1000);
})