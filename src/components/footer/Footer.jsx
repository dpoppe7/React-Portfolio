import React from 'react'
import './footer.css'
import { IoIosArrowDropup } from 'react-icons/io'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiFigma} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'><IoIosArrowDropup/></a>
      <div className='mobile-socials'>
        <a href="https://linkedin.com" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com/dpoppe7" target="_blank"><FiGithub/></a>
        <a href="https://figma.com/@dpoppe7" target="_blank"><FiFigma/></a>
        <a href="https://instagram.com/dpoppe07" target="_blank"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made with ❤️  by Damaris. 2022.</small>
      </div>

    </footer>
  )
}

export default Footer