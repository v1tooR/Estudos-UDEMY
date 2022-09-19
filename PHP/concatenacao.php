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
        $nome = 'Victor';
        $cor = 'Vermelho';
        $idade = 25;
        $amar = 'Marcella';
    
        echo 'Olá '. $nome .', vi que sua cor preferida é '.$cor .', estou vendo também que sua idade é '. $idade .' e que você ama a '. $amar;

        echo '<br>';
        echo "Olá $nome"; // utilizando aspas duplas
    ?>
</body>
</html>