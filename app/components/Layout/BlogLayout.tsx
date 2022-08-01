import { ReactNode } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

interface IProps {
  children?: ReactNode
}

function BlogLayout({ children }: IProps) {
  return (
    <div className="bg-[#110f1c]">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { BlogLayout }
