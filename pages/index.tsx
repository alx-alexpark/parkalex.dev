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
import { SocialIcon } from "react-social-icons-matrix";
import Footer from "../components/Footer";

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  let isMobile = false;

  const [width, setWidth] = useState<number>(1920);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    isMobile = width <= 776;
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  isMobile = width <= 776;
  // let { height, width } = useWindowDimensions();
  return (
    <Layout>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            <Text
              fontSize={["4.5em", "9em"]}
              className={styles.nameHeaderText}
              style={{ color: "white", paddingRight: "0.1em" }}
            >
              Alex
            </Text>
          </Flex>
          <Flex
            style={{ flex: "1", backgroundColor: "white" }}
            alignItems="center"
          >
            <Text
              fontSize={["4.5em", "9em"]}
              className={styles.nameHeaderText}
              style={{ color: "black", paddingLeft: "0.1em" }}
            >
              Park
            </Text>
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

          <Flex flexDirection={["column", "row"]} justifyContent="center" alignItems='center'>
            <div className={styles.lowerSection}>
              <div className={styles.whoami}>
                <Text fontSize={["2em", "4em"]} className={styles.whoamiTextMain}>$ whoami</Text>
                <Text
                fontSize={["1.5em", "2.5em"]}
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  I am a ...
                </Text>
                <Text className={styles.whoamiTextItem}>※ High schooler</Text>
                <Text className={styles.whoamiTextItem}>※ Developer/CS Nerd</Text>
                <Text className={styles.whoamiTextItem}>※ Linux Enjoyer</Text>
              </div>
            </div>
            
            <Grid
              className={styles.socialIcons}
              style={{
                gridTemplateColumns: "auto auto",
                rowGap: "5em",
                columnGap: "5em",
              }}
              minWidth={["10vw", "10vw"]}
              marginLeft={["auto", "7rem"]}
              marginRight={["auto", "2rem"]}
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
                network="matrix"
              />
              <SocialIcon
                fgColor="#000000"
                bgColor="#ffffff"
                url="https://spyware.neocities.org/articles/discord"
                className={styles.socialButton}
                style={{ height: "6em", width: "6em" }}
                network="discord"
              />
              <a style={{display: 'none'}} rel="me" href="https://social.dino.icu/@alexp">Mastodon</a>
            </Grid>
            </Flex>
          

          <Flex
            height="7.5rem"
            maxWidth={["85vw", "35vw"]}
            backgroundColor="white"
            justifyContent="center"
            alignItems="center"
            marginRight={["auto", "10em"]}
            style={{
              marginLeft: "auto",
              marginTop: "5em",
              marginBottom: "7.5em",
              padding: "0.5em",
            }}
          >
            <Text
              style={{
                fontFamily: "JetBrains Mono, monospace",
              }}
              fontSize={["1.5em", "2.5em"]}
            >
              $ ls -lah ./blogs/
            </Text>
          </Flex>

          <Flex
            marginLeft="auto"
            marginRight="auto"
            backgroundColor="white"
            maxWidth="80vw"
            style={{ marginBottom: "7em" }}
            flexDirection="column"
          >
            {posts.map((post) => (
              <Flex
                backgroundColor="white"
                padding={["2em", "4em"]}
                flexDirection={["column", "row"]}
                alignItems="center"
                justifyContent="space-between"
                flexGrow="1"
                key={post.slug}
              >
                <Flex
                  flexDirection="column"
                  justifyContent="start"
                  flexGrow="1"
                >
                  <Text fontSize={["1.6rem", "2rem"]} fontFamily="Jetbrains Mono" fontWeight="bold">
                   <Link href={`/posts/${post.slug}`}><u>{post.title}</u></Link>
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
                {isMobile ? <></> : 
                <Link href={`/posts/${post.slug}`}>
                  <Button
                    display={["none", "unset"]}
                    height="10em"
                    width="15em"
                    borderRadius="0px"
                    backgroundColor="black"
                  >
                    <Text
                      display={["none", "unset"]}
                      color="white"
                      fontFamily="Jetbrains Mono"
                      fontSize="1.5rem"
                    >
                      Read more!
                    </Text>
                  </Button> 
                </Link> }
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
