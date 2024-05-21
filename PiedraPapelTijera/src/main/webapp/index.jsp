<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Juego de Piedra, Papel o Tijera</title>
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="script/script.js" defer></script>
</head>
<body>
<div class="contenedor1 morado">
    <label for="piedra">
        <input type="radio" value="1" name="opcion" id="piedra">
        <img src="img/piedra.png" alt="Piedra" class="col-6">
    </label>
    <label for="papel">
        <input type="radio" value="2" name="opcion" id="papel">
        <img src="img/papel.png" alt="Papel" class="col-6">
    </label>
    <label for="tijera">
        <input type="radio" value="3" name="opcion" id="tijera">
        <img src="img/tijera.png" alt="Tijera" class="col-6">
    </label>
    <div class="maquina centrado" >
        <img src="" alt="respuesta maquina" id="respuestaMaquina" class="col-6">
    </div>
    <div class="contenedor2 col-4">
        <p class="centrado" id="mensaje"></p>
        <h2 id="contador" class="centrado">Usuario:0 | Máquina:0</h2>
        <div class="cajaFlex col-12 botones">
            <button class="boton" id="nuevaP" style="display:none;">Iniciar nueva partida</button>
            <button class="boton" id="salir" style="display:none;">Salir de partida</button>
        </div>
    </div>
</div>
</body>
</html>
</html>