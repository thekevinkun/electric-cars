import { useState, useEffect, useRef } from "react";

import { Navbar, Button } from "../components";

import { CiGlobe } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Header = () => {
  const ref = useRef(null);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openNavigationOnHover, setOpenNavigationOnHover] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // Unsets Background Scrolling to use when SideDrawer/Modal is closed
      document.body.style.overflow = "unset";
    } else {
      setOpenNavigation(true);
      // Disables Background Scrolling whilst the SideDrawer/Modal is open
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const showNavigationOnHover = () => {
    setTimeout(() => {
      setOpenNavigationOnHover(true);
      // Disables Background Scrolling whilst the SideDrawer/Modal is open
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }, 500);
  };

  const hideNavigationOnHover = () => {
    if (openNavigationOnHover) {
      setOpenNavigationOnHover(false);
      // Unsets Background Scrolling to use when SideDrawer/Modal is closed
      document.body.style.overflow = "unset";
    }
  };

  const handleHoverOut = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      hideNavigationOnHover();
    }
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [hideNav, setHideNav] = useState(false);
  const [addStyle, setAddStyle] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
      setAddStyle(false);
      return;
    }

    if (prevScrollPos > currentScrollPos) {
      setHideNav(false);
    } else {
      setHideNav(true);
      setAddStyle(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseout", handleHoverOut);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      ref={ref}
      className={`${
        hideNav ? "top-[-100px]" : "top-0"
      } w-full z-50 fixed transition-[top] duration-1000`}
    >
      <div
        className={`${
          (addStyle || openNavigationOnHover) && "bg-white"
        } relative z-[70] w-full padding-x py-3
          flex items-center transition-[background-color] duration-700`}
      >
        <a
          className={`${
            (addStyle || openNavigationOnHover) && "!text-black"
          } logo-text flex flex-1 transition-colors duration-700`}
          href="/"
        >
          Electric Cars
        </a>

        <Button
          className={`${
            addStyle && "!bg-black/90 hover:!bg-black/100"
          } lg:hidden uppercase
              glassmorphism-menu text-sm text-primary ml-auto transition-all duration-300 hover:bg-black/25`}
          px="px-4"
          onClick={toggleNavigation}
        >
          Menu
        </Button>

        <div className="relative flex-1 lg:inline-flex hidden z-50">
          <span
            className={`${
              (addStyle || openNavigationOnHover) &&
              "!text-black hover:!bg-black/5"
            }
                font-code font-semibold text-primary text-base cursor-pointer
                py-1 px-3 hover:bg-black/20 rounded-sm transition-[colors,background-color] duration-700`}
            onMouseOver={showNavigationOnHover}
          >
            Vehicles
          </span>
        </div>

        <div
          className={`${
            (addStyle || openNavigationOnHover) && "!text-black"
          } w-fit hidden ml-auto 
              lg:flex items-center gap-2 text-primary transition-colors duration-700`}
        >
          <a
            href="#support"
            className={`${
              (addStyle || openNavigationOnHover) && "hover:!bg-black/5"
            } p-[2px]
              hover:bg-black/50 rounded-sm transition-[background-color] duration-700`}
          >
            <IoMdHelpCircleOutline className="text-2xl" />
          </a>

          <a
            href="#world"
            className={`${
              (addStyle || openNavigationOnHover) && "hover:!bg-black/5"
            } p-[2px]
              hover:bg-black/50 rounded-sm transition-[background-color] duration-700`}
          >
            <CiGlobe className="text-2xl" />
          </a>

          <a
            href="account"
            className={`${
              (addStyle || openNavigationOnHover) && "hover:!bg-black/5"
            } p-[4px]
              hover:bg-black/50 rounded-sm transition-[background-color] duration-700`}
          >
            <VscAccount className="text-xl" />
          </a>
        </div>
      </div>

      <Navbar
        openNavigation={openNavigation}
        toggleNavigation={toggleNavigation}
        openNavigationOnHover={openNavigationOnHover}
        hideNavigationOnHover={hideNavigationOnHover}
      />
    </header>
  );
};

export default Header;
