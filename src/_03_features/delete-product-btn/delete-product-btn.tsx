'use client';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useAppDispatch } from '@/_01_shared/store/hooks';
import { removeProduct } from '@/_02_entities/product/model/product.slice';
import { DeleteProductModal } from '@/_03_features/delete-product-btn/delete-product-modal';

export const DeleteProductBtn = ({ productId }: { productId: number }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeProduct(productId));
    setOpen(false);
  };

  return (
    <>
      <IconButton color="error" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>

      <DeleteProductModal open={open} onCloseAction={handleClose} onConfirmAction={handleDelete} />
    </>
  );
};
