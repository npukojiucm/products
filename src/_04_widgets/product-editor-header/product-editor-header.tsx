'use client';

import { Box, Divider, Typography } from '@mui/material';
import { JSX } from 'react';
import { useAppSelector } from '@/_01_shared/store/hooks';

export const ProductEditorHeader = ({ productID }: { productID?: number }): JSX.Element => {
  const product = useAppSelector((s) => s.products.items.find((p) => p.id === productID));

  return (
    <Box
      sx={{
        mb: 3,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
        }}
      >
        {product ? `Update product - ${product.title}` : 'Create new product'}
      </Typography>
      <Divider />
    </Box>
  );
};
