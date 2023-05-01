import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = (): JSX.Element => {
    return (
        <Flex backgroundColor="white" width="100vw" height="7.5vh" justifyContent="space-between" alignItems="center" paddingLeft="1em" paddingRight="1em" marginTop="3em">
            <Text fontFamily="Jetbrains Mono" fontSize="1em">Alexander Park | v2.2.0</Text>
            <Text fontFamily="Jetbrains Mono" fontSize="1em"><Link href="https://github.com/alx-alexpark/parkalex.dev"><u>Source Code</u></Link></Text>
        </Flex>
    );
}

export default Footer;