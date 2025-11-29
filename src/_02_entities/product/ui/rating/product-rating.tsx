import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { JSX } from 'react';

export const ProductRating = ({ ratingValue }: { ratingValue: number }): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating value={ratingValue} readOnly />
      <Box>{ratingValue}</Box>
    </Box>
  );
};
