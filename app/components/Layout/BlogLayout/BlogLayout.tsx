import { ReactNode } from 'react'
import { BlogFooter } from './BlogFooter/BlogFooter'
import { Header } from './Header/Header'

interface IProps {
  children?: ReactNode
}

function BlogLayout({ children }: IProps) {
  return (
    <div className="bg-[#110f1c]">
      <Header />
      {children}
      <BlogFooter />
    </div>
  )
}

export { BlogLayout }
