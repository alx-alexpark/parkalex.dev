import { Flex, Text} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';

export const Wip = (): JSX.Element => {
  return (
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center" backgroundColor="black" flexDirection="column">
        <Text fontSize="6xl" color="white">WIP</Text>
        <Text color="white">Please check back later</Text>
        
    </Flex>
  );
};

export default Wip;
