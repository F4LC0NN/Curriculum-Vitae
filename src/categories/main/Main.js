import React from 'react';
import Contacts from './section-contact/Contacts';
import Experience from './section-experience/Experience';
import Projects from './section-projects/Projects';
import Skills from './section-skills/Skills';
import Training from './section-training/Training';

function Main() {
  return (
    <main>
      <Experience />
      <Projects />
      <Training />
      <Skills />
      <Contacts />
    </main>
  );
}

export default Main;
