import React from "react";
import Button from "../buttons/Button";
import ProjectTags from "../buttons/ProjectTags";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className=" w-full sm:w-[330px] min-h-[400px] rounded-md overflow-hidden flex flex-col items-center gap-2 border dark:border-[#1e1e1e] border-gray-100 shadow-md dark:shadow-none">
      <div className="bg-blue-200 h-[200px] w-full ">
        <img
          className="w-full h-full object-cover"
          src={project.image}
          alt=""
        />
      </div>
      <div className="pl-3">
        <h3 className="font-medium text-[18px] mb-1 ">{project.title}</h3>
        <p className="dark:text-[#A3A3A3] text-gray-500 text-[13px] wrap-break-word ">
          {project.description}
        </p>
      </div>
      <div className="pl-3 w-full flex items-center justify-start gap-1 flex-wrap ">
        {project.tags.map((singleTag) => (
          <ProjectTags tagName={singleTag} />
        ))}
      </div>
      <div className=" w-full flex justify-start items-center pl-3 gap-1 flex-wrap">
        {project.website && (
          <Button
            name={"Website"}
            link={project.website}
            target={true}
            LeftIcon={IoIosGlobe}
          />
        )}
        {project.source && (
          <Button
            name={"Source"}
            link={project.source}
            target={true}
            LeftIcon={FaGithub}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
