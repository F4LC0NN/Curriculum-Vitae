import React from 'react';
import technoList from '../../utils/header/technoList';

function Banner() {
  // See the map explanation in the navbar.js file
  const techno = technoList.map((item) => (
    <li key={item.index} className="banner-item">
      <img src={item.imageUrl} alt={item.imageAlt} className="banner-icon" />
    </li>
  ));
  return (
    <div className="banner">
      <h2 className="banner-title">Technologies</h2>
      <ul className="banner-list">
        {techno}
      </ul>
    </div>
  );
}

export default Banner;
