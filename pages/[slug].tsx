import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Container } from 'reactstrap';
import Header from '../components/header';
import PostHeader from '../components/post-header';
import Layout from '../components/layout';
import { getPostBySlug, getAllPosts } from '../lib/api';
import PostTitle from '../components/post-title';
import Head from 'next/head';
import { HOME_TITLE } from '../lib/constants';
import type PostType from '../interfaces/post';
import { basePath } from '../next.config';
import { Blog } from '../components';

type Props = {
  post: PostType;
  related: PostType[];
};

export default function Post({ post, related }: Props) {
  const router = useRouter();
  const title = `${post.title} | ${HOME_TITLE}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-16">
              <Head>
                <title>{title}</title>
                <meta name="description" content={post.description} />
                <meta name="keywords" content={post.keywords?.toString()} />
                <meta
                  property="og:image"
                  content={`${basePath}${post.preview}`}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.preview}
                date={post.date}
                lastmod={post.lastmod}
                author={post.author}
              />
              <Blog content={post.content} related={related} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'lastmod',
    'slug',
    'related',
    'author',
    'content',
    'preview',
    'keywords',
  ]);
  const related =
    post.related?.map((item) =>
      getPostBySlug(item.replace(`${basePath}/`, ''), [
        'title',
        'slug',
        'preview',
      ]),
    ) || [];
  return {
    props: {
      post,
      related,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
