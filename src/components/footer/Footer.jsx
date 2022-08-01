import React from 'react'
import './footer.css'
import { BiUpArrowCircle } from 'react-icons/bi'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'><BiUpArrowCircle/></a>
      <div className="footer__copyright">
        <small>&copy; Made with ❤️  by Damaris. 2022.</small>
      </div>

    </footer>
  )
}

export default Footer