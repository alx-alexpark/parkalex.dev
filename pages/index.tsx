import { Box } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import styles from '/styles/Index.module.css';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div className={styles.indexbody}>
        <header className={styles.nameHeader}>
          <div className={styles.nameHeaderRight}></div>
          <h1 className={styles.nameHeaderTextWhite}>
            Alex <span className={styles.nameHeaderTextBlack}>Park</span>
          </h1>
        </header>

        <div className={styles.indexbody}>
          <Box className={styles.whoami}></Box>
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
