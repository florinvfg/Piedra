window.onload = function() {
    let contadorU = 0;
    let contadorM = 0;
    let div = document.querySelector(".maquina");
    let img = document.querySelector("#respuestaMaquina");
    let userOptions = document.querySelectorAll('input[type=radio][name="opcion"]');
    let mensaje = document.querySelector("#mensaje");
    let contador = document.querySelector("#contador");
    let nuevaP = document.querySelector("#nuevaP");
    let salir = document.querySelector("#salir");

    userOptions.forEach(function(userOption) {
        userOption.addEventListener("click", function() {
            mensaje.innerHTML = "";
            if (this.checked) {
                let userResp = parseInt(this.value);
                let maq = Math.floor(Math.random() * 3) + 1;
                div.style.visibility = "visible";
                div.classList.add("maquina-respuesta");

                switch (maq) {
                    case 1:
                        img.src = "img/piedra.png";
                        break;
                    case 2:
                        img.src = "img/papel.png";
                        break;
                    case 3:
                        img.src = "img/tijera.png";
                        break;
                }

                let msm;
                if (userResp === maq) {
                    msm = "Empate";
                } else if (userResp === 1 && maq === 2 || userResp === 2 && maq === 3 || userResp === 3 && maq === 1) {
                    contadorM++;
                    msm = "Gana la Máquina";
                } else {
                    contadorU++;
                    msm = "Ganas Tú";
                }

                mensaje.innerHTML = msm;
                contador.innerHTML = `Usuario: ${contadorU} | Máquina: ${contadorM}`;

                if (contadorU === 10 || contadorM === 10) {
                    mostrarGanador();
                }
            }
        });
    });

    function mostrarGanador() {
        userOptions.forEach(function(userOption) {
            userOption.disabled = true;
        });

        let resultadoFinal = document.createElement('p');
        if (contadorU === 10) {
            resultadoFinal.textContent = "¡Felicidades! Has ganado la partida.";
        } else {
            resultadoFinal.textContent = "La máquina ha ganado la partida. Mejor suerte la próxima vez.";
        }

        document.body.appendChild(resultadoFinal);
        nuevaP.style.display = "inline-block";
        salir.style.display = "inline-block";

        nuevaP.addEventListener("click", function() {
            location.reload();
        });

        salir.addEventListener("click", function() {
            window.close();
        });
    }
}
