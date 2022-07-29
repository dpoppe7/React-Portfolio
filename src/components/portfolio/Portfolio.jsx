import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Sky orange.jpeg'

/* Array of Data */
const data = [
  {
    id: 1,
    image: IMG1,
    project: 'Web Dev Project',
    title: 'Crypto currency dashboard & financial visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 2,
    image: IMG1,
    project: 'Web Dev Project',
    title: 'Crypto currency dashboard & financial visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 3,
    image: IMG1,
    project: 'Web Dev Project',
    title: 'Crypto currency dashboard & financial visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, project, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h5 className='project'>{project}</h5>
              <h3>{title}</h3>
              <div className='portfolio__item-cla'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio