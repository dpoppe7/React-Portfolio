import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about__me'>
          <img src={ME} alt="About Image"/>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working experience</small>
            
            </article>
            <article cl assName='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ clients.</small>
            </article>
            
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>

            <p>
              Here is some information about me and the different projects 
              I've been working on as a computer science student.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About