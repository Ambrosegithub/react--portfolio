import React from 'react';
import './footer.css';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => (
  <footer id="Footer">
    <a href="#about" className="footer__logo">AMBROSE CODELAB</a>
    <ul className="permalinks">
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#Testimonials">Testimonials</a></li>
      <li><a href="#Contacts">Contacts</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://twitter.com/Glorious851" target="_blank" rel="noreferrer" aria-label="twiter-icon"><AiFillTwitterSquare /></a>
      <a href="https://github.com/Ambrosegithub" target="_blank" rel="noreferrer" aria-label="github-icon"><BsGithub /></a>
      <a href="https://www.linkedin.com/in/ambrose-isigba/" target="_blank" rel="noreferrer" aria-label="linkedin-icon"><BsLinkedin /></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Ambrose&apos;s Codelab All right reserved.</small>
    </div>
  </footer>
);

export default Footer;
