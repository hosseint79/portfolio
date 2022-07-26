import { Link } from "@remix-run/react";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";

const data = [
  {
    image: "/images/blog-image.jpg",
    title:
      "  this is not a caption for testing  this is not a caption for testing",
    description:
      "  this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing",
  },
  {
    image: "/images/blog-image1.jpg",
    title:
      "  this is not a caption for testing  this is not a caption for testing",
    description:
      "  this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing",
  },
  {
    image: "/images/blog-images2.jpg",
    title:
      "  this is not a caption for testing  this is not a caption for testing",
    description:
      "  this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing   this is not a caption for testing  this is not a caption for testing",
  },
];

const PostsList = () => {
  return (
    <Container>
      <SectionHeader caption="See some articles" title="Articles" />
      <div className="w-full mt-24 mb-12 flex gap-10 flex-wrap md:flex-nowrap">
        {data.map((item) => {
          return (
            <Link
              to="/posts/django-crash-course"
              className="block md:w-1/3 relative scale-100 duration-300 transition-all md:hover:scale-105 w-full"
            >
              <div className=" w-full group relative text-white cursor-pointer ">
                <img className="w-full h-52 rounded-lg " src={item.image} />
                <div
                  className="w-full h-52 rounded-lg absolute top-0 left-0 group-hover:bg-[#3830a3c2] opacity-0 invisible group-hover:visible group-hover:opacity-100
                                                    items-center justify-center text-xl duration-500  font-bold transition-all flex
                                                    "
                >
                  Read article <FiArrowRight />
                </div>
                <h2 className="font-bold my-3 text-lg">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export { PostsList };
