// Váriavel que guarda as informações de cada elemteno criando
var nodeList = document.getElementsByTagName("LI")

// Itens dalista
for( i = 0; i < nodeList.length; i++){
	var span = document.createElement("SPAN")
	var txt = document.createTextNode("\u00D7")
	span.className = "close"
	span.appendChild(txt)
	nodeList[i].appendChild(span)
}

// Excluir a tarefa da lista
var close = document.getElementsByClassName("close")
for(i = 0; i< close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none"
	}
}

// Tarefa feita
var list = document.querySelector('ul')
list.addEventListener('click', function(ev){
	if(ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked')
	}

},false	)

// criação dos itens
function newElement(){
	var li = document.createElement("li")
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue)
	li.appendChild(t)
	// verifica se há algo escrito ou nao
	if(inputValue === ''){
		alert("Escreva algo!")
	}else{
		document.getElementById("myUL").appendChild(li)
	}
	// pega o valor dentro do campo
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN")
	var txt = document.createTextNode("\u00D7")
	span.className = "close"
	span.appendChild(txt)
	li.appendChild(span)

	for(i = 0; i< close.length; i++){
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = "none"
		}
	}
}