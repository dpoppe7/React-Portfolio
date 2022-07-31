import React from 'react'
import './portfolio.css'
import {FiGithub} from 'react-icons/fi'
import {HiOutlineExternalLink} from 'react-icons/hi'
import IMG1 from '../../assets/Sky orange.jpeg'
import P1_pic1 from '../../assets/P1_pic1.png'
import P1_pics from '../../assets/P1_pics.png'

/* Array of Data */
const data = [
  {
    id: 1,
    image: P1_pics,
    project: 'Web Dev Project',
    title: 'Social Network - MyFaceSpace',
    github: 'https://github.com/dpoppe7/webDev-Social-Network-Project',
    description: 'A Social Networking website that works similar to the first version of Facebook. The scripts interact with a database where data for different accounts is stored. This project implements user authentication, sessions and a simple clean UI.',
    tags: 'Database HTML CSS Javascript PHP MySQL',
    demo: 'http://taz.harding.edu/~dpoppe/myfacespace/login.php'
  },
  {
    id: 2,
    image: IMG1,
    project: 'Game Dev Group Project',
    title: 'Rocket Rush - Capstone',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 3,
    image: IMG1,
    project: 'Capstone group Project',
    title: 'Rocket Rush',
    github: 'https://github.com/dpoppe7/SpaceRace',
    demo: 'https://dribbble.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, project, title, github, description, tags, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={github}>
                  <img src={image} alt={title}/>
                </a>
              </div>

              <h5 className='project'>{project}</h5>
              <a href={github} className='title'>
                <h3>{title}</h3>
              </a>

              <p className='description'>{description}</p>
              
              <a href="https://github.com/dpoppe7" target="_blank" className='github-link'><FiGithub/></a>
              <a href="http://taz.harding.edu/~dpoppe/myfacespace/login.php" target="_blank" className='demo-link'><HiOutlineExternalLink/></a>
              <p className='tags'>{tags}</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio