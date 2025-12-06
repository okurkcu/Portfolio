import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({ onOpenPopup }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="navbar-wrapper">
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className='navbar-left'>
            <Link to="/">
              <img src="/OK-Logo.png" alt="OK" className="logo-img" />
            </Link>
            <span className='logo-text'>Ozan Kurkcu</span>
          </div>
          <div className='navbar-right'>
            <nav className='nav-items-dark'>
              <NavLink to="/blog" className='blog-btn'>Blog</NavLink>
            </nav>
            <nav className='nav-items'>
              <button type="button" className='hire-btn' onClick={onOpenPopup}>Contact</button>
            </nav>
          </div>
        </div>
    </div>
  )
}

export default Navbar