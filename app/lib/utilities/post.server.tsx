import fs from 'fs'
import path from 'path'

export async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  console.log('postsDirectory', postsDirectory)
  return fs.readFileSync(path.join(postsDirectory, slug), 'utf-8')
}
