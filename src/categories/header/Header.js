import React from 'react';
import Banner from '../../components/header/Banner';
import Hero from '../../components/header/Hero';
import Navbar from '../../components/header/Navbar';

function Header() {
  return (
    <header>
      <div className="header-top" id="header">
        <Navbar />
        <Hero />
      </div>
      <Banner />
    </header>
  );
}

export default Header;
