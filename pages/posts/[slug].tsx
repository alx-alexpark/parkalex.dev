import { Flex, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import Footer from '../../components/Footer';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    Head,
    Image,
    Link,
};

type PostPageProps = {
    source: MDXRemoteSerializeResult;
    frontMatter: PostType;
    readingTime: any;
};

const PostPage = ({ source, frontMatter, readingTime }: PostPageProps): JSX.Element => {
    const customMeta: MetaProps = {
        title: `${frontMatter.title} - Alex Park`,
        description: frontMatter.description,
        image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
        date: frontMatter.date,
        type: 'article',
    };
    return (
        <div style={{ backgroundColor: "black" }}>
            {/* <Head customMeta={customMeta} /> */}
            <Flex width="100vw" height="10vh" backgroundColor="white" justifyContent="center" alignItems="center" fontWeight="bold" fontSize="3em" borderBottom="2px solid black">
                <Text>{frontMatter.title}</Text>
            </Flex>
            <Flex width="100vw" height="5vh" justifyContent="space-around" alignItems="center" backgroundColor="white" marginBottom="2.5em">
                <Text fontSize="1.5em">{format(parseISO(frontMatter.date ?? "1111 11, 1111"), 'MMMM dd, yyyy')}</Text>
                <Text fontSize="1.5em">{readingTime.text}</Text>
            </Flex>
            <Flex maxWidth="65vw" minHeight="67.5vh" marginLeft="auto" marginRight="auto" backgroundColor="white" padding="5em" flexDirection="column" gap="0.75em" fontSize="1.15em"><MDXRemote {...source} /></Flex>
            <Footer />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params!.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
                rehypeSlug,
                rehypeCodeTitles,
                rehypePrism,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            className: ['anchor'],
                        },
                    },
                ],
            ],
            // format: 'mdx',
        },
        scope: data,
    });
    // console.log(content);

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
            readingTime: readingTime(content),
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export default PostPage;