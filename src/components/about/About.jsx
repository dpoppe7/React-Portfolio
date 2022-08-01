import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {FiArrowUpRight} from 'react-icons/fi'
import CV from '../../assets/Resume.v1.pdf'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className='about__content'>
          <h2>
            Nice to meet you!
          </h2>
          <p>
            My name is Damaris, I'm currently a senior student pursuing a <span className='accent'>BS in Computer Science with a Math minor</span> at Harding University, Arkansas. <br/><br/>

            Through my 4-year journey I learned about solving challenges through simplifying the complexity with <span className='accent'>intuitive system design and software design</span>.
            I also enjoy implementing <span className='accent'>visually appealing solutions</span> with a human-focused approach in web/app development. <br/><br/>

            You can find me posting content on my <a href="https://github.com/dpoppe7" target="_blank" className='github_link'>github<FiArrowUpRight className='link-icon'/></a><br/><br/>
          </p>

          <a href={CV} target='_blank' className='btn'>Get my resume</a>
        </div>
      </div>
    </section>
  )
}

export default About