import React, { useState } from 'react';
import menuList from '../../utils/header/menuList';
import burgerIcon from '../../assets/burger.svg';
import closeBurgerIcon from '../../assets/close-burger.svg';

function BurgerMenu() {
  // Set up a state to check wether the burger menu's open or close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openBurgerMenu() {
    setIsMenuOpen(true);
  }

  function closeBurgerMenu() {
    setIsMenuOpen(false);
  }

  // See the map explanation in the navbar.js file
  const menu = menuList.map((item) => (
    <a key={item.index} href={item.linkUrl} onClick={closeBurgerMenu} onKeyDown={closeBurgerMenu} className="burger-menu-link">
      <li className="burger-menu-item">
        <img src={item.imageUrl} alt={item.imageAlt} className="burger-menu-item-icon" />
        <p className="burger-menu-item-title">{ item.title }</p>
      </li>
    </a>
  ));

  return (
    <div className="burger-menu-button-container">
      <button type="button" onClick={openBurgerMenu} className="burger-menu-button">
        <img src={burgerIcon} alt="Burger menu" className="burger-menu-icon" />
      </button>

      {/* Change the burger menu's class name depending on its current state */}
      <div className={isMenuOpen ? 'burger-menu-container' : 'burger-menu-container-hidden'}>
        <button type="button" onClick={closeBurgerMenu} className="close-burger-menu-button">
          <img src={closeBurgerIcon} alt="close burger" className="close-burger-menu-icon" />
        </button>
        <ul className="burger-menu">
          {menu}
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
