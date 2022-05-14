import React from 'react';
import projectList from '../../../utils/main/section-projects/projectList';

function Carousel() {
  // See the map explanation in the navbar.js file
  const projectCard = projectList.map((item) => (

    // Hide the show code button on 6th card in the carousel
    // Keep the code button to a hidden state to align each button cards correctly
    item.index !== '6'
      ? (
        <li key={item.index} className="project-item">
          <div className="project-card" id={item.id}>
            <img src={item.imageUrl} alt={item.imageAlt} className="project-card-image" />
            <h3 className="project-card-title">{item.title}</h3>
            <div className="project-card-button-container">
              <a href={item.projectUrl} target="_blank" rel="noreferrer" className="project-card-link">
                <button type="button" className="project-card-project-button">
                  Voir le projet
                </button>
              </a>
              <a href={item.codeUrl} target="_blank" rel="noreferrer" className="project-card-link">
                <button type="button" className="project-card-code-button">
                  Voir le code
                </button>
              </a>
            </div>
          </div>
        </li>
      )
      : (
        <li key={item.index} className="project-item">
          <div className="project-card" id={item.id}>
            <img src={item.imageUrl} alt={item.imageAlt} className="project-card-image" />
            <h3 className="project-card-title">{item.title}</h3>
            <div className="project-card-button-container">
              <a href={item.projectUrl} target="_blank" rel="noreferrer" className="project-card-link">
                <button type="button" className="project-card-project-button">
                  Voir le projet
                </button>

              </a>

              {/* The code button is still present but in a hidden state for design reasons */}
              <a href={item.codeUrl} target="_blank" rel="noreferrer" className="project-card-link button-invisible">
                <button type="button" className="project-card-code-button" disabled>
                  Voir le code
                </button>
              </a>
            </div>
          </div>
        </li>
      )
  ));

  return (
    <div className="carousel-container">
      <ul className="project-list">
        {projectCard}
      </ul>
    </div>
  );
}

export default Carousel;
