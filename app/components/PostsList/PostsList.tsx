import { Link } from '@remix-run/react'
import {
  FiArrowRight,
  FiArrowRightCircle,
  FiChevronRight,
} from 'react-icons/fi'
import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'

const data = [
  {
    image: '/images/blog-image.jpg',
    title:
      '  this is not a caption for testing  this is not a caption for testing',
    description:
      '  this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing',
  },
  {
    image: '/images/blog-image1.jpg',
    title:
      '  this is not a caption for testing  this is not a caption for testing',
    description:
      '  this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing',
  },
  {
    image: '/images/blog-image3.jpg',
    title:
      '  this is not a caption for testing  this is not a caption for testing',
    description:
      '  this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing',
  },
]

const PostsList = () => {
  return (
    <Container>
      <SectionHeader caption="See some articles" title="Articles" />
      <div className="lg:px-16- mt-24 mb-12 flex w-full flex-wrap gap-10 md:flex-nowrap md:px-12">
        {data.map(item => {
          return (
            <Link
              to="/posts/django-crash-course"
              className="relative block w-full scale-100 transition-all duration-300 md:w-1/3 md:hover:scale-105"
            >
              <div className=" group relative w-full cursor-pointer text-white ">
                <div className="relative">
                  <img className="h-auto w-full rounded-lg " src={item.image} />
                  <div
                    className="invisible absolute top-0 left-0 flex h-full  w-full items-center justify-center rounded-lg text-xl
                             font-bold opacity-0 transition-all duration-500  group-hover:visible group-hover:bg-[#3830a3c2] group-hover:opacity-100"
                  >
                    Read article <FiChevronRight className="ml-2 mt-[2.5px]" />
                  </div>
                </div>
                <h2 className="my-3 font-bold">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export { PostsList }
