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

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function (code) {
    hljs.registerLanguage('javascript', javascript)
    return hljs.highlightAuto(code, ['html', 'javascript']).value
  },
})

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('app/posts', params.slug + '.md'),
      'utf-8',
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)
    console.log(
      frontmatter, // return {
    )

    return json({
      frontmatter,
      content,
      status: 'success',
    })
  } catch (error) {
    return json({
      status: 'error',
    })
  }
}
export function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted ? <>{children}</> : null
}
export default function PostSlug() {
  const { content, frontmatter, status } = useLoaderData()
  const src = frontmatter?.cover_image.split('public')
  console.log(src)
  return (
    <>
      <main className="min-h-screen bg-[#110f1c]" style={{ direction: 'rtl' }}>
        <article className="container mx-auto py-16 px-8 text-[#b4b8cb]">
          <div className="flex h-32 w-full flex-row-reverse flex-nowrap gap-5 overflow-auto bg-slate-400">
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <div className="h-full w-10/12 flex-shrink-0 bg-red-600 "></div>
              )
            })}
          </div>
          <div className="">
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
                  __html: marked(content),
                }}
              ></div>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </>
  )
}
