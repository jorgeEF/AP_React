// API (interfaz de programacion de aplicaciones)

// json: arreglo de objetos
[{"persona":"juan"},{"persona":"pepe"}]

// objeto js
let objeto = {
    persona: "Juan"    
}
//console.log(objeto);

// Consultando API: https://rickandmortyapi.com/api/character
// a través de funcion

const tarjetas = document.querySelector(".tarjetas");

const getPersonajes = ()=>{    
    fetch('https://rickandmortyapi.com/api/character')
    .then((res)=>res.json())
    .then((data)=>mostrarPersonajes(data.results));
}

getPersonajes();

const mostrarPersonajes=(personajes)=>{
    personajes.map((personaje)=>{    
        tarjetas.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${personaje.status}</h6>
          <p class="card-text">${personaje.gender}</p>
          <a href="#" class="card-link"></a>
          <a href="#" class="card-link"></a>
        </div>
      </div>
        `
    })
}