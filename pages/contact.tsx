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

                    <Text>If you must contact me through an insecure medium (e.g. Discord, Email), please encrypt your messages using my GPG key. </Text>

                    <Text>My key has the fingerprint 24A3B83FB26AA900</Text>

                    <code> $ gpg --keyserver keyserver.ubuntu.com --recv-keys 24a3b83fb26aa900 </code>

                    <Text>For maximum security, verify key integrity over multiple keyservers</Text>

                    <Text>Email: <Link href="mailto:me@parkalex.dev"><u>me@parkalex.dev</u></Link></Text>


                </Flex>

                <Footer />
            </div>
        </Layout>
    )
};


export default Contact;
