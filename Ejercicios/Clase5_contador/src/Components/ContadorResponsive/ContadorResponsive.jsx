import React, { useState } from 'react';
import { Stack, Text, Button, Center } from '@chakra-ui/react';

export const ContadorResponsive = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        setContador(contador - 1);
    };

    const obtenerColorDeFondo = () => {
        const porcentaje = (contador / 100) * 100;
        const colorR = 255 - Math.round((155 * porcentaje) / 100);
        const colorG = 255 - Math.round((255 * porcentaje) / 100);
        const colorB = 255;

        return `rgb(${colorR}, ${colorG}, ${colorB})`;
    };

    return (
        <>
            <Center
                bg={obtenerColorDeFondo()}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                width="100vw"
            >
                <Stack
                    p={4}
                    borderRadius="20px"
                    bg="rgba(50,50,50,0.5)"
                    spacing={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height={{ base: '50vh', md: '30vh' }}
                    width={{ base: '75vw', md: '30vw' }}
                >
                    <Text fontSize={{ base: '1.2rem', md: '1.5rem' }} textAlign="center" color="white">
                        Contador Responsive
                    </Text>
                    <Text fontSize={{ base: '1.1rem', md: '1.3rem' }} textAlign="center" color="white">
                        {contador}
                    </Text>

                    <Stack
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        spacing={4}
                        align="center"
                        flexDirection={{ base: 'column', md: 'row' }}>
                        <Button onClick={restar} isDisabled={contador === 0} colorScheme="red">
                            Restar
                        </Button>
                        <Button onClick={incrementar} isDisabled={contador === 100} colorScheme="green">
                            Sumar
                        </Button>
                    </Stack>
                </Stack>
            </Center>
        </>
    );
};
