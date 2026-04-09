import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const colors = ['#379845', '#F37F66', '#BF9AE7', '#DE924F', '#4E91DC']

  const randomNum = () => {
    const randomCol = Math.floor(Math.random() * colors.length);
    return randomCol;
  }

  const projects = [
    {
      tag: 'AI/ML • Full Stack • Data Visualization',
      name: 'COBASE',
      exp: 'An AI-powered platform that integrates with Jira to analyze project data using BERT and ChatGPT, delivering insights through interactive visualizations.',
      tech: 'React, D3.js, shadcn/ui, Django, BERT, ChatGPT API',
      link: 'https://github.com/atakanbasmaci/COBASE-Web-App-Private'
    },
    {
      tag: 'Frontend • UI Design',
      name: 'LunarView',
      exp: 'LunarView is a space-focused web application that presents astronomical data and insights through an interactive and visually engaging interface.',
      tech: 'React, JavaScript, HTML, CSS, APIs, Three.js',
      link: 'https://github.com/okurkcu/LunarView'
    },
    {
      tag: 'AI • Frontend',
      name: 'Codesplain',
      exp: 'An AI-powered web app that analyzes and explains uploaded code in detail using the OpenAI API, helping users better understand structure, logic, and functionality.',
      tech: 'Javascript, React, HTML / CSS, OpenAI API, ',
      link: 'https://github.com/okurkcu/ClearCodeAI'
    },
    {
      tag: 'Mobile App • AI Chat',
      name: 'Blink',
      exp: 'Blink is a mobile app that helps couples interact with an AI to chat, share movie recommendations, and enhance communication through a playful and engaging interface.',
      tech: 'React Native, JavaScript, HTML, CSS, OpenAI API',
      link: 'https://github.com/okurkcu/Blink-web-mobile'
    },
    {
      tag: 'Frontend • UI/UX • Spotify API',
      name: 'Spotify Clone',
      exp: 'A Spotify-like music app built with Angular, allowing users to browse tracks, play music, and interact with playlists using the Spotify API.',
      tech: 'Typescript, Angular, HTML/CSS, Spotify API',
      link: 'https://github.com/Kore-x27/English-Central-Spotify-Project'
    },
    {
      tag: 'Browser Extension • Frontend • Javascript • UX',
      name: 'MarkIT',
      exp: 'A browser extension that adds timestamp functionality to YouTube videos, allowing users to quickly navigate, create, and share specific moments within a video.',
      tech: 'JavaScript, HTML, CSS, Chrome Extension API',
      link: 'https://github.com/okurkcu/MarkIt'
    },
    {
      tag: 'Frontend • Web App • UI/UX • E-Commerce',
      name: 'Amazon Clone',
      exp: 'A fully functional Amazon clone built with JavaScript, featuring product browsing, add-to-cart, favorites, and a responsive user interface.',
      tech: 'JavaScript, HTML, CSS, LocalStorage, Font Awesome',
      link: 'https://github.com/okurkcu/Amazon-w-JS'
    },
  ]
  return (
     <div className='flex flex-col justify-between mt-8 p-20 gap-10'>
        <div className='flex flex-col justify-start items-start w-4/7'>
            <h3 className='text-violet-500 text-md font-semibold border-b border-b-violet-500 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]'>
              Projects
            </h3>
            <h1 className='text-gray-200 font-[Syne] text-3xl mt-4'>What I’ve Built</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-5'>
            {projects.map(project => (
              <ProjectCard tag={project.tag} name={project.name} exp={project.exp} tech={project.tech} link={project.link} />
            ))}
        </div>
    </div>
  )
}

export default Projects