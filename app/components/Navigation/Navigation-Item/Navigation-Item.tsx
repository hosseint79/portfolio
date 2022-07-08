import { Link } from "@remix-run/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface PropsType {
  Icon: IconType;
  go:string
}

const NavigationItem: FC<PropsType> = ({ Icon ,go}) => {
  return (
    <Link to={"#" + go}>
      <Icon
        className="bg-neutral-900 opacity-8 hover:text-indigo-900 border border-neutral-900 hover:border-indigo-900 text-white md:mb-4 p-2 rounded-full box-border"
        size={45}
      />
    </Link>
  );
};

export { NavigationItem };
