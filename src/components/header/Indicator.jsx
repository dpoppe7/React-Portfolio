import React from 'react'
import {useState} from 'react'
import './header.css'

const Indicator = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='indicators__container'>
      {/* They go from bottom section to home because of 180deg rotation of indicators (header.css "INDICATORS")*/}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span className='bar'/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><span className='bar'/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><span className='bar'/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><span className='bar'/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><span className='bar'/></a>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><span className='bar'/></a>
    </div>
  )
}

export default Indicator