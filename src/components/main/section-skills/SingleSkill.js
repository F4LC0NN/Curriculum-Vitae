import React from 'react';
import skillList from '../../../utils/main/section-skills/skillList';

function SingleSkill() {
  // See the map explanation in the navbar.js file
  const mySkills = skillList.map((item) => (
    <div key={item.index} className="my-skill-container">
      <li className="my-skill-item">
        <h3 className="single-skill-title">{item.title}</h3>
        <ul className="single-skill-list">
          <li className="single-skill-item">{item.skill.one}</li>
          <li className="single-skill-item">{item.skill.two}</li>
          <li className="single-skill-item">{item.skill.three}</li>
          <li className="single-skill-item">{item.skill.four}</li>
          <li className="single-skill-item">{item.skill.five}</li>
        </ul>
      </li>
    </div>
  ));

  return (
    <ul className="my-skill-list">
      {mySkills}
    </ul>
  );
}

export default SingleSkill;
