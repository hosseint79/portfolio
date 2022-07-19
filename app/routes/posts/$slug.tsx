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
    <article className="container mx-auto">
      <div className='card card-page'>
        <h1 className='post-title'>{frontmatter.title}</h1>
        <div className='post-date'>Posted on {frontmatter.date}</div>
        <img src={frontmatter.cover_image} alt='' />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </article>

  );
}
