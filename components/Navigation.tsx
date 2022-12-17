import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Flex justifyContent="space-around" width="50vw" position="absolute" top="0" left="0" color="white" style={{fontFamily: 'JetBrains Mono', fontSize: '1.6em', paddingTop: '0.5em'}}>
              <Link href="/">Home</Link>
              <Link href="/wip">Contact</Link>
              <Link href="/wip">Projects</Link>
      </Flex>
    </nav>
  );
};

export default Navigation;
