import { navigation } from "../constants";

import { RxCross2 } from "react-icons/rx";

const Navbar = ({ addStyle, openNavigation, toggleNavigation }) => {
  return (
    <nav
      className={`${openNavigation ? "slide-bottom absolute top-0" : "hidden"}  
        w-full lg:block z-50`}
    >
      <div
        className={`${
          addStyle && "!bg-black/100"
        } w-full min-h-screen lg:min-h-10 
              bg-black/90 lg:bg-transparent flex flex-col items-center justify-center lg:flex-row transition-all duration-700`}
      >
        <RxCross2
          className="lg:hidden absolute top-5 right-5 text-primary text-3xl cursor-pointer transition-colors duration-200 hover:text-gray-500"
          onClick={toggleNavigation}
        />

        <div className="lg:hidden flex flex-col items-center">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="py-3 lg:py-0 lg:px-3 font-code font-semibold 
                text-primary text-xl lg:text-base transition-colors duration-200 hover:text-gray-500"
              onClick={toggleNavigation}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="py-3 lg:py-0 lg:px-3 font-code font-semibold 
                text-primary text-xl lg:text-base transition-colors duration-200 hover:text-gray-500"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
