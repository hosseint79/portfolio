import javascript from 'highlight.js/lib/languages/javascript'
import { ReactNode, useEffect, useState } from 'react'
import type { LoaderFunction } from '@remix-run/node'
import { Footer } from '~/components/Footer/Footer'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import matter from 'gray-matter'
import { marked } from 'marked'
import hljs from 'highlight.js'
import path from 'path'
import fs from 'fs'
import { BlogLayout } from '~/components/Layout/BlogLayout'

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function (code) {
    hljs.registerLanguage('javascript', javascript)
    return hljs.highlightAuto(code, ['html', 'javascript']).value
  },
})

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts')
    console.log('postsDirectory', postsDirectory)
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, params.slug + '.md'),
      'utf-8',
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    const html = marked(content)

    return json({
      frontmatter,
      content: html,
      status: 'success',
    })
  } catch (error) {
    return json({
      status: 'error',
    })
  }
}

export default function PostSlug() {
  const { content, frontmatter, status } = useLoaderData()
  console.log('content', content)
  return (
    <BlogLayout>
      <main className="min-h-screen bg-[#110f1c]" style={{ direction: 'rtl' }}>
        <article className="container mx-auto py-14 px-8 text-[#b4b8cb]">
          <div>
            <img
              src={frontmatter?.cover_image}
              alt=""
              className="mt-12 mb-16 inline-block h-auto w-full rounded-lg"
            />
            <h1 className="mb-2 text-xl font-bold text-white">
              {frontmatter?.title}
            </h1>
            <div className="mb-2 text-sm font-bold text-[#A9ADC1] ">
              {' '}
              تاریخ : {frontmatter?.date}{' '}
            </div>
            <div className="post-body">
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></div>
            </div>
          </div>
        </article>
      </main>
    </BlogLayout>
  )
}
