import React, { FC } from 'react'
import { CutomImage } from '~/components/common/CutomImage/CutomImage'
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
      <div className="invisible absolute top-0 left-0 z-10 h-full w-full rounded-md bg-gray-900 opacity-0 duration-300 group-hover:opacity-90 md:group-hover:visible">
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
      <div className="w-[160px]  sm:w-[240px] md:w-[600px]">
        <CutomImage
          alt={'alt'}
          ratio="8/5"
          src={image} // use normal <img> attributes as props
          style={{
            borderRadius: '8px',
            boxShadow: '0 0px 10px 3px #564f7f',
          }}
        />
      </div>
    </a>
  )
}

export default CarouselContainer
