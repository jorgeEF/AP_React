// metodos
//.palabra();

// propiedad
//.palabra

// arreglos
let numeros=[4,45,25,75,346]

// metodos básicos de arreglos
let push = numeros.push(33);
let unshift = numeros.unshift(4);
console.log(numeros);
console.log("push: ", push);
console.log("unshift: ", unshift);

// metodos avanzados en arreglos
let avanzado = numeros.map(numero=>numero+100);
console.log("avanzado: ", avanzado);

let filtro = numeros.filter(numero=>numero>25)
console.log("filtro: ", filtro);

numeros.forEach(numero=>console.log("foreach: ", numero));

numeros.forEach((numero,i)=>{console.log(`foreach i en: ${i}, numero: ${numero}`)});


