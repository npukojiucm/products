'use client';

import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

export const EditProductBtn = ({ productID }: { productID: number }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/products/${productID}/edit`);
  };

  return (
    <>
      <IconButton color="error" onClick={handleClick}>
        <EditIcon />
      </IconButton>
    </>
  );
};
