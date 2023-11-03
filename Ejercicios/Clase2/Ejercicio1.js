/* Ejercicio 1
Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback();
}
¿Que es el tercer parámetro recibido?
Respuesta: es el parametro que se usara para llamar de forma dinamica a una funcion.

¿En que casos es obligatorio desarrollar este tipo de funciones?
Respuesta: En casos que se requiera realizar operaciones asincrónicas.

Realizar un llamado a la función de ejemplo. */

function suma (a,b,callback){
    let c = a +b;
    callback(c);
}

function MostrarEnConsola(c){
    console.log(c)
}

suma(20, 5, MostrarEnConsola);