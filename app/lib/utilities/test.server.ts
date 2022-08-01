import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import javascript from 'highlight.js/lib/languages/javascript'

import hljs from 'highlight.js'
export const ROOT_DIR = `${__dirname}/../app`

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function (code) {
    hljs.registerLanguage('javascript', javascript)
    return hljs.highlightAuto(code, ['html', 'javascript']).value
  },
})

export const GetBlog = (slug: string) => {
  const markdownWithMeta = fs.readFileSync(
    `${ROOT_DIR}/../posts/${slug}.md`,
    'utf8',
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    html: marked(content),
    frontmatter,
  }
}
