import React, {useState} from 'react'
import "./Section.css"
import { Box, Text, Button } from '@chakra-ui/react'

function Section() {

    const [contador,setContador] = useState(10);

    const incrementar = () => {
        setContador(contador+1);
    }

    const restar = () => {
        setContador(contador-1);
    }
    
  return (    
        <Box as="header" bg="tomato" h="400px" display='flex' flexDir='column' justifyContent='center' alignItems='center' gap='10px'>            
            
            <Text color={{base: 'white', md: 'black',lg:'gray'}} fontSize='25px' textAlign='center'>Soy una caja</Text>

            <Box display='flex' justifyContent='center' alignItems='center' as='header' bg='white' h='100px' w='300px'>
                <Box bg='black' color='white' w='50px' h='50px' display='flex' justifyContent='center' alignItems='center'>uno</Box>
                <Box bg='blue' color='white' w='50px' h='50px' display='flex' justifyContent='center' alignItems='center'>dos</Box>
                <Box bg='green' color='white' w='50px' h='50px' display='flex' justifyContent='center' alignItems='center'>tres</Box>
            </Box>
            <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' bg='grey' h='200px' w='200px' gap='5px'>
            <Text fontSize='25px' textAlign='center' color='white'>{contador}</Text>
                <Button onClick={incrementar} isDisabled={contador==10?true:false} colorScheme='green'>Sumar</Button>
                <Button onClick={restar} isDisabled={contador==0?true:false} colorScheme='red'>Restar</Button>
            </Box>
        </Box>
  )
}

export {Section}