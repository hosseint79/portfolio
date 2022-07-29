import { Link } from '@remix-run/react'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface PropsType {
  Icon: IconType
  go: string
}

const NavigationItem: FC<PropsType> = ({ Icon, go }) => {
  return (
    <Link to={'#' + go}>
      <Icon
        className="opacity-8 box-border rounded-full border border-neutral-900 bg-neutral-900 p-2 text-white hover:border-indigo-900 hover:text-indigo-900 md:mb-4"
        size={45}
      />
    </Link>
  )
}

export { NavigationItem }
