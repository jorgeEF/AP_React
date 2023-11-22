import { useEffect, useState } from 'react'

export const Fetch = () => {

  const [paises,setPaises] = useState([]);
  const [busqueda,setBusqueda] = useState('')

  const buscarPais = (e) => {
    setBusqueda(e.target.value)
  }  
  
  //useEffect(funcion anonima, dependencia)
  // 3 tipos dependencias: 
  // 1. sin dependencia se ejecuta siempre
  // 2. [] : se ejecuta una sola vez
  // 3. [variable] se renderiza cuando un valor de variable cambia
  useEffect(()=>{
    const cargarDatos=async ()=>{
      const response=await fetch("JSON/Paises.json")
      const data=await response.json()      
      setPaises(data)
    }
    cargarDatos()
  }, [])

  const paisesFiltrados = paises.filter((pais=>pais.nombre.toLowerCase().includes(busqueda.toLowerCase())));
  
  return (
    <>
    <input type="text" placeholder="busca pais..." value={busqueda} onChange={buscarPais}/>
      {paisesFiltrados.map((pais)=>(
        <div key={pais.id}>
          <div className="card mt-5">
            <div className="card-title"><h2>{pais.nombre}</h2></div>
            <div className="card-body">              
                <p>Colores en su bandera: {pais.colores_bandera}</p>            
            </div>
          </div>
        </div> 
      )
      )}
      
    </>
  )
}
