import { Button, Box, Text, VStack, Grid, Modal, ModalOverlay, ModalContent, ModalBody, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Galeria = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?page=${page}&query=${searchTerm}&client_id=${accessKey}`
        );
        const data = await response.json();
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        console.error('Error obteniendo :', error);
      }
    };

    fetchData();
  }, [searchTerm, page, accessKey]);

  const handleSearch = () => {
    setPage(1);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={4} align="center">          
          <Text fontSize='2xl'>Galería Infinita</Text>
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