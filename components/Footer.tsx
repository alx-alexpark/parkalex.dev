import { Flex, Text } from "@chakra-ui/react";

const Footer = (): JSX.Element => {
    return (
        <Flex backgroundColor="white" width="100vw" height="7.5vh" justifyContent="start" alignItems="center" paddingLeft="1em" marginTop="3em">
            <Text fontFamily="Jetbrains Mono" fontSize="1em">Made with Next.JS | Alexander Park | v1.1.0</Text>
        </Flex>
    );
}

export default Footer;