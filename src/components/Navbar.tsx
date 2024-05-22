import { appleImg, bagImg, searchImg } from "../utils";
import { v4 as uuid } from "uuid";
import IconImage from "./Icon";
import { navLists } from "../constants";

export const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <IconImage alt="apple" src={appleImg} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {/* add these to constants */}
          {navLists.map((navItem) => (
            <div
              className="capitalize px-5 cursor-pointer text-sm text-gray hover:text-white transition-all"
              key={uuid()}
            >
              {navItem}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <IconImage alt="search" src={searchImg} />
          <IconImage alt="bag" src={bagImg} />
        </div>
      </nav>
    </header>
  );
};
