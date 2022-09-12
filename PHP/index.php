<?php
   	/*
   	
   	isset() : função recebe uma variável e verifica se ela existe. retorna valor boolean
		
	$_POST : variável superglobal que recebe os valores do formulário com método "post"

	*/
	$n1 = $_POST['numero1'];
	$n2 = $_POST['numero2'];
	echo "\n\nResultado: ";
	echo $n1+$n2;

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soma php</title>
</head>
<body>
<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <input type="number" name="numero1">
    <input type="number" name="numero2">
	<input type="submit">
</form>
</body>
</html>
