import React from 'react';
import identity from '../../assets/profil-image.svg';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-text-title">
          Bonjour, je suis
          {' '}
          <span className="highlight-title">Ruben</span>
        </h1>
        <h2 className="hero-text-subtitle">Votre futur développeur Front End</h2>
        <p className="para1">
          Je souhaite créer des applications pour résoudre deux défis majeurs :
          <br />
          La
          {' '}
          <span className="highlight-text1">transformation digitale</span>
          {' '}
          des petites et moyennes entreprises et l&#39;
          <span className="highlight-text2">Écologie</span>
          .
        </p>
        <p className="para2">
          Mes objectifs :
        </p>
        <ul className="hero-text-list">
          <li className="hero-text-item">
            Intégrer votre entreprise dans le cadre d&#39;une
            {' '}
            <span className="highlight-text1">alternance</span>
            <br />
            sur une durée de
            {' '}
            <span className="highlight-text2">12 mois</span>
            .
          </li>
          <li className="hero-text-item">
            Me spécialiser sur le stack
            {' '}
            <span className="highlight-text1">MERN</span>
            {' '}
            et les infrastructures
            {' '}
            <span className="highlight-text2">Cloud</span>
            .
          </li>
        </ul>
      </div>
      <img src={identity} alt="Identité" className="hero-image" />
    </div>
  );
}

export default Hero;
