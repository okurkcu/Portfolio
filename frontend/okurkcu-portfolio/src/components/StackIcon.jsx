import React from 'react'
import Tooltip from '@mui/material/Tooltip'

const StackIcon = ({ img, tooltip }) => {
  return (
    <div className='flex justify-center items-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer'>
      <Tooltip describeChild title={tooltip} placement="bottom">
        <button
          type='button'
          className='flex justify-center items-center border border-gray-600 bg-gray-900 rounded-lg w-16 h-16 p-2 hover:cursor-pointer transition duration-300'
        >
          <img src={img} alt='link icon' className='w-14 h-14 object-contain' />
        </button>
      </Tooltip>
    </div>
  )
}

export default StackIcon