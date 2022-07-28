import React, { FC } from 'react'

interface IPropsType {
  animation: string
  icon: React.ReactNode
  text: string
}

const CarouselItem: FC<IPropsType> = ({ animation, icon, text }) => {
  return (
    <div
      className={`my-6 flex w-1/2 justify-center group-hover:animate-${animation}`}
    >
      {icon}
      <span className="ml-2 text-[2rem] font-bold text-gray-50">{text}</span>
    </div>
  )
}

export default CarouselItem
