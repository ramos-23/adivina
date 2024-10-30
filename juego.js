let numeroSecreto;
let intentos;

function startGame() {
    numeroSecreto = Math.floor(Math.random() * 101); // Genera un número aleatorio entre 0 y 100
    intentos = 0;
    document.getElementById('feedback').innerText = '';
    document.getElementById('guessInput').value = '';
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    intentos++;

    if (isNaN(guess) || guess < 0 || guess > 100) {
        document.getElementById('feedback').innerText = 'Por favor, ingresa un número válido entre 0 y 100.';
    } else if (guess < numeroSecreto) {
        document.getElementById('feedback').innerText = 'El número es mayor.';
    } else if (guess > numeroSecreto) {
        document.getElementById('feedback').innerText = 'El número es menor.';
    } else {
        document.getElementById('feedback').innerText = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    }
}

window.onload = startGame;
