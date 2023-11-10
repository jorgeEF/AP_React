import React,{useState} from 'react';
import { Card, Stack, Heading, Divider, CardBody, CardFooter, Button, ButtonGroup, Image, Text, Box } from '@chakra-ui/react'

export const ProductDetails = ({title,img,description,price,sku,stock}) => {
  const [cantidad, setCantidad] = useState(1)

  const sumarProducto = () => {
    setCantidad(cantidad+1)
  }

  const restarProducto = () => {
    setCantidad(cantidad-1)
  }

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={img}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            Descripción: {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            Precio: {price}
          </Text>
          <Text>
            Cantidad disponible: {stock}
          </Text>
          <Text>
            SKU: {sku}
          </Text>
          <Text fontSize='1.2rem'>
            Cantidad a comprar: {cantidad} unidades
          </Text>
          <Box display='flex' justifyContent='center' alignItems='center' gap='5px'>              
              <Button onClick={restarProducto} isDisabled={cantidad==1?true:false} colorScheme='red' size='xs'>Restar</Button>
              <Button onClick={sumarProducto} isDisabled={cantidad>=stock?true:false} colorScheme='green' size='xs'>Sumar</Button>              
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display='flex' justifyContent='space-around'>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Comprar
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}