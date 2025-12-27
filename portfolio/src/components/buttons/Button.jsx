import React from "react";

const Button = ({ name, link, pointer, target, onClick, LeftIcon }) => {
  return (
    <span
      onClick={onClick}
      className={`flex gap-2 items-center justify-center dark:bg-[#FAFAFA] bg-black text-white px-3 py-1 rounded-md transition-colors duration-500 ease-in-out dark:text-black text-xs font-medium dark:hover:bg-gray-200 ${
        pointer && "cursor-pointer"
      }`}
    >
      {LeftIcon && <LeftIcon size={14} />}

      {link ? (
        <a href={link} target={target && "_blank"}>
          {name}
        </a>
      ) : (
        name
      )}
    </span>
  );
};

export default Button;
