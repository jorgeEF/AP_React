import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <Box>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <input
                        type="text"
                        placeholder="Search images..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div>
                    {images.map((image) => (
                        <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                    ))}
                </div>
                <button onClick={handleLoadMore}>Load More</button>
            </motion.div>
        </Box>
    );
};
