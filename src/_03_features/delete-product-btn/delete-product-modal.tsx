'use client';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';

export const DeleteProductModal = ({
  open,
  onCloseAction,
  onConfirmAction,
}: {
  open: boolean;
  onCloseAction: (e: React.MouseEvent) => void;
  onConfirmAction: (e: React.MouseEvent) => void;
}) => {
  return (
    <Modal open={open} onClose={onCloseAction}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 360,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Delete product
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Are you sure you want to delete this product? This action cannot be undone.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 1 }}>
          <Button onClick={onCloseAction} variant="outlined">
            Cancel
          </Button>

          <Button onClick={onConfirmAction} color="error" variant="contained">
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
