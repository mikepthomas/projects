import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'reactstrap';

import { Blog, Breadcrumbs } from '../../components';
import Layout from '../../components/layout';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import type PostType from '../../interfaces/post';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import { HOME_TITLE, PROJECTS_PATH } from '../../lib/constants';
import { basePath } from '../../next.config';

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
      <Breadcrumbs pageName={post.title} />
      <Container>
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
                title={post.heading}
                coverImage={post.preview}
                date={post.date}
                lastmod={post.lastmod}
                author={post.author}
                tags={post.tags}
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
    'heading',
    'description',
    'date',
    'lastmod',
    'slug',
    'related',
    'author',
    'content',
    'preview',
    'keywords',
    'tags',
  ]);
  const related =
    post.related?.map((item) =>
      getPostBySlug(item.replace(PROJECTS_PATH, ''), [
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
