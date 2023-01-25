import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <script defer data-domain="parkalex.dev" src="https://analytics.projectsegfau.lt/js/script.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
