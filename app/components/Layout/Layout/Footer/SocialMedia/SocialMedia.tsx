import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { homePageData } from '~/lib/data/home-page.data'

interface IProps {
  duration: number
  href: string
  Icon: any
  hoverBg: string
}

function SocialItem({ duration, href, Icon, hoverBg }: IProps) {
  const squareVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: duration } },
    hidden: { opacity: 0, y: 20 },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <a href={href} target="__blank">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className={
          'mx-1 flex h-16 w-16 items-center justify-center rounded-full bg-[#0b172f87] p-1 duration-500 ' +
          hoverBg
        }
      >
        <Icon />
      </motion.div>
    </a>
  )
}

function SocialMedia() {
  return (
    <div className="my-14 flex">
      {homePageData.footerInfo.socialItems.map((item, index) => {
        return (
          <SocialItem
            key={index}
            duration={item.duration}
            hoverBg={item.hoverBg}
            Icon={item.Icon}
            href={item.href}
          />
        )
      })}
    </div>
  )
}

export { SocialMedia }
