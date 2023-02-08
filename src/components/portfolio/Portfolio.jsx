import React from 'react'
import './portfolio.css'
import {FiGithub} from 'react-icons/fi'
import {HiOutlineExternalLink} from 'react-icons/hi'
import P1_pics from '../../assets/P1_pics.png'
import P2_pics2 from '../../assets/P2_pics2.png'
import P3_pics from '../../assets/P3_pics.png'
import P4_pics from '../../assets/Website.png'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {useState} from 'react'
import Experience from '../experience/Experience'
import ArchivedProjects from '../portfolio/ArchivedProjects'

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
    image: P2_pics2,
    project: 'Game Dev Group Project',
    title: 'Rocket Rush - Capstone',
    github: 'https://github.com/dpoppe7/Rocket-Rush-SpaceRace',
    description: 'A 3D game based on the board game Santorini. The GUI development and implementation of the game was my main focus of this project as well as graphic animations. This project implements Networking and AI features for different game modes, multiplayer or single player.',
    tags: 'Unity C# 3D Blender PUN2 SharpNEAT InnoWizard',
    demo: 'https://play.unity.com/mg/other/rocketrushweb'
  },
  {
    id: 3,
    image: P3_pics,
    project: 'Android App Group Project',
    title: 'Password Manager App',
    github: 'https://github.com/dpoppe7/Password-Manager-Project',
    description: 'A basic Password Manager Android app that allows users to store different usernames and passwords, for multiple accounts. Using API implementation from "Have I Been Pwned", this app checks whether the data has been involved in a data breach.',
    tags: 'Kotlin Android Volley API RecyclerViews Figma',
    demo: 'https://github.com/dpoppe7/Password-Manager-Project'
  },
  {
    id: 4,
    image: P4_pics,
    project: 'Website Portfolio Project',
    title: 'Personal Portfolio Website',
    github: 'https://github.com/dpoppe7/React-Portfolio/tree/main',
    description: 'A one-page website built with ReactJS. With this personal project I was able to display some of my latests projects/interests/about-me in a visually and interactive way. Easy to navigate through and mobile responsive design.',
    tags: 'ReactJS CSS3 Javascript useStateHooks ReactIcons',
    demo: 'https://dpoppe7.github.io/React-Portfolio/'
  }
]


const Portfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

const [show, setShow] = useState(false);

  return (
    <section id='portfolio'
    data-aos="fade-right"
      data-aos-offset="300"
      data-aos-duration='6000'
      data-aos-easing="ease-in-sine">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, project, title, github, description, tags, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={github} target="_blank">
                  <img src={image} alt={title}/>
                </a>
              </div>

              <h5 className='project'>{project}</h5>
              <a href={github} target="_blank" className='title'>
                <h3>{title}</h3>
              </a>

              <p className='description'>{description}</p>
              
              <a href={github} target="_blank" className='github-link'><FiGithub/></a>
              <a href={demo} target="_blank" className='demo-link'><HiOutlineExternalLink/></a>
              <p className='tags'>{tags}</p>
              </article>
            )
          })
        }

      <button className='btn archived_box' onClick={() => setShow(currentShow => !currentShow)} id='LoadMoreBtn'>
        More Projects
        { show ? (<ArchivedProjects/>)
          : null }
      </button>
      </div>
    </section>
  )
}

export default Portfolio