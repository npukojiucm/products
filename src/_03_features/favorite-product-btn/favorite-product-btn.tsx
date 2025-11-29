import React, { JSX } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from '@/_01_shared/store/hooks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toggleLike } from '@/_02_entities/product/model/product.slice';
import { IconButton } from '@mui/material';

export const FavoriteProductBtn = ({ productId }: { productId: number }): JSX.Element => {
  const liked = useAppSelector((s) => s.products.liked.includes(productId));
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleLike(productId));
  };

  return (
    <>
      {liked ? (
        <IconButton color="error" onClick={handleClick}>
          <FavoriteIcon sx={{ color: 'red' }} />
        </IconButton>
      ) : (
        <IconButton color="error" onClick={handleClick}>
          <FavoriteBorderIcon
            sx={{
              '&:hover': {
                color: 'red',
              },
            }}
          />
        </IconButton>
      )}
    </>
  );
};
