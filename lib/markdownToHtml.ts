import { remark } from 'remark'
import emoji from 'remark-emoji'
import gfm from 'remark-gfm'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(emoji).use(gfm).use(html).process(markdown)
  return result.toString()
}
