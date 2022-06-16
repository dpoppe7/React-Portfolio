import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
    <a href="#"><AiOutlineHome/></a>
    <a href="#about"><BiUser/></a>
    <a href="#experience"><BiBook/></a>
    </nav>
  )
}

export default Nav