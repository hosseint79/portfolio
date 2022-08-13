import { Link } from '@remix-run/react'
import { FC } from 'react'
import { IconType } from 'react-icons'
import { useNavigationContext } from '~/components/Layout/Layout/Layout'

interface PropsType {
  Icon: IconType
  go: string
  index: number
}

const NavigationItem: FC<PropsType> = ({ Icon, go, index }) => {
  const { activeNavigation } = useNavigationContext()

  function trueIndex() {
    return activeNavigation.findIndex(e => e === true)
  }

  return (
    <Link to={'#' + go}>
      <Icon
        className={`opacity-8 box-border rounded-full border-2 border-neutral-900 bg-neutral-900 p-2 text-white hover:border-indigo-900 hover:text-indigo-900 md:mb-4 
          ${index === trueIndex() ? 'border-indigo-800 text-indigo-800 ' : ''}
        `}
        size={45}
      />
    </Link>
  )
}

export { NavigationItem }
