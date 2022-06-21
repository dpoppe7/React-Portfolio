import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  //Gradient effect(by Uzo Awili)
  const gradient = document.querySelector(".gradient");

  function onMouseMove(event) {
    gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(159,0,191,.9) 0, #4D4FA7 70%)';
  }
  document.addEventListener("mousemove", onMouseMove);

  return (
    <header>
      <div class="gradient">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Damaris Poppe</h1>
        <h5 className="text-light">I'm a Computer Science Student working towards building creative tech solutions. </h5>
        <CTA/>
        <HeaderSocials/> 

        <div className="me">
          <div className='me gradient-shape'></div>
          <img src={ME} alt=""/>
        </div>

        <div className='scroll__down'>
          <a href="#contact">Scroll Down</a>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header