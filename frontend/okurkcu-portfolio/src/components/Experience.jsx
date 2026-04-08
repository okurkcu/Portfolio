import React from 'react'
import TimelineComp from './TimelineComp'

const Experience = () => {
  return (
    <div className='flex flex-col justify-between pl-30 pr-30'>
        <div className='flex flex-col justify-start items-start'>
            <h3 className='text-violet-500 text-md font-semibold border-b border-b-violet-500 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]'>
              Experience
            </h3>
            <h1 className='text-gray-200 font-[Syne] text-3xl mt-4'>Where Things Got Real</h1>
        </div>
        <div className='flex justify-center align-center mt-20 mb-16 text-gray-100'>
            <TimelineComp />
        </div>
    </div>
  )
}

export default Experience