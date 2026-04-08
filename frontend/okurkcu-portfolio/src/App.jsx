import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
    </div>
  )
}

export default App
