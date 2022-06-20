import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { SiInstagram } from 'react-icons/si'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Damaris Poppe</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><SiInstagram/></a>
        <a href='https://twitter.com'><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Damaris Poppe. All right reserved.</small>
      </div>

    </footer>
  )
}

export default Footer