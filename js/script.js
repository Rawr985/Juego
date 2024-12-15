const solution = [6, 3, 9, 1];
let attempts = 3;

function checkNumber() {
    const inputs = document.querySelectorAll('.number-input');
    const guess = Array.from(inputs).map(input => parseInt(input.value));

    const message = document.getElementById('message');

    // Validar que todos los inputs tengan un número
    if (guess.some(isNaN)) {
        message.textContent = 'Completa todos los campos';
        return;
    }

    attempts--;

    if (JSON.stringify(guess) === JSON.stringify(solution)) {
        message.textContent = '¡Felicitaciones!!!!';
        message.style.color = 'green';
        disableInputs();
    } else if (attempts === 0) {
        message.textContent = 'Nos vemos en Febrero!!';
        message.style.color = 'red';
        disableInputs();
    } else {
        message.textContent = 'Intento incorrecto';
        message.style.color = 'red';
    }
}

function disableInputs() {
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach(input => input.disabled = true);
    document.querySelector('button').disabled = true;
}
