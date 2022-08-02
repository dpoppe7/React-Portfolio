import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <header>
    {/* <div class="gradient"> */}
      <div className="container header__container">
        <div className='header-description'
        data-aos="fade-up"
        data-aos-duration="1000">
          <h5>Hello, I'm</h5>
          <h1>Damaris Poppe</h1>
          <h2 className="text-light">
            I'm a creative software developer and visual design enthusiast.
          </h2>
          <h5 className="text-light">
            Studying CS at Harding University in Arkansas. 
          </h5>
          <h5 className="intern-txt text-light">
            Looking for a Fall Internship, 2022.
          </h5>
          <CTA/>
        </div>
        <HeaderSocials/> 

        <div className="me"
        data-aos="fade-up"
        data-aos-duration="1000">
          <div className='me gradient-shape'></div>
          <img src={ME} alt=""/>
        </div>

        <div className='scroll__down'>
          <a href="#fun">Scroll Down</a>
        </div>
      </div>
    {/* </div> */}
    </header>
  )
}

export default Header