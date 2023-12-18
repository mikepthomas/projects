import { unified } from 'unified';
import remarkBehead from 'remark-behead';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import rehypeWrapAll from 'rehype-wrap-all';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkBehead, { minDepth: 2 })
    .use(remarkEmoji)
    .use(remarkGfm)
    .use(remarkToc, { maxDepth: 3, ordered: true })
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeWrapAll, {
      selector: 'table',
      wrapper: 'div.table-responsive',
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
