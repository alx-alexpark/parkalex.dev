import { ChakraProvider, extendTheme, ThemeProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const theme = extendTheme({
    fonts: {
      body: "Jetbrains Mono, monospace",
      heading: "Jetbrains Mono, monospace",
      mono: "Jetbrains Mono, monospace",
    },
    breakpoints: {
      'lg': '777px',
      'sm': '776px',
    }
  })
  return (
    <ChakraProvider>
      <Analytics />
      <ThemeProvider theme={theme}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default MyApp;
