import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {VscDebugBreakpointFunctionUnverified} from 'react-icons/vsc'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Some of my</h5>
      <h2>Skills</h2>

      <div className='container skills__container'>
        <p>
          Here are a few technologies and languages I've been working with recently:<br/>
        </p>
     
        <div className='skills__content'>
          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>React.js</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>Phyton</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>C++, C#</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>PHP</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>Kotlin</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>Unity, Blender</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>Swift</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>Figma</p>
              </div>
          </article>
        </div>
      </div>

      <div className='container courses__container'>
        <div className='courses__content'>
          <div className='courses__box'>
            <p>
              Cool courses I'm taking at HU<br/>
            </p>
          </div>

          <div className='courses__box'>
            <p>iOS Development</p>

            <p>Android Development</p>

            <p>Applied Algorithms</p>

            <p>Operating Systems</p>

            <p>Database and Networking</p>

            <p>Linear Algebra</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience