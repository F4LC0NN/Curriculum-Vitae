import React from 'react';
import jobList from '../../../utils/main/section-experience/jobList';
import tick from '../../../assets/tick.svg';

function Jobs() {
  // See the map explanation in the navbar.js file
  const jobCards = jobList.map((item) => (
    // Reverse the cards layout from a (left => right) layout to a (right => left) layout
    // every two cards
    item.index % 2 !== 0
      ? (
        <li key={item.index} className="job-card">
          <article className="card-left">
            <h2 className="card-left-title">{item.title}</h2>
            <div className="job-place">
              <h3 className="card-left-subtitle">{item.location}</h3>
              <h3 className="card-left-subtitle">{item.date}</h3>
            </div>
            <ul className="card-left-task-list">
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.one}</p>
              </li>
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.two}</p>
              </li>
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.three}</p>
              </li>
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.four}</p>
              </li>
            </ul>
          </article>
          <div className="card-right">
            <img src={item.imageUrl} alt={item.imageAlt} className="card-right-image" id={item.imageId} />
          </div>
        </li>
      )
      : (
        <li key={item.index} className="job-card">
          <div className="card-right">
            <img src={item.imageUrl} alt={item.imageAlt} className="card-right-image" id={item.imageId} />
          </div>
          <article className="card-left">
            <h2 className="card-left-title">{item.title}</h2>
            <div className="job-place">
              <h3 className="card-left-subtitle">{item.location}</h3>
              <h3 className="card-left-subtitle">{item.date}</h3>
            </div>
            <ul className="card-left-task-list">
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.one}</p>
              </li>
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.two}</p>
              </li>
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.three}</p>
              </li>
              <li className="card-left-task-item">
                <img src={tick} alt="tick symbol" className="card-left-tick" />
                <p className="card-left-task-text">{item.tasks.four}</p>
              </li>
            </ul>
          </article>
        </li>
      )
  ));

  return (
    <ul className="job-card-list">
      {jobCards}
    </ul>
  );
}

export default Jobs;
