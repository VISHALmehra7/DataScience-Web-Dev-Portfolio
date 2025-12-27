import React from 'react'

const ProjectTags = ({tagName}) => {
  return (
        <div className='dark:bg-[#202020] bg-gray-100 text-black px-2 py-1 rounded-md dark:text-white text-[10px] font-medium transition-colors duration-500 ease-in-out'>
       {tagName}
    </div>
  )
}

export default ProjectTags