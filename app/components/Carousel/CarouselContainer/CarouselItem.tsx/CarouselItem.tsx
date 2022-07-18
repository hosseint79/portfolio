import React, { FC } from "react";

interface IPropsType {
  animation: string;
  icon: React.ReactNode;
  text: string;
}

const CarouselItem: FC<IPropsType> = ({ animation, icon, text }) => {
  return (
    <div className={`flex w-1/2 my-6 justify-center group-hover:animate-${animation}`}>
      {icon}
      <span className="text-gray-50 text-[2rem] font-bold ml-2">{text}</span>
    </div>
  );
};

export default CarouselItem;
