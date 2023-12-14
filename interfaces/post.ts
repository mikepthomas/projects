import type Author from './author';

type PostType = {
  slug: string;
  title: string;
  date: string;
  lastmod?: string;
  preview: string;
  author: Author;
  description: string;
  content: string;
};

export default PostType;
