// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultMessage = document.getElementById('result-message');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.id;
            const computerChoice = getComputerChoice();
            const winner = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, winner);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Empate';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return '¡Ganaste!';
        } else {
            return 'Perdiste';
        }
    }

    function displayResult(userChoice, computerChoice, winner) {
        resultMessage.textContent = `Tú elegiste ${userChoice}, la computadora eligió ${computerChoice}. ${winner}`;
    }
});
