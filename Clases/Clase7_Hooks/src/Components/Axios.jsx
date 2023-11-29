import { useEffect, useState } from 'react'
import axios from 'axios'

export const Axios = () => {

  const URL_BASE='https://rickandmortyapi.com/api/character'

  const [personajes,setPersonajes] = useState([]);
  const [busqueda,setBusqueda] = useState('')
  const [pagina,setPagina] = useState(1)
  
  
  useEffect(()=>{
    const cargarDatos=async ()=>{
      const response=await axios.get(`${URL_BASE}?page=${pagina}`)
      setPersonajes(response.data.results)
    }
    cargarDatos()
  }, [pagina])

  const buscarPersonaje = (e) => {
    setBusqueda(e.target.value)
  }

  const siguiente = () => {
    setPagina(pagina+20)
  }

  const anterior = () => {
    setPagina(pagina-20)
  }

  const personajesFiltrados = personajes.filter((personaje=>personaje.name.toLowerCase().includes(busqueda.toLowerCase())));
  
  return (
    <div className='container'>
      <div className="header d-flex gap-2">
        <input type="text" placeholder="busca personaje..." value={busqueda} onChange={buscarPersonaje}/>
        <button onClick={anterior}>Anterior</button>
        <button onClick={siguiente}>Siguiente</button>
      </div>    
        {personajesFiltrados.map((personaje)=>(
          <div key={personaje.id}>
            <div className="card mt-5">
              <img src={personaje.image} className="card-img-top" alt={personaje.name} />
              <div className="card-title"><h2>{personaje.name}</h2></div>
              <div className="card-body">              
                  <p>Caracteristicas: {personaje.status}</p>            
              </div>
            </div>
          </div> 
        )
        )}      
    </div>
  )
}
