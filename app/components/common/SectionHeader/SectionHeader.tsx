import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { useEffect } from 'react'

interface IProps {
  title: string
  caption: string
}

const hOneVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 20 },
}
const spanVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, y: 120 },
}

function SectionHeader({ title, caption }: IProps) {
  const controlsTop = useAnimation()
  const controlsBottom = useAnimation()

  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()

  useEffect(() => {
    if (inView) {
      controlsTop.start('visible')
    }
    if (inView2) {
      controlsBottom.start('visible')
    }
  }, [controlsTop, inView, controlsBottom, inView2])

  return (
    <div className=" pt-3  pb-6 text-center text-white lg:my-14">
      <motion.h2
        ref={ref}
        animate={controlsTop}
        initial="hidden"
        variants={hOneVariants}
        className="my-1 text-2xl font-semibold  "
      >
        {title}
      </motion.h2>
      <motion.span
        ref={ref2}
        animate={controlsBottom}
        initial="hidden"
        variants={spanVariants}
        className="text-xl font-semibold  "
      >
        {caption}
      </motion.span>
    </div>
  )
}

export { SectionHeader }
