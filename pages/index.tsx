import { SimpleGrid, Box, Flex, Grid, Button, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";
import styles from "/styles/Index.module.css";
import useWindowDimensions from "../utils/useWindowDimensions";
import { SocialIcon } from "react-social-icons";
import Footer from "../components/Footer";
import MobileMessage from "../components/Mobile";

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  
  // let { height, width } = useWindowDimensions();
  return (
    <Layout>
      <div className={styles.indexbody}>
        <Flex
          flexDirection="column"
          style={{ padding: "0px", height: "100vh", width: "100vw" }}
          flexDir="row"
        >
          <Flex
            style={{ flex: "1", backgroundColor: "black" }}
            alignItems="center"
            justifyContent="end"
          >
            <h1
              className={styles.nameHeaderText}
              style={{ color: "white", paddingRight: "0.1em" }}
            >
              Alex
            </h1>
          </Flex>
          <Flex
            style={{ flex: "1", backgroundColor: "white" }}
            alignItems="center"
          >
            <h1
              className={styles.nameHeaderText}
              style={{ color: "black", paddingLeft: "0.1em" }}
            >
              Park
            </h1>
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
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "2.5em",
                  }}
                >
                  I am a ...
                </p>
                <p className={styles.whoamiTextItem}>※ High schooler</p>
                <p className={styles.whoamiTextItem}>※ Developer/CS Nerd</p>
                <p className={styles.whoamiTextItem}>※ Linux Enjoyer</p>
              </div>
            </div>
            <Grid
              className={styles.socialIcons}
              style={{
                width: "20vw",
                marginRight: "auto",
                marginLeft: "auto",
                gridTemplateColumns: "auto auto",
                rowGap: "5em",
                columnGap: "5em",
              }}
            >
              <SocialIcon
                fgColor="#000000"
                bgColor="#ffffff"
                url="https://github.com/alx-alexpark"
                className={styles.socialButton}
                style={{ height: "6em", width: "6em" }}
              />
              <SocialIcon
                fgColor="#000000"
                bgColor="#ffffff"
                url="mailto:me@parkalex.dev"
                network="email"
                className={styles.socialButton}
                style={{ height: "6em", width: "6em" }}
              />
              <SocialIcon
                fgColor="#000000"
                bgColor="#ffffff"
                url="https://matrix.to/#/@openssl_rand:projectsegfau.lt"
                className={styles.socialButton}
                style={{ height: "6em", width: "6em" }}
              />
              <SocialIcon
                fgColor="#000000"
                bgColor="#ffffff"
                url="https://discord.com/users/1010617504088981644"
                className={styles.socialButton}
                style={{ height: "6em", width: "6em" }}
              />
            </Grid>
          </Flex>

          <Flex
            height="7.5rem"
            maxWidth="35vw"
            backgroundColor="white"
            justifyContent="center"
            alignItems="center"
            style={{
              marginRight: "10vw",
              marginLeft: "auto",
              marginTop: "10em",
              marginBottom: "7.5em",
              padding: "0.5em",
            }}
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "2.5em",
              }}
            >
              $ ls -lah ./blogs/
            </p>
          </Flex>

          <Flex
            marginLeft="auto"
            marginRight="auto"
            backgroundColor="white"
            maxWidth="80vw"
            style={{ marginBottom: "5em" }}
            flexDirection="column"
          >
            {posts.map((post) => (
              <Flex
                backgroundColor="white"
                padding="4em"
                height="20em"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                flexGrow="1"
                key={post.slug}
              >
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  flexGrow="1"
                >
                  <Text fontSize="2rem" fontFamily="Jetbrains Mono">
                    {post.title}
                  </Text>
                  <Text
                    fontSize="1.2rem"
                    fontFamily="Jetbrains Mono"
                    maxWidth="40em"
                    marginRight="1em"
                  >
                    {post.description}
                  </Text>
                </Flex>
                <Link href={`/posts/${post.slug}`}>
                  <Button
                    height="10em"
                    width="15em"
                    borderRadius="0px"
                    backgroundColor="black"
                  >
                    <Text
                      color="white"
                      fontFamily="Jetbrains Mono"
                      fontSize="1.5rem"
                    >
                      Read more!
                    </Text>
                  </Button>
                </Link>
              </Flex>
            ))}
          </Flex>

          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "description", "slug", "title"]);

  return {
    props: { posts },
  };
};

export default Index;
