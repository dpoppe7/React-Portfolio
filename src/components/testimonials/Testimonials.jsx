import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/LAview.jpg'

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar"/>
            <h5 className='client__name'>Achievement</h5>
            <small className='client__review'>
              Here you should insert a review from a client.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar"/>
            <h5 className='client__name'>Achievement</h5>
            <small className='client__review'>
              Here you should insert a review from a client.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar"/>
            <h5 className='client__name'>Achievement</h5>
            <small className='client__review'>
              Here you should insert a review from a client.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials