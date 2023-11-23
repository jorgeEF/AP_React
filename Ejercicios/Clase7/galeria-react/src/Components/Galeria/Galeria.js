import { Box, Button, Input, VStack, HStack, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Galeria = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

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

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={4} align="center">
          <Input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch} colorScheme="teal">
            Search
          </Button>
          <Grid templateColumns="repeat(6, 1fr)" gap={4}>
            {images.map((image) => (
              <motion.img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                whileHover={{ scale: 1.1 }}
                gridColumn="span 1"
              />
            ))}
          </Grid>
          <HStack>
            <Button onClick={handlePrevPage} disabled={page === 1}>
              Previous Page
            </Button>
            <Button onClick={handleNextPage}>Next Page</Button>
          </HStack>
        </VStack>
      </motion.div>
    </Box>
  );
};
