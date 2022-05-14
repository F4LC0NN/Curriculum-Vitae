import React from 'react';
import ExpIntro from '../../../components/main/section-experience/ExpIntro';
import Jobs from '../../../components/main/section-experience/Jobs';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Expériences Professionnelles</h2>
      <ExpIntro />
      <Jobs />
    </section>
  );
}

export default Experience;
