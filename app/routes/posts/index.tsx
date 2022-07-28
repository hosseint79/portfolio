import {Link, useLoaderData} from '@remix-run/react'
import {json} from '@remix-run/node'

type post = {
        slug: string
        title: string
}
type LoaderDataType = {
        posts: Array<post>
        name: string
}

export const loader = async () => {
        return json<LoaderDataType>({
                posts: [
                        {
                                slug: 'my-first-post',
                                title: 'My First Post',
                        },
                        {
                                slug: '90s-mixtape',
                                title: 'A Mixtape I Made Just For You',
                        },
                ],
                name: 'hossein',
        })
}

export default function Posts() {
        const {posts} = useLoaderData<LoaderDataType>()
        console.log(posts)
        return (
                <>
                        <Link to="admin" className="text-red-600 underline">
                                Admin
                        </Link>
                        <ul>
                                {posts.map(post => (
                                        <li key={post.slug}>
                                                <Link
                                                        to={post.slug}
                                                        className="text-blue-600 underline"
                                                >
                                                        {post.title}
                                                </Link>
                                        </li>
                                ))}
                        </ul>
                </>
        )
}
