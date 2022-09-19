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
        // As variaveis em php devem iniciar com o caracter '$' e conter apenas underline
        // Caso sensitive: $nome != $Nome != $NOME

        //string
        $nome = 'Victor da Silva';

        //inteiro
        $idade = 29;

        //float
        $peso = 82.5;

        //boolean
        $fumante_sn = true;
    ?>

    <h1>
        Ficha de nomes
    </h1>
    <p>Nome: <?= $nome ?></p>
    <p>Idade: <?= $idade ?></p>
    <p>Peso: <?= $peso ?></p>
    <p>Fumante: <?= $fumante_sn ?></p>
</body>
</html>