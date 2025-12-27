import React, { useState } from "react";
import Button from "../components/buttons/Button";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import dataScienceProjects from "../data/DataScienceProjects.js";
import webDevelopementProjects from "../data/WebDevelopementProjects.js";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";
const MyProjects = () => {
  const [projectToShow, setProjectToShow] = useState("DS");
  const projects =
    projectToShow === "DS" ? dataScienceProjects : webDevelopementProjects;
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <Button name={"My Projects"} />
        <div className="text-3xl font-extrabold sm:text-5xl lg:text-5xl text-center wrap-break-word ">
          Check out my latest {<span className="text-blue-400">work</span>}
        </div>
        <p className="text-gray-500 dark:text-[#A3A3A3] text-[16px] text-center leading-relaxed lg:text-xl  ">
          I am passionate about leveraging data to uncover insights and solve
          complex problems, while also building full-stack solutions to turn
          those insights into practical, user-friendly products.
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <span className="flex items-center justify-center gap-1">
            {" "}
            <FaArrowLeft />
            <Button
              name={"Data Science Projects"}
              onClick={() => setProjectToShow("DS")}
              pointer={true}
            />
          </span>
          <span className="flex items-center justify-center gap-1">
            {" "}
            <Button
              name={"Web Development Projects"}
              onClick={() => setProjectToShow("WEB")}
              pointer={true}
            />
            <FaArrowRight />
          </span>
        </div>
        <AnimatePresence>
          <motion.div
            key={projectToShow}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mx-auto "
          >
            {projects.map((singleProject) => (
              <ProjectCard project={singleProject} key={singleProject.id} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MyProjects;
