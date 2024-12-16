
function calculate(operation) {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
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
                resultElement.textContent = 'No es posible';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'No válida';
    }

    // Mostrar el resultado
    resultElement.textContent = result;
}