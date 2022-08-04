import { Link } from '@remix-run/react'
import { FiChevronRight } from 'react-icons/fi'
import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'

const data = [
  {
    image: '/images/blog-image.jpg',
    title: 'What is Lorem Ipsum?',
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Ipsum is that it has a more-or-less normal distribution of letter",
  },
  {
    image: '/images/blog-image1.jpg',
    title: 'Why do we use it?',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter Ipsum is that it has a more-or-less normal distribution of letter',
  },
  {
    image: '/images/blog-image3.jpg',
    title: 'Where does it come from?',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
  },
]

const PostsList = () => {
  return (
    <Container>
      <SectionHeader caption="See some articles" title="Articles" />
      <div className="flex w-full flex-wrap gap-10 md:flex-nowrap md:gap-5 lg:gap-10 lg:px-16">
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
