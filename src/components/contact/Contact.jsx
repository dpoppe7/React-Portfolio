import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <section id='contact'
    data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration='6000'
      data-aos-easing="ease-in-sine">
      <h5>Get in Touch</h5>
      <h2> Contact Me</h2>
      
      <div className='container contact__container'>
        <div className='contact_link'>
          <a href='mailto:damariscecilia29@gmail.com' target="_blank" className='contact_link'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h5 className='email'>damariscecilia29@gmail.com</h5>
          </a>
        </div>

        <form action=''>
          <h2 className='connect_desc'>
            Tell me more about you ✦
          </h2>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <h2 className='connect_desc'>
            Share your ideas with me ✦
          </h2>
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact