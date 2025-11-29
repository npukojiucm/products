'use client';

import { JSX } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export const BackBtn = (): JSX.Element => {
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        sx={{
          width: 'max-content',
          height: '3.2rem',
          whiteSpace: 'nowrap',
        }}
        onClick={() => router.back()}
      >
        Back
      </Button>
    </Box>
  );
};
