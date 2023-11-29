import './App.css'
import {Card} from "./Components/Card.jsx"
import {Section} from "./Components/Section.jsx"
import {ChakraProvider} from "@chakra-ui/react"

function App() {
  
  const productos = [
    {
    "id": "MLA325235",
    "title": "Motorola G6 Plus",
    "price": 28500,
    "condition": "new",
    "free_shipping": false,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dBJApnW5rDugKHyAlyvCXH2Bc7x7KNQY3x71VZXy0UtUFRxn0F4WiOpqEIwxBZbUDJ0&usqp=CAU"
  },
  {
    "id": "MLA31245",
    "title": "Motorola G8",
    "price": 42000,
    "condition": "new",
    "free_shipping": true,
    "img": "https://www.perusmart.com/wp-content/uploads/Motorola-g8-peru-450x321.jpg"
  },
]

  return (
    <>
      <div>
        <ChakraProvider>
          <Section />
        </ChakraProvider>
          
        {productos.map(producto=><Card key={producto.id} img={producto.img} title={producto.title} price={producto.price} condition={producto.condition} free_shipping={producto.free_shipping} id={producto.id} />)}
        
      </div>
    </>
  )
}

export default App
