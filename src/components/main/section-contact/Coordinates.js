import React from 'react';
import contactList from '../../../utils/main/section-contact/contactList';

function Coordinates() {
  // See the map explanation in the navbar.js file
  const contacts = contactList.map((item) => (

    // Change the 5th component's text layout to have two p elements instead of one
    item.index !== '5'
      ? (
        <li key={item.index} className="coordinates-item">
          <a href={item.link} className="coordinates-link" target="_blank" rel="noreferrer">
            <div className="coordinates-contact-container">
              <img src={item.imageUrl} alt={item.imageAlt} className="coordinates-image" />
              <p className="coordinates-text">{item.text}</p>
            </div>
          </a>
        </li>
      )
      : (
        <li key={item.index} className="coordinates-item">
          <a href={item.link} className="coordinates-link" target="_blank" rel="noreferrer">
            <div className="coordinates-contact-container">
              <img src={item.imageUrl} alt={item.imageAlt} className="coordinates-image" />
              <div className="coordinates-text-container">
                <p className="coordinates-text">{item.text}</p>
                <p className="coordinates-text2">{item.text2}</p>
              </div>
            </div>
          </a>
        </li>
      )
  ));

  return (
    <div className="coordinates-container">
      <ul className="coordinates-list">
        {contacts}
      </ul>
    </div>
  );
}

export default Coordinates;
