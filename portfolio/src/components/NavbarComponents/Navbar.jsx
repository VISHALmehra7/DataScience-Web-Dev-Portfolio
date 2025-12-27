import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import DockIcon from "./DockIcon";
import { useLightAndDarkTheme } from "../../context/LightAndDarkContext";
import DATA from "../../data/dockIcons.js";

const Navbar = () => {
  const { toggleTheme, theme } = useLightAndDarkTheme();
  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <motion.div className=" fixed bottom-0 left-1/2 z-50 mb-4 -translate-x-1/2 bg-white shadow-md border border-gray-200 dark:border-none flex justify-evenly items-center gap-6 px-4 py-4  rounded-full dark:bg-[#17191b] ">
      {DATA.map((singleData) => (
        <DockIcon
          key={singleData.id}
          Icon={singleData.Icon}
          link={singleData.link}
          label={singleData.label}
          scrollTo={singleData.scrollTo && scrollTo}
        />
      ))}

      {theme === "light" ? (
        <DockIcon Icon={IoSunnyOutline} toggleTheme={toggleTheme} />
      ) : (
        <DockIcon Icon={IoMoonOutline} toggleTheme={toggleTheme} />
      )}
    </motion.div>
  );
};

export default Navbar;
