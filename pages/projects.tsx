import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import styles from '/styles/Project.module.css';
import Footer from '../components/Footer';
import Link from 'next/link';



export const Projects = (): JSX.Element => {
    // let { height, width } = useWindowDimensions();
    return (
        <Layout>
            <div>
                <Flex flexDirection="column" style={{ padding: '0px', height: '100vh', width: '100vw' }} flexDir="row">
                    <Flex style={{ flex: '1', backgroundColor: 'black' }} alignItems="center" justifyContent="end">
                        <h1 className={styles.nameHeaderText} style={{ color: 'white', paddingRight: '0.1em' }}>Proj</h1>
                    </Flex>
                    <Flex style={{ flex: '1', backgroundColor: 'white' }} alignItems="center">
                        <h1 className={styles.nameHeaderText} style={{ color: 'black', paddingLeft: '0.1em' }}>ects</h1>
                    </Flex>
                </Flex>
              

                <Footer />
            </div>
        </Layout>
    )
};


export default Projects;
