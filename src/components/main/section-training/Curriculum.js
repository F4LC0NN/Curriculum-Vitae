import React from 'react';
import trainingList from '../../../utils/main/section-training/trainingList';
import tick from '../../../assets/tick.svg';

function Curriculum() {
  // See the map explanation in the navbar.js file
  const curriculums = trainingList.map((item) => (
    <li key={item.index} className="curriculum-item">
      <div className="training-card">
        <h2 className="training-card-title">{item.title}</h2>
        <div className="training-card-place">
          <h3 className="training-card-subtitle">{item.location}</h3>
          <h3 className="training-card-subtitle">{item.date}</h3>
        </div>
        <ul className="training-card-task-list">
          <li className="training-card-task-item">
            <img src={tick} alt="tick-symbol" className="training-card-task-tick" />
            <p className="training-task-para">{item.tasks.one}</p>
          </li>
          <li className="training-card-task-item">
            <img src={tick} alt="tick-symbol" className="training-card-task-tick" />
            <p className="training-task-para">{item.tasks.two}</p>
          </li>
          <li className="training-card-task-item">
            <img src={tick} alt="tick-symbol" className="training-card-task-tick" />
            <p className="training-task-para">{item.tasks.three}</p>
          </li>
        </ul>
      </div>
    </li>
  ));

  return (
    <ul className="curriculum-list">
      {curriculums}
    </ul>
  );
}

export default Curriculum;
