import React from 'react';
import './header.css';
import Cta from './cta';
import me from '../../assets/me-bg.png';
import HeaderSocials from './header_socials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I&apos;m </h5>
        <h1>Ambrose Isigba </h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#Contacts" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
