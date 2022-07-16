import { FC } from "react";
import { SiRedux } from "react-icons/si";
import CarouselItem from "./CarouselItem.tsx/CarouselItem";

interface Item {
  animation: string;
  icon: React.ReactNode;
  text: string;
  id: string;
}

interface IPropsType {
  url: string;
  image: string;
  listItems: Item[];
}

const CarouselContainer: FC<IPropsType> = ({ url, image, listItems }) => {
  return (
    <a href={url} target="__blank" className="relative group">
      <div className="absolute top-0 left-0 rounded-md w-full h-full bg-gray-900 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-90">
        <div className="flex p-8 justify-around flex-wrap">
          {listItems.map((item) => (
            <CarouselItem
              animation={item.animation}
              icon={item.icon}
              text={item.text}
              key={item.id}
            />
          ))}
          {/* <div className="flex w-1/2 items-center group-hover:animate-moveInRight">
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
          </div> */}
        </div>
      </div>
      <img
        className="h-[210px] sm:h-[240px] md:h-[350px]"
        src={image}
        alt="1"
        style={{
          borderRadius: "10px",
          boxShadow: "0 0px 10px 3px #564f7f",
        }}
      />
    </a>
  );
};

export default CarouselContainer;
