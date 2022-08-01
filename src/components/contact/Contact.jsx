import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2> Contact Me</h2>
      
      <div className='container contact__container'>
        <div className='contact_link'>
          <a href='mailto:damariscecilia29@gmail.com' target="_blank" className='contact_link'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h5>damariscecilia29@gmail.com</h5>
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