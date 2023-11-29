import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {Galeria} from './Components/Galeria/Galeria'


function App() {  

  return (
    <ChakraProvider>
      <Galeria />
    </ChakraProvider>
  )
}

export default App
