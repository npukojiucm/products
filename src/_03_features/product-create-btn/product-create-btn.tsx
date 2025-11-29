'use client';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';

export const ProductCreateBtn = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{
          width: 'max-content',
          height: '3.2rem',
          whiteSpace: 'nowrap',
        }}
        onClick={() => router.push('/products/create-product')}
      >
        Create product
      </Button>
    </Box>
  );
};
