import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { DiRuby } from 'react-icons/di';

const Experience = () => {
  return (
    <section id="Experience">
      <h5>The Skills I Have</h5>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">INTERMEDIATE</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>TAILWIND CSS</h4>
                <small className="text-light">BEGINER</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">INTERMEDIATE</small>
              </div>
            </article>
          </div>
        </div>
        {/** ############## End Of Frontend ############### */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>RUBY</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiRuby />
              <div>
                <h4>RUBY ON RAILS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>POSTGRESQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>NODE JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
