import { SimpleGrid, Box, Flex } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import styles from '/styles/Index.module.css';
import useWindowDimensions from '../utils/useWindowDimensions';

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
              <p style={{fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5em'}}>I am ...</p>
              <p className={styles.whoamiTextItem}>※ A sussy baka</p>
              <p className={styles.whoamiTextItem}>※ A red imposter</p>
              <p className={styles.whoamiTextItem}>※ A amogus enjoyer</p>
            </div>
          </div>
          <div className={styles.lowerSection} style={{width: "20vw", marginRight: "6rem"}}>

          </div>
        
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
