import React from 'react';
import './about.css';
import Me from '../../assets/Full-Stack.jpg'
import { FaAward } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img  src={Me} alt={Me} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              < FaAward className='about-card-icon' />
              <h5>Experience</h5>
              <small>0-1 Years Bootcamp</small>
            </article>
            <article className="about_card">
              < FaUsers className='about-card-icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about_card">
              < VscFolderLibrary className='about-card-icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum impedit quod officiis tempora necessitatibus eveniet. Assumenda eum incidunt rerum libero voluptates dignissimos? Blanditiis quae libero beatae, vero eos ratione.</p>
          <a href="#Contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About