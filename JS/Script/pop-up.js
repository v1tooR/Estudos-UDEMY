let dialog = document.getElementById("modal")
let close = document.getElementById("close")
let open = document.getElementById("open")

open.onclick = function(){
    dialog.showModal();
    dialog.classList.toggle("showDialog")
}

close.onclick = function(){
    dialog.close();
    dialog.classList.toggle("showDialog")
}