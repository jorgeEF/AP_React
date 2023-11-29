import { useState } from 'react'
import { Formulario } from './Components/Formulario/Formulario'
import FormikForm from './Components/Formik/FormularioFormik'


function App() {
  const [count, setCount] = useState(0)

  return (    
    <>
      <Formulario />
      <FormikForm />
    </>  
  )
}

export default App
