/* eslint-disable */

import React from 'react';
import './portfolio.css';
import image1 from '../../assets/redux1.png';
import image2 from '../../assets/redux2.png';
import image3 from '../../assets/redux3.png';
import image4 from '../../assets/redux4.png';
import image5 from '../../assets/redux5.png';
import image6 from '../../assets/leader.png';

const projectCards = [
  {
    id: 1,
    image: image1,
    title:
      'E-commerce store  app where you can buy your quality product built with (REACT, HTML, and CSS).',
    github: 'https://github.com/Ambrosegithub/react-redux-capstone',
    demo: 'https://ambroseonlineboutique.netlify.app/',
  },
  {
    id: 2,
    image: image2,
    title:
      'This app allow users add their routine tasks/itinery built with (JavaScript, HTML, and CSS).',
    github: 'https://github.com/Ambrosegithub/Task-List-App',
    demo: 'https://ambrosegithub.github.io/Task-List-App/',
  },
  {
    id: 3,
    image: image3,
    title:
      'A libray App where to can add and remove books from the store built with (JavaScript, HTML, and CSS).',
    github: 'https://github.com/Ambrosegithub/react-book-store',
    demo: 'https://ambrose-library.netlify.app/',
  },
  {
    id: 4,
    image: image4,
    title:
      'This React App allow you to perform your basic arithmetic operations built with (React, HTML, and CSS).',
    github: 'https://github.com/Ambrosegithub/math-magician',
    demo: 'https://ambrose-math.netlify.app/',
  },
  {
    id: 5,
    image: image5,
    title: 'An Online conference website for YEHO professionals built with (JavaScript, HTML, and CSS).',
    github: 'https://github.com/Ambrosegithub/Capstone-project1',
    demo: 'https://ambrosegithub.github.io/Capstone-project1/',
  },
  {
    id: 6,
    image: image6,
    title: 'LeaderBoard-Api send and receive data to/from the server, built with JavaScript, HTML, AND CSS.',
    github: 'https://github.com/Ambrosegithub/LeaderBoard-Api',
    demo: 'https://react-portfolio-3oepbav6p-ambrosegithub.vercel.app/',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Works</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      {projectCards.map(({
        id, image, title, github, demo,
      }) => (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="title" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>))}
    </div>
  </section>
);

export default Portfolio;
