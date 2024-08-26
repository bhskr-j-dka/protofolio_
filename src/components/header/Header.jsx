import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Typewriter from './Typewriter';

const Header = () => {
  const texts = ['Full Stack Developer', 'Photographer', 'Athlete', 'Content Creator'];

  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Bhaskar Jyoti Deka</h1>
        <h5 className="text-light">Associate Software Engineer</h5>
        <CTA />
        
        {/* Wrapper for the Typewriter effect */}
        <div className="typewriter-container">
          <Typewriter texts={texts} />
        </div>

        <HeaderSocials />

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
