import React from 'react'
import CV from '../../assets/Resume.v1.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target='_blank' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA