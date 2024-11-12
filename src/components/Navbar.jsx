import { navigation } from "../constants";

import { RxCross2 } from "react-icons/rx";

const Navbar = ({
  openNavigation,
  toggleNavigation,
  openNavigationOnHover,
  hideNavigationOnHover,
}) => {
  return (
    <nav
      className={`${
        openNavigation
          ? "slide-bottom lg:hidden absolute top-0"
          : openNavigationOnHover
          ? "slide-bottom hidden lg:block lg:absolute lg:top-[56px]"
          : "hidden"
      }  
       w-full lg:z-[60] z-[75]`}
    >
      <div
        className="w-full min-h-screen lg:min-h-10 bg-black/90 lg:bg-white 
            flex flex-col items-center justify-center lg:flex-row transition-all duration-700"
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

        <div className="hidden py-8 lg:grid grid-cols-4 gap-10">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="py-3 font-code font-semibold 
                text-primary lg:text-black text-xl lg:text-base transition-colors duration-200 hover:text-gray-500"
              onClick={hideNavigationOnHover}
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
