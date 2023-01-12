import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';

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
      <a href="https://facebook.com" aria-label="facebook-icon"><FaFacebookF /></a>
      <a href="https://instagram.com" aria-label="instagram-icon"><FaInstagramSquare /></a>
      <a href="https://twitter.com" aria-label="twiter-icon"><AiFillTwitterSquare /></a>
      <a href="https://github.com" aria-label="github-icon"><BsGithub /></a>
      <a href="https://tiktok.com" aria-label="tiktok-icon"><SiTiktok /></a>
      <a href="https://linkedin.com" aria-label="linkedin-icon"><BsLinkedin /></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Ambrose&apos;s Codelab All right reserved.</small>
    </div>
  </footer>
);

export default Footer;
