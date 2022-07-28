import React, { FC } from 'react'
import { SiRedux } from 'react-icons/si'
import CarouselItem from './CarouselItem.tsx/CarouselItem'

interface Item {
  animation: string
  icon: React.ReactNode
  text: string
  id: string
}

interface IPropsType {
  url: string
  image: string
  listItems: Item[]
}

const CarouselContainer: FC<IPropsType> = ({ url, image, listItems }) => {
  return (
    <a href={url} target="__blank" className="group relative">
      <div className="invisible absolute top-0 left-0 h-full w-full rounded-md bg-gray-900 opacity-0 duration-300 group-hover:opacity-90 md:group-hover:visible">
        <div className="flex flex-wrap justify-around p-8">
          {listItems.map(item => (
            <CarouselItem
              animation={item.animation}
              icon={item.icon}
              text={item.text}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <img
        className="h-[160px] sm:h-[240px] md:h-[350px]"
        src={image}
        alt="1"
        style={{
          borderRadius: '10px',
          boxShadow: '0 0px 10px 3px #564f7f',
        }}
      />
    </a>
  )
}

export default CarouselContainer
