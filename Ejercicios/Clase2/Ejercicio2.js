function MostrarEnConsola(operacion, c){
    console.log(`La ${operacion} da ${c}`)
}

function Sumar(a,b,callback){
    let c = a + b;
    callback("suma", c);
}

function Restar(a,b,callback){
    let c = a - b;
    callback("resta", c);
}

function Multiplicar(a,b,callback){
    let c = a * b;
    callback("multiplicación", c);
}

function Dividir(a,b,callback){
    let c = a / b;
    callback("división", c);
}

Sumar(20, 5, MostrarEnConsola);
Dividir(100, 4, MostrarEnConsola);