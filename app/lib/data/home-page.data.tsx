import { AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { TiSocialGithub } from 'react-icons/ti'

export const homePageData = {
  aboutmeTitle: "I'm Hossein Talebi",
  aboutmeText:
    'Talented and experienced Front-end Developer  with +4 years of experience executing with a plethora of diverse skills. <br /> <br /> Equipped with a record of success in consistently identifying and providing the technological needs of companies through ingenious innovation. <br /> <br /> Proficient in developing and creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback.',
  skills: {
    YearsExperience: '04+',
    CompletedProjects: '05+',
    CompaniesWorked: '02+',
    items: [
      {
        title: 'CSS',
        percentageer: 90,
      },
      {
        title: 'Javascript',
        percentageer: 90,
      },
      {
        title: 'React JS',
        percentageer: 90,
      },
      {
        title: 'Next JS',
        percentageer: 90,
      },
      {
        title: 'Bootstrap',
        percentageer: 80,
      },
      {
        title: 'Tailwind',
        percentageer: 80,
      },
      {
        title: 'Material UI',
        percentageer: 80,
      },
      {
        title: 'Ant Design',
        percentageer: 70,
      },
      {
        title: 'Typescript',
        percentageer: 80,
      },
      {
        title: 'Redux',
        percentageer: 70,
      },
      {
        title: 'Git',
        percentageer: 80,
      },
      {
        title: 'Sass',
        percentageer: 70,
      },
      {
        title: 'Remix',
        percentageer: 70,
      },
      {
        title: 'Styled components',
        percentageer: 70,
      },
    ],
  },
  contactInfo: {
    phoneNumber: '09397233907',
    email: 'hossein.w7979@gmail.com',
    location: 'Iran - Sari',
  },
  footerInfo: {
    socialItems: [
      {
        duration: 0.7,
        hoverBg: 'hover:bg-slate-600',
        Icon: () => <TiSocialGithub size={50} />,
        href: 'https://github.com/hosseint79',
      },
      {
        duration: 1,
        hoverBg: 'hover:bg-green-700',
        Icon: () => <BsWhatsapp size={30} />,
        href: 'https://api.whatsapp.com/send?phone=09397233907',
      },
      {
        duration: 1.3,
        hoverBg: 'hover:bg-blue-600',
        Icon: () => <BsLinkedin size={27} />,
        href: 'https://www.linkedin.com/in/hossein-talebi-9755731a6',
      },
      {
        duration: 1.6,
        hoverBg: 'hover:bg-red-700',
        Icon: () => <AiOutlineMail size={27} />,
        href: 'mailto:hossein.w7979@gmail.com',
      },
    ],
  },
}
