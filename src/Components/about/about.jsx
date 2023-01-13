import React from 'react';
import './about.css';
import { FaAward, FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import Me from '../../assets/Full-Stack.jpg';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Me} alt={Me} />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about_card">
            <FaAward className="about-card-icon" />
            <h5>Experience</h5>
            <small>0-1 Years Bootcamp</small>
          </article>
          <article className="about_card">
            <FaUsers className="about-card-icon" />
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>
          <article className="about_card">
            <VscFolderLibrary className="about-card-icon" />
            <h5>Projects</h5>
            <small>30+ Completed</small>
          </article>
        </div>
        <p>
          I have completed several projects including a e-commerce website, a
          social media platform, and a project management tool. All projects
          were delivered on-time and received positive feedback from clients.
          Strong understanding of web development principles and ability to
          design and implement complex web applications.
        </p>
        <a href="#Contacts" className="btn btn-primary">
          Let&apos;s Talk
        </a>
      </div>
    </div>
  </section>
);

export default About;
