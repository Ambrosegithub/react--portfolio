import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ambrose-isigba/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Ambrosegithub" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/Glorious851" target="_blank"><AiFillTwitterCircle /></a>
        <a href="https://www.facebook.com/ambrose.isigba.5" target="_blank"><FaFacebook /></a>
        <a href="https://dribbble.com/AmbroseDesignArt" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials