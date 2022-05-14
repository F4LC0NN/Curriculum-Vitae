import React, { useState, useEffect } from 'react';
import menuList from '../../utils/header/menuList';
import BurgerMenu from './BurgerMenu';

function Navbar() {
  // Set up a state to check the current window width size
  const [windowWidth, setWindowWidth] = useState({ winWidth: window.innerWidth });

  const detectWidth = () => {
    setWindowWidth({ winWidth: window.innerWidth });
  };

  // Initiate an event to update any width changes when the window is resized
  useEffect(() => {
    window.addEventListener('resize', detectWidth);

    return () => {
      window.removeEventListener('resize', detectWidth);
    };
  }, [windowWidth]);

  // Map through the menuList object to display the thumbnails dynamically
  // This method will be used throughout the code base to generate the components
  const menu = menuList.map((item) => (
    <a key={item.index} href={item.linkUrl} className="menu-link">
      <li className="menu-item">
        <p className="menu-title">{ item.title }</p>
      </li>
    </a>
  ));

  return (
    <div className="navbar">
      {/*
        Whenever the width of the window is at least 768px wide,
        hide the navbar and show the burger menu button
      */}
      { windowWidth.winWidth <= 768
        ? (
          <BurgerMenu />
        )
        : (
          <ul className="menu">
            {menu}
          </ul>
        )}
    </div>
  );
}

export default Navbar;
