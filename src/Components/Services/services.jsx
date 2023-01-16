import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => (
  <section id="Services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX DESIGN</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>User-centered design approach.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Intuitive interface development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Interactive prototype creation.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Usability testing and analysis.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>User experience research.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>UI/UX strategy consulting.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>User experience optimization and improvement.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>User interface design and development.</p>
          </li>
        </ul>
      </article>
      {/** End of UI/UX */}
      <article className="service">
        <div className="service__head">
          <h3>WEB DEVELOPMENT</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Innovative website design solutions.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Custom web application development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>E-commerce platform creation.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Responsive web design and development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Website maintenance and support.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Web-based software development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Dynamic front-end development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Scalable back-end solutions.</p>
          </li>
        </ul>
      </article>
      {/** END OF WEB DEVELOPMENT */}
      <article className="service">
        <div className="service__head">
          <h3>CONTENT CREATTION</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Professional content writing.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Blog and article creation.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Social media content creation.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Copywriting for advertising.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Technical content creation.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Website copywriting and editing.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>SEO-optimized content creation.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Content marketing strategy.</p>
          </li>
        </ul>
      </article>
      {/** END OF CONTENT CREATION */}
    </div>
  </section>
);

export default Services;
