import React from 'react'
import './nav.css'
import {FiSun} from 'react-icons/fi'
import {FiMoon} from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {GoLightBulb} from 'react-icons/go'
import {BiBook} from 'react-icons/bi'
import {TbMessage} from 'react-icons/tb'
import {VscSmiley} from 'react-icons/vsc'
import {useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      <div className='color-mode' id='theme-toggler'>
          <span className='theme-icon'><FiSun/></span>
          <span className='theme-icon active'><FiMoon/></span>
      </div>
      
      <div className='mobile-view'>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome className='nav-icon'/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser className='nav-icon'/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GoLightBulb className='nav-icon'/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook className='nav-icon'/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage className='nav-icon'/></a>
        <a href="#fun" onClick={() => setActiveNav('#fun')} className={activeNav === '#fun' ? 'active' : ''}><VscSmiley className='nav-icon'/></a>
      </div>

      <div className='desktop-view'>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Skills</a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Projects</a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
        <a href="#fun" onClick={() => setActiveNav('#fun')} className={activeNav === '#fun' ? 'active' : ''}>Fun</a>
      </div>
    </nav>
  )
}

export default Nav