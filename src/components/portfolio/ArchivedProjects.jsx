import React from 'react'
import './archivedProjects.css'
import {FiGithub} from 'react-icons/fi'
import {HiOutlineExternalLink} from 'react-icons/hi'
import IMG1 from '../../assets/Sky orange.jpeg'
import P1_pics from '../../assets/P1_pics.png'
import P2_pics2 from '../../assets/P2_pics2.png'
import P3_pics from '../../assets/P3_pics.png'
import P4_pics from '../../assets/Website.png'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const archiveData = [
  {
    id: 1,
    year: 2022,
    image: P1_pics,
    project: 'iOS Development',
    title: 'Savory&Sweet',
    github: 'https://github.com/dpoppe7/webDev-Social-Network-Project',
    description: 'A Recipes app built with Swift. This project was developed to test my list.',
    tags: 'SwiftUI API MVVM',
    demo: 'http://taz.harding.edu/~dpoppe/myfacespace/login.php'
  },
  {
    id: 1,
    year: 2022,
    image: P1_pics,
    project: 'iOS Development',
    title: 'Savory&Sweet',
    github: 'https://github.com/dpoppe7/webDev-Social-Network-Project',
    description: 'A Recipes app built with Swift.',
    tags: 'SwiftUI API MVVM',
    demo: 'http://taz.harding.edu/~dpoppe/myfacespace/login.php'
  },

  {
    id: 1,
    year: 2022,
    image: P1_pics,
    project: 'iOS Development',
    title: 'Savory&Sweet',
    github: 'https://github.com/dpoppe7/webDev-Social-Network-Project',
    description: 'A Recipes app built with Swift.',
    tags: 'SwiftUI API MVVM',
    demo: 'http://taz.harding.edu/~dpoppe/myfacespace/login.php'
  },
]


const Portfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id='archivedProjects'
    data-aos="fade-up"
      data-aos-offset="150"
      data-aos-duration='6000'
      data-aos-easing="ease-in-sine">
      <h2 className='title'>Other Projects I've worked on</h2>  

      <div className="archived_container">
        {
          archiveData.map(({id, image, year, project, title, github, description, tags, demo}) => {
            return (
              <article key={id} className="archived__item">
              <div className='item_year'>
                <h5>{year}</h5>
              </div> 
              <div>
                <h5 className='project item_project'>{project}</h5>
                <a href={github} target="_blank">
                  <h2 className='title item_title'>{title}</h2>
                </a>
              </div>
              <div>
                <p className='item_description'>{description}</p>
              </div>
              <div>
                <p className='tags item_tags'>{tags}</p>
              </div> 
              <div>
                {/* <div className="portfolio__item-image">
                  <a href={github} target="_blank">
                    <img src={image} alt={title}/>
                  </a>
                </div> */}
                <a href={github} target="_blank" className='github-link'><FiGithub/></a>
                <a href={demo} target="_blank" className='demo-link'><HiOutlineExternalLink/></a>
                {/* <p className='tags'>{tags}</p> */}
              </div>  
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio