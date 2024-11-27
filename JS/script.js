// Función para sumar
function calculateSum() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    displayResult(num1 + num2);
}

// Función para restar
function calculateSubtract() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    displayResult(num1 - num2);
}

// Función para multiplicar
function calculateMultiply() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    displayResult(num1 * num2);
}

// Función para dividir
function calculateDivide() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    if (num2 === 0) {
        document.getElementById('result').textContent = 'No se puede dividir entre 0.';
    } else {
        displayResult(num1 / num2);
    }
}

// Función genérica para mostrar el resultado
function displayResult(result) {
    const resultElement = document.getElementById('result');
    if (isNaN(result)) {
        resultElement.textContent = 'Por favor, ingresa números válidos.';
    } else {
        resultElement.textContent = result;
    }
}
