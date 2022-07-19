import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from "marked";


export const loader: LoaderFunction = async ({ params }) => {

  try {
      const markdownWithMeta = fs.readFileSync(
        path.join('app/posts', params.slug + '.md'),
        'utf-8'
      )

        const { data: frontmatter, content } = matter(markdownWithMeta)
        console.log(frontmatter  // return {
      )

    return json({
      frontmatter,
      content,
      status:"success"
    });
  } catch (error) {
        return json({

          status:"error"
        });
  }
};

export default function PostSlug() {
  const {content,frontmatter,status} = useLoaderData();

  return (
    <main className="bg-[#110f1c] min-h-screen">
      <article className="container mx-auto text-[#A9ADC1] py-16 px-8">
        <div className=''>
          <h1 className=''>{frontmatter.title}</h1>
          <div className=''>Posted on {frontmatter.date}</div>
          <img src={frontmatter.cover_image} alt='' />
          <div className='post-body'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </article>
    </main>
   

  );
}
