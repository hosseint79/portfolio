import { Link } from '@remix-run/react'
import { FiMoon } from 'react-icons/fi'
import { Container } from '../common/Container/Container'

function Header() {
  return (
    <Container>
      <div
        id="top"
        className="flex h-16 w-full items-center justify-between py-10"
      >
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-[#3f3a53] bg-[#211D35]">
          <FiMoon
            size={18}
            className="border-0 fill-[#3f3a53] text-[#9d9ba1]"
          />
        </div>{' '}
        <Link to="/">
          <div className="cursor-pointer items-center justify-center rounded-md border border-[#3f3a53] bg-[#211D35] py-2 px-4 text-white">
            Home
          </div>
        </Link>
      </div>
    </Container>
  )
}

export { Header }
