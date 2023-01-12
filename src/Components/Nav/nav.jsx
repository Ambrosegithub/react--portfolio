/* eslint-disable */

import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark, BiMessageAltAdd } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className="nav">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} aria-label="home"><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} aria-label="home"><AiOutlineUser /></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''} aria-label="home"><BiBookBookmark /></a>
      <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''} aria-label="home"><RiServiceLine /></a>
      <a href="#Contacts" onClick={() => setActiveNav('#Contacts')} className={activeNav === '#Contacts' ? 'active' : ''} aria-label="home"><BiMessageAltAdd /></a>
    </nav>
  );
};

export default Nav;
