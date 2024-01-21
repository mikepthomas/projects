import type Author from './author';

type PostType = {
  slug: string;
  related: string[];
  title: string;
  heading: string;
  date: string;
  lastmod?: string;
  preview: string;
  author: Author;
  description: string;
  tags: string[];
  categories: string[];
  keywords: string[];
  promoted: boolean;
  content: string;
};

export default PostType;
