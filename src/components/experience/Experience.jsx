import React from 'react'
import './experience.css'
import {MdDone} from 'react-icons/md'
import {BiBookBookmark} from 'react-icons/bi'
import {VscDebugBreakpointFunctionUnverified} from 'react-icons/vsc'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='experience' 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-duration='6000'
      data-aos-easing="ease-in-sine">
      <h5></h5>
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
                  <p>C++, C#</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>Node.js</p>
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
                  <p>PHP, SQL</p>
              </div>
          </article>

          <article className='skills__item'>
            <VscDebugBreakpointFunctionUnverified className='skills__item-icon'/>
              <div>
                  <p>JavaScript</p>
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
                  <p>Swift</p>
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
                  <p>Figma</p>
              </div>
          </article>
        </div>
      </div>

      <div className='container courses__container'>
        <div className='courses__content'>
          <div className='courses__box'>
            <p className='courses__sentence'>
              Cool courses I'm taking at HU<br/>
            </p>
          </div>

          <div className='courses__box courses__list'>
            <p>
              <MdDone className='icon__class'/>
              Functional Programming
            </p>

            <p>
              <MdDone className='icon__class'/>
              Graphical User Interface
            </p>

            <p>
              <MdDone className='icon__class'/>
              Android and iOS Development
            </p>

            <p>
              <MdDone className='icon__class'/>
              Applied Algorithms
            </p>

            <p>
              <MdDone className='icon__class'/>
              Operating Systems
            </p>

            <p>
              <MdDone className='icon__class'/>
              Database and Networking
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience