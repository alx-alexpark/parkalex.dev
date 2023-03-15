import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Flex justifyContent={["center", "space-around"]} alignItems={["start", "center"]} flexDirection={["column", "row"]} width="50vw" position="absolute" top="0" left="0" color="white" style={{fontFamily: 'JetBrains Mono', paddingTop: '0.5em'}} fontSize={["2.5em", "1.6em"]} >
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/projects">Projects</Link>
      </Flex>
    </nav>
  );
};

export default Navigation;
