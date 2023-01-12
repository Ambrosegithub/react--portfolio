import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => (
  <div className="header_socials">
    <a href="https://www.linkedin.com/in/ambrose-isigba/" target="_blank" rel="noreferrer" aria-label="home"><BsLinkedin /></a>
    <a href="https://github.com/Ambrosegithub" target="_blank" rel="noreferrer" aria-label="home"><FaGithub /></a>
    <a href="https://twitter.com/Glorious851" target="_blank" rel="noreferrer" aria-label="home"><AiFillTwitterCircle /></a>
    <a href="https://www.facebook.com/ambrose.isigba.5" target="_blank" rel="noreferrer" aria-label="home"><FaFacebook /></a>
    <a href="https://dribbble.com/AmbroseDesignArt" target="_blank" rel="noreferrer" aria-label="home"><FiDribbble /></a>
  </div>
);

export default HeaderSocials;
