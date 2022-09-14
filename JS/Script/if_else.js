function login(){

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var text;

    if (username == "usuario123" && password == "123456") {
        text = "Usuário autenticado";
    } else {
        text = "Login e/ou senha incorrretos";
    }
    document.getElementById("result").innerHTML = text;
}
