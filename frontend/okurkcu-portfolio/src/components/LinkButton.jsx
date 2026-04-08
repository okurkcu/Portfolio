import React from 'react'
import Tooltip from '@mui/material/Tooltip';     

const LinkButton = ({ icon, path, mail, iconScale = '1', msg }) => {
  const handleClick = () => {
    if (path) {
      window.open(path, "_blank");
    } else {
      navigator.clipboard.writeText(mail);
      alert("Email copied!");
    }
  }

  return (
    <div className='flex justify-center items-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer'>
      <Tooltip describeChild title={msg} placement="bottom">
        <button
          type='button'
          className='flex justify-center items-center border border-gray-600 bg-gray-900 rounded-lg w-10 h-10 p-2 hover:cursor-pointer grayscale hover:grayscale-0 transition duration-300'
          onClick={handleClick}
        >
          <img src={icon} alt='link icon' className='w-8 h-8 object-contain' style={{ transform: `scale(${iconScale})` }} />
        </button>
      </Tooltip>
    </div>
  )
}

export default LinkButton