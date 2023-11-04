const resultado = document.querySelector('#resultado');
const btnSumar = document.querySelector('#sumar');
const btnRestar = document.querySelector('#restar');
const btnMultiplicar = document.querySelector('#multiplicar');
const btnDividir = document.querySelector('#dividir');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    resultado.textContent = '0';
});


btnSumar.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    Sumar(a, b, MostrarResultado);
});

btnRestar.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    Restar(a, b, MostrarResultado);
});

btnMultiplicar.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    Multiplicar(a, b, MostrarResultado);
});

btnDividir.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    Dividir(a, b, MostrarResultado);
});

function MostrarResultado(operacion, c) {
    resultado.textContent = `${operacion} = ${c}`;
}

function Sumar(a, b, callback) {
    let c = a + b;     
    callback(`${a} + ${b}`, c);
}

function Restar(a, b, callback) {
    let c = a - b;
    callback(`${a} - ${b}`, c);
}

function Multiplicar(a, b, callback) {
    let c = a * b;
    callback(`${a} * ${b}`, c);
}

function Dividir(a, b, callback) {
    if (b !== 0) {
        let c = a / b;
        callback(`${a} / ${b}`, c);
    } else {
        resultado.textContent = "La división por 0 no está definida.";
    }
}
