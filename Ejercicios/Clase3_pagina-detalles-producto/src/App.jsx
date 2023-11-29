import './App.css'
import {Productos} from "./Utils/Productos.js"
import { ProductDetails } from './Components/ProductDetails/ProductDetails.jsx'

function App() {  

  return (
    <>   
      {Productos.map(producto=><ProductDetails key={producto.id} title={producto.title} img={producto.img} description={producto.description} price={producto.price} sku={producto.sku} stock={producto.stock} />)}
    </>
  )
}

export default App
