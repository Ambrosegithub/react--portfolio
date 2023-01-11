import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id="Footer">
    <a href="#" className="footer__logo">AMBROSE's CODELAB</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#Testimonials">Testimonials</a></li>
      <li><a href="#Contacts">Contacts</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF /></a>
      <a href="https://instagram.com"><FaInstagramSquare /></a>
      <a href="https://twitter.com"><AiFillTwitterSquare /></a>
      <a href="https://github.com"><BsGithub /></a>
      <a href="https://tiktok.com"><SiTiktok /></a>
      <a href="https://linkedin.com"><BsLinkedin /></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Ambrose's Codelab All right reserved.</small>
    </div>
    </footer>
  );
}

export default Footer
