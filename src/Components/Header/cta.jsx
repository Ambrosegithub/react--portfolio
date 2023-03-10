import React from 'react';
import Resume from '../../assets/resume.pdf';
import CV from '../../assets/CV.pdf';

const Cta = () => (
  <div className="cta">
    <a href={Resume} download className="btn">
      Download Resume
    </a>
    <a href={CV} download className="btn">
      Download CV
    </a>
    <a href="#Contacts" className="btn btn-primary">
      Let&apos;s Talk
    </a>
  </div>
);

export default Cta;
