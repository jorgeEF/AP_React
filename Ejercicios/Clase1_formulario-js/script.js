let tipoSeguro = document.querySelector('#tiposeguro');
let mostrarPrecio = document.querySelector('.mostrarPrecio');

tipoSeguro.addEventListener('change', actualizarContenido);

function actualizarContenido() {
    let seleccion = tipoSeguro.value;
    switch (seleccion) {
        case "basico":
            mostrarPrecio.textContent = 'Costo: $500';     
            break;
        case "intermedio":
            mostrarPrecio.textContent = 'Costo: $1000';     
            break;
        case "premium":
            mostrarPrecio.textContent = 'Costo: $1500';    
            break;          
    }
}

actualizarContenido();
