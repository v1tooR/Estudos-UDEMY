<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
    <?php    
        //const em caixa alta
        define('BD_URL', 'endereco_bd_dev');
        define('BD_USUARIO', 'usuario_dev');
        define('BD_SENHA', 'senha_dev');

        //sem necessidade do $

        echo BD_URL .'<br>';
        echo BD_USUARIO .'<br>' ;
        echo BD_SENHA .'<br>';
    ?>
</body>
</html>