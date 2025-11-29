import { Roboto } from 'next/font/google';
import React from 'react';
import { StoreProvider } from '@/_01_shared/store/provider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './global.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <StoreProvider>{children}</StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
