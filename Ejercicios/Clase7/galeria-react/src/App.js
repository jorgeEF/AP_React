import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Galeria } from './Components/Galeria/Galeria';

const App = () => {  

  return (
    <ChakraProvider>
      <Galeria />
    </ChakraProvider>
  );
};

export default App;
