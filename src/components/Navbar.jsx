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

        <div className="lg:hidden px-12 md:px-7 max-[375px]:px-5 flex flex-wrap gap-x-10 gap-y-7 md:gap-5 max-[375px]:gap-6 items-center justify-center">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="py-1 px-3 flex gap-2 items-center
                  rounded-sm hover:bg-white/15 transition-[background-color] duration-700"
              onClick={toggleNavigation}
            >
              <img src={item.logoImgUrl} className="w-6 h-6 object-contain" />

              <span
                className="font-code font-semibold 
                text-primary md:text-2xl text-xl"
              >
                {item.title}
              </span>
            </a>
          ))}
        </div>

        <div className="hidden py-10 lg:grid grid-cols-4 gap-10 items-center">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="px-3 flex gap-3 items-center
                  rounded-sm hover:!bg-black/5 transition-[background-color] duration-700"
              onClick={hideNavigationOnHover}
            >
              <img src={item.logoImgUrl} className="w-9 h-9 object-contain" />

              <span className="py-3 font-code font-semibold text-primary lg:text-black text-lg">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
