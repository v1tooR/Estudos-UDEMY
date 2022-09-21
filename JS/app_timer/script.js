let display = document.getElementById('display');

let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let comecar = document.getElementById('comecar');


let cronometroSeg;

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
	minAtual = minutos.value;
	segAtual = segundos.value;

	display.childNodes[1].innerHTML = minAtual + ":" + segAtual;

	interval = setInterval(function(){

		segAtual--;
		if(segAtual <= 0){
			if (minAtual > 0) { //se o minuto for maior que 0, o segundo faz o loop
				minAtual--;
				segAtual = 59;
			}else{
				alert("Acabou o tempo!");
				document.getElementById("sound").play();
				clearInterval(interval);
			}
		}
		display.childNodes[1].innerHTML = minAtual + ":" + segAtual;
	},1000);
})