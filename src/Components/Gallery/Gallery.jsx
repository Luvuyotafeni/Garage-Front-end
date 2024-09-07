import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import itemData from './card'; // Import itemData

const Gallery = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className='text-center mb-2'>Gallery</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {itemData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.img}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt={item.title}
                  style={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Gallery;
