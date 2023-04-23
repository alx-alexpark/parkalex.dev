import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import { PostType } from '../types/post';
import styles from '/styles/Contact.module.css';
import Footer from '../components/Footer';
import Link from 'next/link';



export const Contact = (): JSX.Element => {
    // let { height, width } = useWindowDimensions();
    return (
        <Layout>
            <div>
                <Flex flexDirection="column" style={{ padding: '0px', height: '100vh', width: '100vw' }} flexDir="row">
                    <Flex style={{ flex: '1', backgroundColor: 'black' }} alignItems="center" justifyContent="end">
                        <Text fontSize={["3.5em", "9em"]} className={styles.nameHeaderText} style={{ color: 'white', paddingRight: '0.1em' }}>Cont</Text>
                    </Flex>
                    <Flex style={{ flex: '1', backgroundColor: 'white' }} alignItems="center">
                        <Text fontSize={["3em", "9em"]} className={styles.nameHeaderText} style={{ color: 'black', paddingLeft: '0.1em' }}>act Me</Text>
                    </Flex>
                </Flex>
                <Flex width={["90vw", "80vw"]} className={styles.contactBody} flexDir="column" gap="1em">
                    <Text fontSize={["2em", "2.5em"]}>$ man contact</Text>
                    <Text>If you find yourself needing to contact me, then you are at the right place.</Text>
                    <Text>If you want a fast response, and want to use a platform which respects your privacy, contact me through <Link href="https://matrix.to/#/@openssl_rand:projectsegfau.lt"><u>Matrix</u></Link>.</Text>

                    <Text>You should use strong encryption when contacting me!</Text>

                    <Text>My PGP key has the fingerprint 24A3B83FB26AA900</Text>
                    
                    <Text>I can also cryptographically verify my identity, check out <Link href="https://keyoxide.org/me%40parkalex.dev"><u>Keyoxide</u></Link></Text>

                    <Text>Email: <Link href="mailto:me@parkalex.dev"><u>me@parkalex.dev</u></Link></Text>


                </Flex>

                <Footer />
            </div>
        </Layout>
    )
};


export default Contact;
