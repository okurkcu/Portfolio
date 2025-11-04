import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
        <div className='navbar'>
          <div className='navbar-left'>
            <img src="../../public/OK-Logo.png" alt="OK" />
            <span className='logo-text'>Ozan Kurkcu</span>
          </div>
          <div className='navbar-right'>
            <nav className='nav-items'>
              <a href="" className='hire-btn'>Hire Me</a>
            </nav>
          </div>
        </div>
    </div>
  )
}

export default Navbar