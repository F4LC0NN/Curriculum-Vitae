import React, { useState, useEffect } from 'react';
import menuList from '../../utils/header/menuList';

function ModalNavbar() {
  // Set up a state to toggle the modal navbar
  const [showModal, setShowModal] = useState(false);

  // Toggle the modal navbar when the window has been offset to at least 200px
  const handleModal = () => {
    if (window.scrollY > 200) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  // Create an event on the window to trigger the offset check
  useEffect(() => {
    window.addEventListener('scroll', handleModal);
    return () => {
      window.removeEventListener('scroll', handleModal);
    };
  }, [handleModal]);

  // See the map explanation in the navbar.js file
  const modalMenu = menuList.map((item) => (
    <a key={item.index} href={item.linkUrl} className="modal-menu-link">
      <li className="modal-menu-item">
        <p className="modal-menu-title">{item.title}</p>
      </li>

    </a>
  ));

  return (
    // When the offset condition is true, change the modal navbar css style to display it
    <nav className={showModal ? 'navbar-visible' : 'navbar-hidden'}>
      <ul className="modal-menu-list">
        {modalMenu}
      </ul>
    </nav>
  );
}

export default ModalNavbar;
