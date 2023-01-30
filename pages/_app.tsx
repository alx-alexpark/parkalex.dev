import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import MobileMessage from '../components/Mobile';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  let isMobile = false;

  const [width, setWidth] = useState<number>(1920);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  isMobile = width <= 850;
  return !isMobile ? (
    <ChakraProvider>
      <script defer data-domain="parkalex.dev" src="https://analytics.projectsegfau.lt/js/script.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Component {...pageProps} />
    </ChakraProvider>
  ) : <ChakraProvider><MobileMessage/></ChakraProvider>;
};

export default MyApp;
