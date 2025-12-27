import React, { useState } from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import Button from "../components/buttons/Button";
import { useLightAndDarkTheme } from "../context/LightAndDarkContext.jsx";
const ResumeSection = () => {
  const [hover, sethover] = useState(false);
  const { theme } = useLightAndDarkTheme();
  return (
    <div className="flex flex-col items-center justify-center gap-3 ">
      <Button name={"Resume"} />
      <div
        className="h-[400px] rounded-lg overflow-hidden my-auto relative mt-5 shadow-lg dark:shadow-none"
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        <iframe
          src="./Vishal_Mehra_Data_Analyst_Resume.pdf"
          className="h-full w-full"
        ></iframe>
        {hover && (
          <div className="inset-0 bg-black opacity-40 absolute flex items-center justify-evenly gap-4 transition-opacity duration-300 ease-in-out ">
            <a
              href="./Vishal_Mehra_Data_Analyst_Resume.pdf"
              download
              className="cursor-pointer"
            >
              <IoMdCloudDownload size={32} color="white" />
            </a>
            <a href="./Vishal_Mehra_Data_Analyst_Resume.pdf" target="_blank">
              <IoMdEye size={35} className="cursor-pointer" color="white" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeSection;
