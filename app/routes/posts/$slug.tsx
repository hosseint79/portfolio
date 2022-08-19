import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { GetBlog } from '~/lib/utilities/test.server'
import { Container } from '~/components/common/Container/Container'
import { BlogLayout } from '~/components/Layout/BlogLayout/BlogLayout'

export const loader: LoaderFunction = async ({ params }) => {
  const { html, frontmatter } = GetBlog(params.slug + '')
  return json({
    frontmatter,
    html,
    status: 'success',
  })
}

export default function PostSlug() {
  const { html, frontmatter } = useLoaderData()
  console.log('html', html)
  return (
    <BlogLayout>
      <Container>
        <main
          className="min-h-screen bg-[#110f1c]"
          style={{ direction: 'rtl' }}
        >
          <article className=" py-14 text-[#b4b8cb]">
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
                تاریخ : {frontmatter?.date}
              </div>
              <div className="post-body">
                <div
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                ></div>
              </div>
            </div>
          </article>
        </main>
      </Container>
    </BlogLayout>
  )
}
