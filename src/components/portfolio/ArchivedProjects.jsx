import React from 'react'
import './archivedProjects.css'
import {FiGithub} from 'react-icons/fi'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const archiveData = [
  {
    id: 1,
    year: 2023,
    project: 'Ongoing Project',
    title: 'Spotify Profile (Gatsby)',
    // github: 'https://github.com/dpoppe7/webDev-Social-Network-Project',
    description: 'A web app for visualizing personalized Spotify data.',
    tags: 'API GraphQL Nodejs',
    // demo: 'http://taz.harding.edu/~dpoppe/myfacespace/login.php'
  },
  {
    id: 2,
    year: 2022,
    project: 'iOS Development',
    title: 'Savory&Sweet',
    github: 'https://github.com/dpoppe7/Savory-Sweet',
    description: 'A Recipes app that displays a list of recipes based on ingredient search.',
    tags: 'SwiftUI JSON MVVM',
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
      <h2 className='title'>Other Projects I've been working on</h2>  

      <div className="archived_container">
        {
          archiveData.map(({id, year, project, title, github, description, tags, demo}) => {
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
                <a href={github} target="_blank" className='github-link item_link'><FiGithub/></a>
                <a href={demo} target="_blank" className='demo-link item_link'><HiOutlineExternalLink/></a>
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