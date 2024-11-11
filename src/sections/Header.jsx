import { useState, useEffect } from "react";

import { Navbar, Button } from "../components";

import { CiGlobe } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

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

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [top, setTop] = useState(0);
  const [addStyle, setAddStyle] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
      setAddStyle(false);
      return;
    }

    if (prevScrollPos > currentScrollPos) {
      setTop(0);
    } else {
      setTop(-100);
      setAddStyle(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`slide-bottom w-full fixed top-[${top}px] z-50 transition-[top] duration-700`}
    >
      <div
        className={`${addStyle && "bg-white"} w-full padding-x py-4
            flex items-center transition-all duration-700`}
      >
        <a
          className={`${
            addStyle && "!text-black"
          } font-grotesk text-primary text-lg lg:text-xl 
              font-extrabold tracking-wider uppercase transition-colors duration-700`}
          href="/"
        >
          Electric Cars
        </a>

        <Button
          className={`${addStyle && "!bg-black/90 hover:!bg-black/0"} lg:hidden 
              glassmorphism-menu text-sm text-primary ml-auto transition-all duration-300 hover:bg-black/30`}
          px="px-4"
          onClick={toggleNavigation}
        >
          Menu
        </Button>

        <div
          className={`${addStyle && "!text-black"} hidden ml-auto 
              lg:flex items-center gap-3 text-primary transition-colors duration-700`}
        >
          <a href="#support">
            <IoMdHelpCircleOutline className="text-2xl" />
          </a>

          <a href="#world">
            <CiGlobe className="text-2xl" />
          </a>

          <a href="account">
            <VscAccount className="text-xl" />
          </a>
        </div>
      </div>

      <Navbar
        addStyle={addStyle}
        openNavigation={openNavigation}
        setOpenNavigation={setOpenNavigation}
        toggleNavigation={toggleNavigation}
      />
    </header>
  );
};

export default Header;
