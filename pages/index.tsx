import { SimpleGrid, Box, Flex, Grid } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import styles from '/styles/Index.module.css';
import useWindowDimensions from '../utils/useWindowDimensions';
import {SocialIcon} from 'react-social-icons';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  let { height, width } = useWindowDimensions();
  if (typeof width === 'undefined') {
    return <h1>Unfortunately, Phone is unsupported. My website is very WIP, and may be mobile compatable in the future :D</h1>;
  }
  return width >= 600 ? (
    <Layout>
      <div className={styles.indexbody}>
        <Flex flexDirection="column" style={{padding: '0px', height:'100vh', width:'100vw'}} flexDir="row">
          <Flex style={{flex: '1', backgroundColor: 'black'}} alignItems="center" justifyContent="end">
            <h1 className={styles.nameHeaderText} style={{color: 'white', paddingRight: '0.1em'}}>Alex</h1>
          </Flex>
          <Flex style={{flex: '1', backgroundColor: 'white'}} alignItems="center">
            <h1 className={styles.nameHeaderText} style={{color: 'black', paddingLeft: '0.1em'}}>Park</h1>
          </Flex>

        </Flex>

        <div className={styles.indexbody}>
          {/* <Box className={styles.whoami}></Box>
          {posts.map((post) => (
            <article key={post.slug} className="mt-12">
              <p className="">{format(parseISO(post.date), 'MMMM dd, yyyy')}</p>
              <h1 className="mb-2 text-xl">
                <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                  {post.title}
                </Link>
              </h1>
              <p className="mb-3">{post.description}</p>
              <p>
                <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                  Read More
                </Link>
              </p>
            </article>
          ))} */}
          
          <Flex flexDirection="row" justifyContent="center">
          <div className={styles.lowerSection}>
            <div className={styles.whoami}>
              <h3 className={styles.whoamiTextMain}>$ whoami</h3>
              <p style={{fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5em'}}>I am a ...</p>
              <p className={styles.whoamiTextItem}>※ High schooler</p>
              <p className={styles.whoamiTextItem}>※ Developer/CS Nerd</p>
              <p className={styles.whoamiTextItem}>※ Linux Enjoyer</p>
            </div>
          </div>
          <Grid className={styles.socialIcons} style={{width: "20vw", marginRight: "6rem", gridTemplateColumns: "auto auto", rowGap: "5em", columnGap: "5em"}}>
            <SocialIcon fgColor='#000000' bgColor='#ffffff' url="https://github.com/alx-alexpark" className={styles.socialButton} style={{height: '6em', width: '6em'}}/>
            <SocialIcon fgColor='#000000' bgColor='#ffffff' url="me@parkalex.dev" network="email" className={styles.socialButton} style={{height: '6em', width: '6em'}}/>
            <SocialIcon fgColor='#000000' bgColor='#ffffff' url="https://github.com/alx-alexpark" className={styles.socialButton} style={{height: '6em', width: '6em'}}/>
            <SocialIcon fgColor='#000000' bgColor='#ffffff' url="https://github.com/alx-alexpark" className={styles.socialButton} style={{height: '6em', width: '6em'}}/>
          </Grid>
        
          </Flex>
        </div>
      </div>
    </Layout>
  ) : <h1>Unfortunately, Phone is unsupported. My website is very WIP, and may be mobile compatable in the future :D</h1>;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
