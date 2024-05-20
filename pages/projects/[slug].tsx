import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { Container } from 'reactstrap';

import { Blog, Breadcrumbs } from '../../components';
import Layout from '../../components/layout';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import type PostType from '../../interfaces/post';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import { DOMAIN, PROJECTS_PATH } from '../../lib/constants';
import { basePath } from '../../next.config';

type Props = {
  post: PostType;
  related: PostType[];
};

export default function Post({ post, related }: Props) {
  const router = useRouter();
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
              <NextSeo
                title={post.title}
                description={post.description}
                additionalMetaTags={[
                  {
                    name: 'keywords',
                    content: post.keywords?.toString(),
                  },
                ]}
                canonical={`${DOMAIN}${PROJECTS_PATH}/${post.slug}`}
                openGraph={{
                  type: 'article',
                  article: {
                    publishedTime: post.date,
                    modifiedTime: post.lastmod,
                    tags: post.tags,
                  },
                  images: [
                    {
                      url: `${DOMAIN}${basePath}${post.preview}`,
                    },
                  ],
                }}
              />
              <ArticleJsonLd
                type="BlogPosting"
                url={`${DOMAIN}${PROJECTS_PATH}/${post.slug}`}
                title={post.heading}
                images={[`${DOMAIN}${basePath}${post.preview}`]}
                datePublished={post.date}
                dateModified={post.lastmod}
                authorName={post.author.name}
                description={post.description}
              />
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
      item.startsWith('https://')
        ? { slug: item, title: item }
        : getPostBySlug(item.replace(PROJECTS_PATH, ''), [
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
