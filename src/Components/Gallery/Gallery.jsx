import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from './card'; // Import itemData

const Gallery = () => {
  return (
    <div>
      <h2>Gallery</h2>
      <Box
        sx={{
          width: {
            xs: '100vw', // 100% width for extra small screens
            sm: '100vw', // 100% width for small screens
            md: '80vw',  // 80% width for medium screens
            lg: '70vw',  // 70% width for large screens
          },
          height: {
            xs: '100vh', // 100% height for extra small screens
            sm: '100vh', // 100% height for small screens
            md: '80vh',  // 80% height for medium screens
            lg: '70vh',  // 70% height for large screens
          },
          overflowY: 'scroll',
        }}
      >
        <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default Gallery;
