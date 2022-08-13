import { BsMouse } from 'react-icons/bs'
import { InView } from 'react-intersection-observer'
import { useNavigationContext } from '../Layout'

import { SocialMedia } from './SocialMedia/SocialMedia'

const Footer = () => {
  const { setActiveNavigation } = useNavigationContext()

  return (
    <InView
      as="div"
      onChange={inView => {
        setActiveNavigation(prev => {
          return prev.map((item, index) => {
            return index === 4 ? inView : item
          })
        })
      }}
    >
      <div
        id="footer"
        className=" mt-32 flex flex-col  items-center py-8  text-xl font-light text-white"
      >
        <span className="my-5">That's all</span>
        <a href="#top">
          <h2 className=" flex flex-col items-center justify-center ">
            <BsMouse className="mb-5" size={27} /> - scroll up -
          </h2>
        </a>
        <SocialMedia />
      </div>
    </InView>
  )
}

export { Footer }
