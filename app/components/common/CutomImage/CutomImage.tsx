import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component'

interface IProps extends LazyLoadImageProps {
  ratio?: '5/2' | '4/3' | 'none' | '1/1' | '8/5' | '16/9'
}

const aspectRatio = {
  '1/1': 'pb-[100%]',
  '4/3': 'pb-[75%]',
  '8/5': 'pb-[62.5%]',
  '16/9': 'pb-[56.25%]',
  '5/2': 'pb-[40%]',
  none: '',
}

function CutomImage({ ratio = 'none', ...others }: IProps) {
  return (
    <div className={`${aspectRatio[ratio]} relative`}>
      <LazyLoadImage
        alt={'alt'}
        effect="black-and-white"
        placeholderSrc="/images/default-images/default.png"
        {...others}
        wrapperClassName={`!block absolute top-0 left-0  right-0 bottom-0  h-full w-full ${others.wrapperClassName}`}
        className={`${others.className} !block h-full w-full`}
        style={{ objectFit: 'unset', ...others.style }}
      />
    </div>
  )
}

export { CutomImage }
