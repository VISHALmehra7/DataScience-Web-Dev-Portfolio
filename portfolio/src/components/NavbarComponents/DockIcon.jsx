import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLightAndDarkTheme } from "../../context/LightAndDarkContext";

const DockIcon = ({ Icon, link, label, toggleTheme, scrollTo }) => {
  const { theme } = useLightAndDarkTheme();
  const [onHover, setonHover] = useState(false);

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (toggleTheme) {
      toggleTheme();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="rounded-full relative"
      onMouseEnter={() => setonHover(true)}
      onMouseLeave={() => setonHover(false)}
    >
      {link && !scrollTo && !toggleTheme ? (
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <Icon
            size={18}
            color={theme === "light" ? "black" : "white"}
            className="cursor-pointer"
          />
        </a>
      ) : (
        <Icon
          onClick={handleClick}
          size={18}
          color={theme === "light" ? "black" : "white"}
          className="cursor-pointer"
        />
      )}

      {onHover && label && (
        <span className="absolute bottom-7 text-xs bg-black text-white dark:text-black dark:bg-white px-1 py-1 rounded-md pointer-events-none whitespace-nowrap">
          {label}
        </span>
      )}
    </motion.div>
  );
};

export default DockIcon;
