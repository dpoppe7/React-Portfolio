import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  return (
    <header>
    {/* <div class="gradient"> */}
      <div className="container header__container">
        <div className='header-description'>
          <h5>Hello, I'm</h5>
          <h1>Damaris Poppe</h1>
          <h5 className="text-light">
            I'm a creative developer and visual design enthusiast. Currently pursuing a Bachelor of Science 
            in Computer Science with a Math minor.
            Studying at Harding University in Arkansas.
            </h5>
          <CTA/>
        </div>
        <HeaderSocials/> 

        <div className="me">
          <div className='me gradient-shape'></div>
          <img src={ME} alt=""/>
        </div>

        <div className='scroll__down'>
          <a href="#contact">Scroll Down</a>
        </div>
      </div>
    {/* </div> */}
    </header>
  )
}

export default Header