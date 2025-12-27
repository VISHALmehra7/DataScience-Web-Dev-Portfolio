import React, { useState } from "react";
import Button from "../components/buttons/Button";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center gap-3 "
    >
      <div className="max-w-[700px]  m-auto  flex flex-col gap-16 items-center pt-8 sm:pt-18 ">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-6xl">
            Hi, I'm <span className="text-pink-900">Vishal</span>
          </h1>
          <div className="text-center mt-3 lg:text-xl">
            <span>Data Science & AI-ML Engineer </span>|
            <span> Web Developer</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">About</h2>
          <p className="dark:text-[#A3A3A3] text-sm leading-relaxed text-gray-500 ">
            Passionate about Python, NumPy, Pandas, SQL, and MERN stack web
            development. I enjoy building projects that solve real problems and
            exploring new technologies. Apart from coding, I am highly
            interested in football,cricket. You can find me active on{" "}
            <a
              href={"https://github.com/VISHALmehra7"}
              target="_blank"
              className="underline dark:text-blue-300 text-black "
            >
              GitHub
            </a>
            ,{" "}
            <a
              href={"https://www.linkedin.com/in/vishalmehra7/"}
              target="_blank"
              className="underline dark:text-blue-300 text-black"
            >
              LinkedIn
            </a>
            . Feel free to check out my{" "}
            <a
              href="./Vishal_Mehra_Data_Analyst_Resume.pdf"
              target="_blank"
              className="underline dark:text-green-400 text-black"
            >
              Resume
            </a>
            .
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
