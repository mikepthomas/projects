import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import authorData from '../data/author.json';
import Post from '../interfaces/post';
import { basePath } from '../next.config';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Post = {
    slug: '',
    related: [],
    external: [],
    title: '',
    heading: '',
    date: '',
    preview: '',
    author: {
      name: '',
      picture: '',
    },
    description: '',
    tags: [],
    categories: [],
    keywords: [],
    promoted: false,
    content: '',
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
    if (field === 'slug') {
      items[field] = realSlug.replace(`${basePath}/`, '');
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'date' || field === 'lastmod') {
      items[field] = data[field] ? data[field].toISOString() : null;
    }
    if (field === 'author') {
      items[field] = authorData.find((item) => item.name === data[field]);
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      const post1date = post1.lastmod || post1.date;
      const post2date = post2.lastmod || post2.date;
      return post1date > post2date ? -1 : 1;
    });
  return posts;
}

export function getPromotedPosts(fields: string[] = []) {
  const posts = getAllPosts(fields.concat('promoted'))
    .filter((post) => post.promoted)
    .sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  return posts;
}
