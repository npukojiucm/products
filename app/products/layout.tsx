import { JSX, ReactNode } from 'react';
import Container from '@mui/material/Container';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {children}
    </Container>
  );
}
