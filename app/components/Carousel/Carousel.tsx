import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";
import { SiRedux } from "react-icons/si";
import CarouselContainer from "./CarouselContainer/CarouselContainer";

let slides = [
  {
    key: 11,
    content: (
      <CarouselContainer
        url="https://erp.sabak.org/"
        image="/images/works/work1.png"
        listItems={[
          {
            animation: "moveInRight",
            icon: <SiRedux size={56} color="#17d6d7" />,
            text: "Redux",
            id: "10",
          },
        ]}
      />
    ),
  },
  {
    key: 33,
    content: (
      <a href="https://navaa.co/" target="__blank" className="relative group">
        <div className="absolute top-0 left-0 rounded-md w-full h-full bg-gray-900 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-90">
          <div className="flex p-8 justify-around flex-wrap">
            <div className="flex w-1/2 items-center group-hover:animate-moveInRight">
              <img src="/images/icons/react.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-2">
                React
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInLeft">
              <SiRedux size={56} color="#17d6d7" />
              <span className="text-gray-50 text-[2rem] font-bold ml-2">
                Redux
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInLeft my-10">
              <img src="/images/icons/sass.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-4">
                Sass
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInRight my-10">
              <img src="/images/icons/typescript.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-4">
                Typescript
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInUp">
              <img src="/images/icons/bootstrap.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-4">
                Bootstrap
              </span>
            </div>
          </div>
        </div>
        <img
          className="h-[210px] sm:h-[240px] md:h-[350px]"
          src="/images/works/work3.png"
          alt="2"
          style={{ borderRadius: "10px", boxShadow: "0 0px 10px 3px #564f7f" }}
        />
      </a>
    ),
  },

  {
    key: 22,
    content: (
      <a href="https://zeemind.ir/" target="__blank" className="relative group">
        <div className="absolute top-0 left-0 rounded-md w-full h-full bg-gray-900 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-90">
          <div className="flex p-8 justify-around flex-wrap">
            <div className="flex w-1/2 items-center group-hover:animate-moveInRight">
              <img src="/images/icons/react.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-2">
                React
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInLeft">
              <SiRedux size={56} color="#17d6d7" />
              <span className="text-gray-50 text-[2rem] font-bold ml-2">
                Redux
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInLeft my-10">
              <img src="/images/icons/sass.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-4">
                Sass
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInRight my-10">
              <img src="/images/icons/typescript.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-4">
                Typescript
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInUp">
              <img src="/images/icons/bootstrap.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-4">
                Bootstrap
              </span>
            </div>
            <div className="flex w-1/2 group-hover:animate-moveInUp">
              <img src="/images/icons/bootstrap.png" className="w-14 h-14" />
              <span className="text-gray-50 text-[2rem] font-bold ml-4">
                Bootstrap
              </span>
            </div>
          </div>
        </div>
        <img
          className="h-[210px] sm:h-[240px] md:h-[350px]"
          src="/images/works/work2.png"
          alt="2"
          style={{ borderRadius: "10px", boxShadow: "0 0px 10px 3px #564f7f" }}
        />
      </a>
    ),
  },
];
function TdCarousel() {
  return (
    <div id="projects">
      <Container>
        <SectionHeader title="Projects" caption="Some of my projects" />
        <div
          className="px-4 md:px-16 threeD-carousel-button"
          style={{ height: "400px", margin: "0 auto" }}
        >
          <Carousel
            slides={slides}
            goToSlide={1}
            offsetRadius={2}
            showNavigation={true}
            animationConfig={config.gentle}
          />
        </div>
      </Container>
    </div>
  );
}

export default TdCarousel;
