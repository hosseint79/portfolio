import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {TiSocialGithub} from 'react-icons/ti'
import {useEffect} from 'react'

interface IProps {
        duration: number
        href: string
        Icon: any
        hoverBg: string
}

function SocialItem({duration, href, Icon, hoverBg}: IProps) {
        const squareVariants = {
                visible: {opacity: 1, y: 0, transition: {duration: duration}},
                hidden: {opacity: 0, y: 20},
        }

        const controls = useAnimation()
        const [ref, inView] = useInView()
        useEffect(() => {
                if (inView) {
                        controls.start('visible')
                }
        }, [controls, inView])
        return (
                <motion.div
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={squareVariants}
                        className={
                                'p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87] duration-500 rounded-full ' +
                                hoverBg
                        }
                >
                        <a href={href} target="__blank">
                                {' '}
                                <Icon />{' '}
                        </a>
                </motion.div>
        )
}

function SocialMedia() {
        return (
                <div className="flex my-14">
                        <SocialItem
                                duration={0.7}
                                hoverBg="hover:bg-slate-600"
                                Icon={() => <TiSocialGithub size={50} />}
                                href="https://github.com/hosseint79"
                        />
                        <SocialItem
                                duration={1}
                                hoverBg="hover:bg-green-700"
                                Icon={() => <BsWhatsapp size={30} />}
                                href="https://api.whatsapp.com/send?phone=09397233907"
                        />
                        <SocialItem
                                duration={1.3}
                                hoverBg="hover:bg-blue-600"
                                Icon={() => <BsLinkedin size={27} />}
                                href=""
                        />
                        <SocialItem
                                duration={1.6}
                                hoverBg="hover:bg-red-700"
                                Icon={() => <AiOutlineMail size={27} />}
                                href="mailto:hossein.w7979@gmail.com"
                        />
                </div>
        )
}

export {SocialMedia}
