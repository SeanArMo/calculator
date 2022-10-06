const buttons = document.querySelectorAll('button');
const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clear-all');
const equal = document.querySelector('.equal');
const inout = document.querySelector('.input');

let sliced_data;

let calcOutput = document.createElement('p');
calcOutput.textContent = '';

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (num1, operator, num2) {
    switch (operator) {
        case '+': {
            return add(num1, num2);
            break;
        }
        case '-' : {
            return subtract(num1, num2);
            break;
        }
        case 'x' : {
            return multiply(num1, num2);
            break;
        }
        case '÷' : {
            return divide(num1, num2)
            break;
        }
        default: {
            console.log('invalid operator');
            break;
        }
    }
}

function getKeyValue (e) {
    let keyValue = e['srcElement']['innerHTML'];
    return keyValue;
}

buttons.forEach(button => button.addEventListener('click', () => {
    button.classList.add('animation')
}));
buttons.forEach(button => button.addEventListener('transitionend', () => {
    button.classList.remove('animation');
}));

numberKeys.forEach(numberKey => numberKey.addEventListener('click', (e) => {
    calcOutput.textContent = `${calcOutput.textContent + getKeyValue(e)}`
    inout.appendChild(calcOutput);
}));

operatorKeys.forEach(operatorKey => operatorKey.addEventListener('click', (e) => {
    calcOutput.textContent = `${calcOutput.textContent + getKeyValue(e)}`
    inout.appendChild(calcOutput);
}));

clear.addEventListener('click', () => {
    calcOutput.textContent = calcOutput.textContent.slice(0, calcOutput.textContent.length - 1);
});

clearAll.addEventListener('click', () => {
    calcOutput.textContent = calcOutput.textContent.slice(0, calcOutput.textContent.length - calcOutput.textContent.length);
});

equal.addEventListener('click', () => {
    sliced_data = calcOutput.textContent.split(' ');
    let num1 = Number(sliced_data[0]);
    let operator = sliced_data[1];
    num2 = Number(sliced_data[2]);

    calcOutput.textContent =  operate(num1, operator, num2);

    inout.appendChild(calcOutput);
});