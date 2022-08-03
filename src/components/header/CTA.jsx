import React from 'react'
/*import CV from '../../assets/Resume.v1.pdf'*/

const CTA = () => {
  return (
    <div className='cta'>
        {/*<a href={CV} target='_blank' className='btn'>Resume</a>*/}
        <a href="#portfolio" className='btn'>Projects</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA