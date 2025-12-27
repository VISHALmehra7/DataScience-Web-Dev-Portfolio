import React from "react";

const EducationSection = () => {
  return (
    <div className=" w-full">
      <h1 className="text-xl font-bold mb-4">Education</h1>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full w-14 h-14">
            <img src="./images.jpeg" alt="" />
          </div>
          <div>
            <h1 className="text-sm dark:text-[#FAFAFA] text-gray-500">
              Netaji Subhas Institute Of Technology,Patna
            </h1>
            <p className="text-xs dark:text-[#d7d6d6] text-gray-400">
              B.Tech ( Mechanical Engineering )
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xs text-[#A3A3A3]">2016 - 2020</h1>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
