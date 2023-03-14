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
            <Flex width="80vw" minHeight="12.5vh" flexDir={["column", "row"]} padding="1em" justifyContent={["center", "space-between"]} alignItems={["start",'center']} flexGrow="1" overflow="auto">
                {/* <Image src={image} alt="Project image" width="75" height="75"/> */}
                <Link href={link}><u><Text fontSize="1.75rem" paddingRight="1em" paddingLeft={["0em", "1.5em"]} fontWeight="bold">{name}</Text></u></Link>
                <Flex flexDir='row' justifyContent="end" alignItems="center" flexGrow='1'>
                <Text marginRight={["2em", "3em"]} textAlign={["left", "right"]}>{description}</Text>
                </Flex>
            </Flex>
        </nav>
    );
};

export default Project;
