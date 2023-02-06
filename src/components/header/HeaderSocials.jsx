import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiFigma} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/damarispoppe/" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com/dpoppe7" target="_blank"><FiGithub/></a>
        <a href="https://figma.com/@dpoppe7" target="_blank"><FiFigma/></a>
        <a href="https://instagram.com/dpoppe07" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials