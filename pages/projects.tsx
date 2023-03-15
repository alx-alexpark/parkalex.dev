import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import styles from '/styles/Projects.module.css';
import Footer from '../components/Footer';
import Link from 'next/link';
import Project from '../components/Project';



export const Projects = (): JSX.Element => {
    // let { height, width } = useWindowDimensions();
    return (
        <Layout>
            <div>
                <Flex flexDirection="column" style={{ padding: '0px', height: '100vh', width: '100vw' }} flexDir="row">
                    <Flex fontSize={["4em", "9em"]} style={{ flex: '1', backgroundColor: 'black' }} alignItems="center" justifyContent="end">
                        <Text className={styles.nameHeaderText} style={{ color: 'white', paddingRight: '0.1em' }}>Proj</Text>
                    </Flex>
                    <Flex fontSize={["4em", "9em"]} style={{ flex: '1', backgroundColor: 'white' }} alignItems="center">
                        <Text className={styles.nameHeaderText} style={{ color: 'black', paddingLeft: '0.1em' }}>ects</Text>
                    </Flex>
                </Flex>

                <Flex className={styles.projectsList}>
                    <Project name="Project Segfault" description="An organization dedicated to increasing privacy on the internet" link="https://projectsegfau.lt"/>
                    <Project name="Funny-Bunny.Ninja" description="A used Dell Poweredge r720 being repurposed to run my own cloud." link="https://crypt.funny-bunny.ninja"/>
                    <Project name="UnFlash" description="Flashcards that help you remember meaning, not defenition" link="https://devpost.com/software/unflash"/>
                    <Project name="LongUrl" description="A stupid website I made years ago that makes your links longer, not shorter" link="https://longurl.bernygg.repl.co"/>
                    <Project name="SharePlane" description="Uber but for planes, for easy private chartering" link="https://devpost.com/software/planer" />
                    
                </Flex>

                <Footer />
            </div>
        </Layout>
    )
};


export default Projects;
