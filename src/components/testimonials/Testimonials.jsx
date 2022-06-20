import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/LAview.jpg'

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'Tina Snow',
    review: 'Here should be the review of one of the clients, insert it here.'
  },
  {
    avatar: AVT1,
    name: 'Bob Sith',
    review: 'Here should be the review of one of the clients, insert it here.'
  },
  {
    avatar: AVT1,
    name: 'John Doe',
    review: 'Here should be the review of one of the clients, insert it here.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      //install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials