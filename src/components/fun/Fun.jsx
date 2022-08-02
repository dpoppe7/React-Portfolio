import React from 'react'
import './fun.css'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Fun = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='fun'
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-duration='6000'
    data-aos-easing="ease-in-sine">
      <h2>Outside of work</h2>

      <div className="container fun__container">
        <div className='item__container'>
          <h5 className='item__text'>Listening to</h5>
          
          <a href='https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv?si=d5cdaafbad2045ad' target="_blank">
            <div className='fun item__song'/>
            <p className='item__name'>Hotel California</p>
            <p className='item__subname'>Eagles</p>
          </a>
        </div>

        <div className='item__container'>
          <h5 className='item__text'>Reading</h5>
          <a href='https://www.goodreads.com/book/show/13079982-fahrenheit-451' target="_blank">
            <div className='fun item__book'/>
            <p className='item__name'>Fahrenheit 451</p>
            <p className='item__subname'>Ray Bradbury</p>
          </a>
        </div>

        <div className='item__container'>
          <h5 className='item__text'>Watching</h5>
          <a href='https://www.imdb.com/title/tt2560140/' target="_blank">
            <div className='fun item__show'/>
            <p className='item__name'>Attack on Titan</p>
            <p className='item__subname'>Hajime Isayama</p>
          </a>
        </div>

        <div className='item__container'>
          <h5 className='item__text'>Traveled to</h5>
          <a href='https://www.visittheusa.mx/destination/los-angeles' target="_blank">
            <div className='fun item__place'/>
            <p className='item__name'>Los Angeles</p>
            <p className='item__subname'>California</p>
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Fun