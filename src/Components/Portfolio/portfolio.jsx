import React from 'react'
import './portfolio.css'
import image1 from '../../assets/redux1.png'
import image2 from '../../assets/redux2.png'
import image3 from '../../assets/redux3.png'
import image4 from '../../assets/redux4.png'
import image5 from '../../assets/redux5.png'
import image6 from '../../assets/redux6.png'

const projectCards = [
  {
      id: 1,
      image: image1,
      title: 'This an online e-commerce store where you can buy your quality product',
      github: 'https://github.com/Ambrosegithub/react-redux-capstone',
      demo: 'https://ambroseonlineboutique.netlify.app/'
  },
  {
      id: 2,
      image: image2,
      title: 'This an online e-commerce store where you can buy your quality product',
      github: 'https://github.com/Ambrosegithub/Task-List-App',
      demo: 'https://ambrosegithub.github.io/Task-List-App/'
  },
  {
      id: 3,
      image: image3,
      title: 'This an online libray where to can add and remove books from the store',
      github: 'https://github.com/Ambrosegithub/react-book-store',
      demo: 'https://ambrose-library.netlify.app/'
  },
  {
      id: 4,
      image: image4,
      title: 'This React App allow you to perform your basic arithmetic operations ',
      github: 'https://github.com/Ambrosegithub/math-magician',
      demo: 'https://ambrose-math.netlify.app/'
  },
  {
      id: 5,
      image: image5,
      title: 'An Online conference website for YEHO professionals',
      github: 'https://github.com/Ambrosegithub/Capstone-project1',
      demo: 'https://ambrosegithub.github.io/Capstone-project1/'
  },
  {
      id: 6,
      image: image6,
      title: 'This App allow you to perform your basic arithmetic operations',
      github: 'https://github.com/Ambrosegithub/js-calculator',
      demo: 'http://127.0.0.1:5500/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          projectCards.map(({id, image, title, github, demo})=> {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="title" />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio