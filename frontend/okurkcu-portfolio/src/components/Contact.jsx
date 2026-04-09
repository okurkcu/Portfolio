import React from 'react'
import LinkButton from './LinkButton'
import useScrollAnimation from '../hooks/useScrollAnimation'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.svg'
import mailLogo from '../../public/mail.png'

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div id="contact" ref={ref} className={`flex flex-col pl-20 pr-20 pt-10 pb-5 justify-center items-center scroll-animation ${isVisible ? 'animate' : ''}`}>
        <div className='border-b border-gray-600 w-4/5'></div>
        <div className='font-[Syne] text-5xl text-start justify-start w-4/5 ml-5 mt-20 mb-10'>
            <h1 className='text-gray-300'>Let’s build</h1>
            <h1 className='text-gray-300'>something <span className='text-violet-500'>together.</span></h1>
        </div>
        <div className='flex justify-start text-start gap-5 ml-5 mb-10 w-4/5'>
            <LinkButton icon={linkedinLogo} path='https://www.linkedin.com/in/ozan-kurkcu/' msg='LinkedIn' />
            <LinkButton icon={githubLogo} path='https://github.com/okurkcu' iconScale='2' msg='GitHub' />
            <LinkButton icon={mailLogo} mail='ozank2001@gmail.com' msg='Copy Email' />
        </div>
        <div className='border-b border-gray-600 w-4/5'></div>
        <div className='mt-5 ml-5 w-4/5 justify-start text-start'>
            <h3 className='text-zinc-800 text-xs font-[Inter]'>© 2026 Ozan Kurkcu • Ankara, TUR</h3>
        </div>
    </div>
  )
}

export default Contact