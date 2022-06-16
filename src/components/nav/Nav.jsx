import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessage} from 'react-icons/tb'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><TbMessage/></a>
    </nav>
  )
}

export default Nav