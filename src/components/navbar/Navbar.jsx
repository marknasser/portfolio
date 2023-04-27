import React, { useState, useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion, useScroll, useSpring } from "framer-motion";

import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { menu, close, logo } from "../../assets";
import { DotGroup } from "..";

function Navbar() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <nav
        className={`${
          isTopOfPage ? "" : "bg-primary"
        }   w-full fixed top-0 z-50`}
      >
        <div
          className={`${styles.paddingX} py-3  sm:px-16 px-6 w-full flex justify-between items-center max-w-7xl mx-auto`}
        >
          <Link to="/">
            <img
              src={logo}
              alt="log"
              className="object-contain h-12 w-12"
              onClick={() => {
                setSelectedPage("");
                window.scrollTo(0, 0);
              }}
            />
          </Link>
          <ul className="list-none hidden md:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  selectedPage === nav.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setSelectedPage(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } absolute z-10 top-20 right-0 p-6 mx-4 my-2 min-w-[140px] rounded-xl black-gradient `}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      selectedPage === nav.title
                        ? "text-white"
                        : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setSelectedPage(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          className="h-1 bg-[#915EFF] z-30 origin-left"
          style={{ scaleX }}
        />
      </nav>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </>
  );
}

export default Navbar;
