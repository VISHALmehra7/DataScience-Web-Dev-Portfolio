import React from "react";
import Button from "../components/buttons/Button";
import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="mb-20  mt-6"
    >
      <div className="flex flex-col items-center justify-center gap-3 ">
        <Button name={"Contact"} />
        <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-5xl text-center wrap-break-word">
          Get in {<span className="text-pink-700">Touch</span>}
        </h1>
        <p className="leading-relaxed dark:text-[#A3A3A3] text-gray-500 lg:text-xl text-center">
          Looking for exciting opportunities in Data Science AI-ML & Web
          Development, You can reach me at{" "}
          {<span className="text-yellow-500">vishalmhr7@gmail.com</span>} , call
          me at {<span className="text-blue-500">+918540892160</span>}, or
          connect with me on{" "}
          {
            <a
              href={"https://www.linkedin.com/in/vishalmehra7/"}
              target="_blank"
              className="underline text-blue-500"
            >
              LinkedIn
            </a>
          }{" "}
          and{" "}
          {
            <a
              href={"https://github.com/VISHALmehra7"}
              target="_blank"
              className="underline text-blue-500"
            >
              Github
            </a>
          }{" "}
          . I’m eager to contribute to innovative projects and grow as a
          professional."
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSection;
