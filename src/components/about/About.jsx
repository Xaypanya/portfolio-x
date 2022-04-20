import React from 'react'
import './About.css'
import Xaypanya_pfp from '../../assets/Xaypanya-Phongsa.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

     <div className="container about__container">
       <div className="about__me">
            <div className="about__me-image">
              <img src={Xaypanya_pfp} alt="Xaypanya Phongsa" />
            </div>
       </div>
       <div className="about__content">
          <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>3+ Years Learning</small>
              </article>
              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>10+</small>
              </article>
              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>40+</small>
              </article>
          </div>

          <p>I'm passionate about Computer Science, innovation and Technology, with an overall experience of 2 
             years as Web Frontend Developer, I have gathered experience in the field of Dev and Project 
             Management.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

       </div>
     </div>
    </section>
  )
}

export default About