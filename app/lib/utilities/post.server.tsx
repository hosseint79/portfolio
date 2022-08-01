import javascript from 'highlight.js/lib/languages/javascript'
import matter from 'gray-matter'
import { marked } from 'marked'
import hljs from 'highlight.js'
import fs from 'fs'
import path from 'path'

export const ROOT_DIR = `${__dirname}/../app`

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function (code) {
    hljs.registerLanguage('javascript', javascript)
    return hljs.highlightAuto(code, ['html', 'javascript']).value
  },
})

export const GetBlog = (slug: string) => {
  const pathMain =
    process.env.NODE_ENV === 'development'
      ? path.join('app/posts', slug + '.md')
      : `${ROOT_DIR}/../posts/${slug}.md`

  const markdownWithMeta = fs.readFileSync(pathMain, 'utf8')

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    html: marked(content),
    frontmatter,
  }
}
