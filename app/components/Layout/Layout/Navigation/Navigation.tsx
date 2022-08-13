import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowDownCircle } from 'react-icons/bs'
import { NavigationItem } from './Navigation-Item/Navigation-Item'
import { FiBook, FiFigma, FiMail, FiPackage } from 'react-icons/fi'

const navigationData = [
  {
    icon: AiOutlineHome,
    go: 'about',
  },
  {
    icon: FiPackage,
    go: 'skills',
  },
  {
    icon: FiMail,
    go: 'contact',
  },
  {
    icon: FiFigma,
    go: 'projects',
  },
  {
    icon: FiBook,
    go: 'postlist',
  },
]

const Navigation = () => {
  return (
    <div className=" fixed bottom-0 z-50 flex w-full items-center lg:top-0 lg:left-8 lg:h-full lg:w-auto">
      <div className="z-50  box-content flex h-10 w-screen flex-row items-center justify-around bg-zinc-800 p-4 opacity-90 lg:mr-6 lg:h-auto lg:w-10 lg:flex-col lg:rounded-[35px]">
        {navigationData.map((item, index) => {
          return <NavigationItem Icon={item.icon} go={item.go} index={index} />
        })}
      </div>
    </div>
  )
}
export { Navigation }
