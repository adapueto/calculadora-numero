
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').ariaValueNow);
    const num2 = parseFloat(document.getElementById('number2').ariaValueNow);
    const resultElement = document.getElementById('result');

    // Validar que los números sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Error';
        return;
    }

    // Realizar la operación seleccionada
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 == 0) {
                resultElement.textContent = 'No se puede dividir entre 0.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'Operación no válida';
    }

    // Mostrar el resultado
    console.log(resultElement);
    resultElement.textContent = result;
}