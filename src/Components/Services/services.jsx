import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='Services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX DESIGN</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            
          </ul>
        </article>
        {/** End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/** END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATTION</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li><BiCheck className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            
          </ul>
        </article>
                {/** END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services