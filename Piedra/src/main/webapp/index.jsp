<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Piedra, Papel o Tijera</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<header class="header">
    <h1 class="titulo">Juego de Piedra, Papel o Tijera</h1>
</header>
<main>
    <div class="game-container">
        <div class="choices">
            <button id="rock" class="choice">Piedra</button>
            <button id="paper" class="choice">Papel</button>
            <button id="scissors" class="choice">Tijera</button>
        </div>
        <div class="result">
            <p id="result-message"></p>
        </div>
    </div>
</main>
<footer class="footer">
    <p>&copy; 2024 Juego de Piedra, Papel o Tijera</p>
</footer>

<script src="script/piedra.js"></script>
</body>
</html>
