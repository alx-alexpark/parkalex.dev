import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type ProjectProps = {
    name: string,
    link: string,
    description: string,
}

const Project = ({ name, link, description }: ProjectProps): JSX.Element => {
    return (
        <nav>
            <Flex width="80vw" maxHeight="12.5vh" flexDir="row" padding="1em" justifyContent="space-between" alignItems='center' overflow="auto">
                {/* <Image src={image} alt="Project image" width="75" height="75"/> */}
                <Text fontSize="1.75rem" paddingRight="1.5em">{name}</Text>
                <Flex flexDir='row' justifyContent="end" alignItems="center" flexGrow='1'>
                <Text marginRight="2em" textAlign="right">{description}</Text>
                <Link href={link}>
                    <Flex backgroundColor="black" height="3.5em" width="10em" alignItems="center" justifyContent="center">
                        <Text textColor="white">Visit!</Text>
                    </Flex>
                </Link>
                </Flex>
            </Flex>
        </nav>
    );
};

export default Project;
