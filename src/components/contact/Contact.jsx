import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>damariscecilia29@gmail.com</h5>
            <a href='mailto:damariscecilia29@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>User: damaris.poppe</h5>
            <a href='https://m.me/damaris.poppe' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsap</h4>
            <h5>+1(870)517-9344</h5>
            <a href='https://api.whatsapp.com/send?phone=+18705179344' target="_blank">Send a Message</a>
          </article>
        </div>

        <form action=''>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact