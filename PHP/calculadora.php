
<?php
    $n1 = 0;
    $n2 = 0;
    $resultado = 0;
    $calcular = "soma";

    if(isset($_GET['n1'],$_GET['n2'],$_GET['calcular'])){
        $n1 = $_GET['n1'];
        $n2 = $_GET['n2'];
        $calcular = $_GET['calcular'];

        switch($calcular){
            case 'soma':
                $resultado = $n1 + $n2;
                break;
            case 'subtrair':
                $resultado = $n1 - $n2;
                break;
            case 'mult':
                $resultado = $n1 * $n2;
                break;
            case 'div':
                $resultado = $n1 / $n2;
                break;
        }
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style_calculator.css">
    <title>PHP Calculator</title>
</head>
<body>
    <form>
        <h4>Primeiro número:</h4>
        <input type="number" name="n1" value=<?= $n1 ?>/> <br>
        <h4>Segundo número:</h4>
        <input type="number" name="n2" value=<?= $n2 ?>/> <br>

        <select name="calcular">
            <option value="soma">Somar</option>
            <option value="subtrair">Subtrair</option>
            <option value="mult">Multiplicar</option>
            <option value="div">Dividir</option>
        </select>
        <br><br>
        <input id="btn_calcular" type="submit" value="Calcular"/>
        <br><br>
        <!--$resultado = forma de representar o resultado dentro da web -->
        <p> O resultado é <?= $resultado ?></p>
    </form>
</body>
</html>