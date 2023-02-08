import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ngk9nba', 'template_8vem7tv', form.current, 'PpQpXTGKoUdVQlR5K');

    document.getElementById('success_msg').hidden = false;

    e.target.reset();

    //Submitted message disappears after 3 seconds
    setTimeout(() => {
      document.getElementById('success_msg').hidden = true;
    }, 4000);
  };

  return (
    <section id='contact'
    data-aos="fade-right"
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

        <form ref={form} onSubmit={sendEmail}>
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
          <div id='success_msg' hidden='True' className='success__msg'>✦ Successfully Sent! ✦</div>
        </form>
      </div>
    </section>
  )
}

export default Contact