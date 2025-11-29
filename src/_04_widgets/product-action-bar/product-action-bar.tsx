import { JSX } from 'react';
import Box from '@mui/material/Box';
import { FavoriteProductBtn } from '@/_03_features/favorite-product-btn/favorite-product-btn';
import { DeleteProductBtn } from '@/_03_features/delete-product-btn/delete-product-btn';
import { EditProductBtn } from '@/_03_features/edit-product-btn/edit-product-btn';

export const ProductActionBar = ({ productID }: { productID: number }): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FavoriteProductBtn productId={productID} />
      <EditProductBtn productID={productID} />
      <DeleteProductBtn productId={productID} />
    </Box>
  );
};
