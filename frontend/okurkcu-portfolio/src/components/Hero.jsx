import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import LinkButton from './LinkButton'
import useScrollAnimation from '../hooks/useScrollAnimation'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.svg'
import mailLogo from '../../public/mail.png'

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`scroll-animation ${isVisible ? 'animate' : ''}`}>
      <div className="flex justify-center items-center mt-12 gap-1.5  hover:cursor-default">
        <FontAwesomeIcon icon={faCircle} className="text-green-500 text-[8px] animate-pulse" />
        <h3 className='text-green-600 font-[Inter] text-xs font-thin'>Software Engineer - Full Stack & Data Science</h3>
      </div>

      <div className='flex flex-col justify-center items-center mt-4 hover:cursor-default'>
        <span className='text-7xl text-gray-50 font-[Syne]'>Hey I'm</span>
        <span className='relative text-7xl font-[Syne] p-2.5 text-transparent bg-clip-text 
                 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 
                 inline-block hover:after:scale-x-100 after:origin-left after:absolute after:left-0 after:-bottom-1 
                 after:h-1 after:w-full after:bg-purple-500 after:scale-x-0 after:transition-transform after:duration-500
                 hover:after:bg-fuchsia-500 hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(178,102,255,0.5)] transition-all duration-300'>Ozan Kürkçü</span>
      </div>

      <div className='flex justify-center items-center mt-6'>
        <p className='text-gray-500 w-1/2 text-center'>
          <span className='text-gray-300'>Frontend-focused Full-Stack Engineer</span> passionate about building modern web applications and exploring AI-driven solutions.

          Alongside creating intuitive user interfaces, I actively work on projects in <span className='text-gray-300'>data science and artificial intelligence</span>, combining development with data-driven thinking.

          I'm continuously improving my skills and looking for opportunities to contribute and grow.
        </p>
      </div>

      <div className='flex justify-center items-center mt-12 gap-8'>
        <LinkButton icon={linkedinLogo} path='https://www.linkedin.com/in/ozan-kurkcu/' msg='LinkedIn' />
        <LinkButton icon={githubLogo} path='https://github.com/okurkcu' iconScale='2' msg='GitHub' />
        <LinkButton icon={mailLogo} mail='ozank2001@gmail.com' msg='Copy Email' />
      </div>  

      <div className='flex justify-center items-center mt-16 gap-4'>
        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 text-sm animate-ping" />
        <p className='text-gray-500 text-center text-sm'>Scroll to Explore</p>
      </div>
    </div>
  )
}

export default Hero