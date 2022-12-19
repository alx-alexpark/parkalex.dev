import { Flex } from "@chakra-ui/react";

function MobileMessage() {
    return ( 
        <Flex justifyContent='center' alignItems='center' height="100vh" width="100vw" padding="1em"><h1>Please view my website on a device with a larger screen such as a desktop or laptop. If you are a already on a desktop or laptop, resize the window. Mobile support may come in the future.</h1></Flex>
    );
}

export default MobileMessage;