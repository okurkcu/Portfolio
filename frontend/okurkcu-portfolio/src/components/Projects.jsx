import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
     <div className='flex flex-col justify-between mt-8 p-30 gap-10'>
        <div className='flex flex-col justify-start items-start w-4/7'>
            <h3 className='text-violet-500 text-md font-semibold border-b border-b-violet-500 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]'>
              Projects
            </h3>
            <h1 className='text-gray-200 font-[Syne] text-3xl mt-4'>What I’ve Built</h1>
        </div>
        <div className='flex gap-5'>
            <ProjectCard tag='Fullstack - AI' name='Portfolio' exp='asghd fjhgsd sfsgan cb djhsfds fcsdh jsd csd sdnfgsdhvc sdvfs' tech='React, API' link='something' />
            <ProjectCard tag='Fullstack - AI' name='Portfolio' exp='asghd fjhgsd sfsgan cb djhsfds fcsdh jsd csd sdnfgsdhvc sdvfs' tech='React, API' link='something' />
        </div>
    </div>
  )
}

export default Projects