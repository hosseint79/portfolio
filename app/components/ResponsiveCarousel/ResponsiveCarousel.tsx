import { CutomImage } from '../common/CutomImage/CutomImage'

interface IProps {
  slides: any
}

const ResponsiveCarousel = ({ slides }: IProps) => {
  return (
    <div className="flex-no-wrap flex overflow-auto py-2">
      {slides.map((item: any, index: number) => {
        return (
          <a
            key={index}
            href={item.url}
            target="__blank"
            className="mr-3 block w-11/12 flex-shrink-0 "
          >
            <CutomImage
              alt={'alt'}
              ratio="8/5"
              className="rounded-lg"
              src={item.src} // use normal <img> attributes as props
            />
          </a>
        )
      })}
    </div>
  )
}

export { ResponsiveCarousel }
