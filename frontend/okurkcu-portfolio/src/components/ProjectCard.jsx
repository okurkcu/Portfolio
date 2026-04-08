import React from 'react'

const ProjectCard = ({ tag, name, exp, tech, link }) => {
  return (
    <div className='relative bg-gray-900 border border-gray-600 rounded-xl w-90 h-90 
    transform transition-transform duration-300 hover:rotate-x-3 hover:rotate-y-3 
    perspective-1000 group'>
    
    {/* Reflection / glossy overlay */}
    <div className='absolute top-0 left-0 w-full h-full rounded-xl 
        bg-gradient-to-t from-white/10 via-transparent to-white/0 
        pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
    
    {/* Card content */}
    <div className='relative z-10'>
        <div className='bg-violet-400 border-violet-600 rounded-md p-1 w-fit m-3'>
            <h3 className='text-sm font-medium text-violet-700'>{tag}</h3>
        </div>
        <h1 className='m-3 text-2xl font-medium text-gray-200'>{name}</h1>
        <p className='m-3 text-md text-gray-600 font-medium text-justify'>{exp}</p>
        <div className='bg-sky-900 border-sky-600 rounded-md p-1 w-fit m-3'>
            <h3 className='text-sm font-medium text-gray-700'>{tech}</h3>
        </div>
    </div>
</div>
  )
}

export default ProjectCard