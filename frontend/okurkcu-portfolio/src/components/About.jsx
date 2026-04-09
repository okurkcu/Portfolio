import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import StackIcon from './StackIcon';
import useScrollAnimation from '../hooks/useScrollAnimation';
import JavascriptIcon from '../../public/JavaScript.png'
import ReactIcon from '../../public/React.png'
import NextJSIcon from '../../public/Nextjs.png'
import NodeJSIcon from '../../public/Nodejs.png'
import ExpressJSIcon from '../../public/Express.png'
import HTMLIcon from '../../public/HTML5.png'
import TailwindIcon from '../../public/TailwindCSS.png'
import SQLIcon from '../../public/PostgresSQL.png'
import PythonIcon from '../../public/Python.png'
import NetIcon from '../../public/NETcore.png'
import AngularIcon from '../../public/AngularJS.png'
import JavaIcon from '../../public/Java.png'
import CIcon from '../../public/C.png'
import JiraIcon from '../../public/jira.png'
import GitIcon from '../../public/Git.png'
import FigmaIcon from '../../public/Figma.png'

const About = () => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    const uniText = 'Information Systems and Technologies (CTIS) at Bilkent University is an interdisciplinary program combining software development, data, and business-oriented problem solving.';

  return (
    <div id="about" ref={ref} className={`flex justify-between mt-12 p-30 gap-20 scroll-animation ${isVisible ? 'animate' : ''}`}>
        <div className='flex flex-col justify-start items-start w-4/7'>
            <h3 className='text-violet-500 text-md font-semibold border-b border-b-violet-500 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]'>
              About
            </h3>
            <h1 className='text-gray-200 font-[Syne] text-3xl mt-4'>Not Your Average Developer</h1>

            <p className='text-gray-400 mt-6 text-start'>
                I’m a passionate <span className='text-gray-300 font-semibold'>software engineer</span> who genuinely enjoys turning ideas into real, usable products. For me, coding is more than just a profession, it’s something I constantly explore, experiment with, and improve at every day.    
            </p>
            <p className='text-gray-400 mt-6 text-start'>
                I recently graduated from <Tooltip title={uniText}><a href="https://www.ctis.bilkent.edu.tr/" target="_blank" className='text-gray-300 font-semibold hover:text-violet-500 transition duration-0.2'>CTIS, Bilkent University</a></Tooltip> with a honour degree. Throughout my journey, I’ve worked on a variety of projects ranging from frontend-heavy applications to AI-driven systems, always focusing on building clean, efficient, and meaningful solutions.
            </p>
            <p className='text-gray-400 mt-6 text-start'>
                I’m especially interested in AI, data-driven systems, and modern web technologies. I enjoy working with tools like React and exploring how intelligent systems can enhance user experiences. Beyond just writing code, I like thinking in systems, solving real-world problems, and continuously pushing my limits as a developer.
            </p>
            <p className='text-gray-400 mt-6 text-start'>
                When I’m not coding, you’ll probably find me exploring new ideas, working on side projects, or diving deeper into topics that spark my curiosity. (or in gym... or listening music... or researching about astronomy idk.) 
            </p>
        </div>

        <div className='w-3/7 flex flex-col justify-start items-start'>
            <h3 className='text-violet-500 text-md font-semibold border-b border-b-violet-500 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]'>Tech Stack</h3>
            <h1 className='text-gray-200 font-[Syne] text-3xl mt-4'>Tools I Build With</h1>

            <div className='mt-6 flex flex-wrap justify-start align-center gap-4'>
                <StackIcon className='w-1/5' img={JavascriptIcon} tooltip='JavaScript' />
                <StackIcon className='w-1/5' img={ReactIcon} tooltip='ReactJS' />
                <StackIcon className='w-1/5' img={NextJSIcon} tooltip='NextJS' />
                <StackIcon className='w-1/5' img={NodeJSIcon} tooltip='NodeJS' />
                <StackIcon className='w-1/5' img={ExpressJSIcon} tooltip='ExpressJS' />
                <StackIcon className='w-1/5' img={HTMLIcon} tooltip='HTML' />
                <StackIcon className='w-1/5' img={TailwindIcon} tooltip='TailwindCSS' />
                <StackIcon className='w-1/5' img={SQLIcon} tooltip='PostgreSQL' />
                <StackIcon className='w-1/5' img={PythonIcon} tooltip='Python' />
                <StackIcon className='w-1/5' img={NetIcon} tooltip='.Net Core' />
                <StackIcon className='w-1/5' img={AngularIcon} tooltip='AngularJS' />
                <StackIcon className='w-1/5' img={JavaIcon} tooltip='Java' />
                <StackIcon className='w-1/5' img={CIcon} tooltip='C / C++ / C#' />
                <StackIcon className='w-1/5' img={JiraIcon} tooltip='Jira' />
                <StackIcon className='w-1/5' img={GitIcon} tooltip='Git / GitHub' />
                <StackIcon className='w-1/5' img={FigmaIcon} tooltip='Figma' />
            </div>
        </div>
    </div>
  )
}

export default About