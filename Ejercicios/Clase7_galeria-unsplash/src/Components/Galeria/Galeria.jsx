import { Button, Box, Text, VStack, HStack, Grid, Modal, ModalOverlay, ModalContent, ModalBody, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Galeria = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?page=${page}&query=${searchTerm}&client_id=${accessKey}`
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm, page, accessKey]);

  const handleSearch = () => {
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };  

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={4} align="center">          
          <Text fontSize='2xl'>Galería usplash</Text>
          <HStack>
            <Button onClick={handlePrevPage} disabled={page === 1}>
              Anterior
            </Button>
            <Button onClick={handleNextPage}>Siguiente</Button>
          </HStack>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} autoRows="200px">
            {images.map((image) => (
              <motion.img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                whileHover={{ scale: 1.1 }}
                style={{ maxHeight: '25vh', objectFit: 'cover', width: '100%', height: '100%', borderRadius: '15px', cursor: 'pointer' }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </Grid>
        </VStack>
      </motion.div>      
      <Modal isOpen={selectedImage !== null} onClose={handleCloseModal} size="6xl" closeOnOverlayClick={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={4} textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Image src={selectedImage?.urls?.full} alt={selectedImage?.alt_description} maxW="100%" maxH="80vh" objectFit="contain" />
            <Button mt={4} colorScheme="teal" onClick={handleCloseModal}>Cerrar</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
