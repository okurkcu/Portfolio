import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({ tag, name, exp, tech, link, color }) => {
    const colors = ['#379845', '#F37F66', '#BF9AE7', '#DE924F', '#4E91DC']

    const randomNum = () => {
        const randomCol = Math.floor(Math.random() * colors.length);
        return randomCol;
    }

    const num = randomNum();

    const randomColor = colors[num];
    const bgRandomColor = randomColor + 54;

  return (
    <div className='relative bg-[#0E1218] border border-gray-800 rounded-xl w-80 h-85 p-3 hover:-translate-y-5 cursor-pointer duration-200'>
    <div className='relative z-10'>
        <div className='rounded-md p-1 w-fit m-3' style={{ backgroundColor: bgRandomColor }}>
            <h3 className='text-[10px] font-medium' style={{ color: randomColor }}>{tag}</h3>
        </div>
        <h1 className='m-3 text-xl font-medium font-[Syne] text-gray-200'>{name}</h1>
        <p className='m-3 text-sm text-gray-500 font-medium text-start min-h-30'>{exp}</p>
        <div className='bg-gray-700 border border-gray-500 rounded-md p-1 w-fit ml-3 mt-5'>
            <h3 className='text-xs font-light text-gray-300'>{tech}</h3>
        </div>
        <div  className='flex items-center ml-3 mt-5 group cursor-pointer'>
            <a href={link} target='_blank' className='text-[#3143c7] text-medium font-[Inter]'>GitHub</a>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#3142c7] text-[12px] ml-1 transition-transform duration-200 group-hover:translate-x-2" />
        </div>
    </div>
</div>
  )
}

export default ProjectCard