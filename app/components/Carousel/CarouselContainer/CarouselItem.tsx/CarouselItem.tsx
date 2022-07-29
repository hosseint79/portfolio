import React, { FC } from 'react'

interface IPropsType {
  animation: string
  icon: React.ReactNode
  text: string
}

const animate: any = {
  moveInUp: 'group-hover:animate-moveInUp',
  moveInRight: 'group-hover:animate-moveInRight',
  moveInLeft: 'group-hover:animate-moveInLeft',
}

const CarouselItem: FC<IPropsType> = ({ animation, icon, text }) => {
  console.log('animate[animation]', animate[animation])
  return (
    <div className={`my-6 flex w-1/2 justify-center ${animate[animation]}`}>
      {icon}
      <span className="ml-2 text-[2rem] font-bold text-gray-50">{text}</span>
    </div>
  )
}

export default CarouselItem
