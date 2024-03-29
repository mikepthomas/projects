import Head from 'next/head';
import { Container } from 'reactstrap';

import HeroPost from '../../components/hero-post';
import Intro from '../../components/intro';
import Layout from '../../components/layout';
import MoreStories from '../../components/more-stories';
import Post from '../../interfaces/post';
import { getAllPosts } from '../../lib/api';
import { HOME_OG_IMAGE_URL, HOME_TITLE } from '../../lib/constants';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{HOME_TITLE}</title>
          <meta name="description" content={HOME_TITLE} />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.heading}
              coverImage={heroPost.preview}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              description={heroPost.description}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'heading',
    'date',
    'slug',
    'author',
    'preview',
    'description',
  ]);

  return {
    props: { allPosts },
  };
};
