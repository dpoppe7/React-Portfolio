import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFigma} from 'react-icons/si'
import {FiInstagram} from 'react-icons/fi'
import {SiVsco} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/dpoppe7" target="_blank"><FaGithub/></a>
        <a href="https://figma.com/@dpoppe7" target="_blank"><SiFigma/></a>
        <a href="https://instagram.com/dpoppe07" target="_blank"><FiInstagram/></a>
        <a href="https://vsco.co/damariscph/gallery" target="_blank"><SiVsco/></a>
    </div>
  )
}

export default HeaderSocials