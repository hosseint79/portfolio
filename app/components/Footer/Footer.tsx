import {BsMouse} from 'react-icons/bs'

import {SocialMedia} from './SocialMedia/SocialMedia'

const Footer = () => {
        return (
                <div
                        id="footer"
                        className=" py-8 text-white mt-32  flex flex-col  items-center text-xl font-light"
                >
                        <span className="my-5">That's all</span>
                        <a href="#home">
                                <h2 className=" flex flex-col items-center justify-center ">
                                        <BsMouse className="mb-5" size={27} /> -
                                        scroll up -
                                </h2>
                        </a>
                        <SocialMedia />
                </div>
        )
}

export {Footer}
