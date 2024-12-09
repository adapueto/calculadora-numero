function calcular(simbolo) {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');
    
    if (simbolo == "+") {
        displayResult(num1 + num2);

    }else if (simbolo == "-") {
        displayResult(num1 - num2);

    }else if (simbolo == "*"){
        displayResult(num1 * num2);

    }else if (simbolo == "/"){
        if (num2 == 0) {
            document.getElementById('result').textContent = 'No se puede dividir entre 0.';
        } else {
            displayResult(num1 / num2);
        } 
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    if (isNaN(result)) {
        resultElement.textContent = 'Por favor, ingresa números válidos.';
    } else {
        resultElement.textContent = result;
    }
}