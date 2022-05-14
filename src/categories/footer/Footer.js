import React from 'react';
import footerPhoto from '../../assets/photo-footer.svg';
import returnArrow from '../../assets/back-to-top.svg';

function Footer() {
  return (
    <footer>
      <img src={footerPhoto} alt="Profil CV" className="footer-photo" />
      <article className="footer-article">
        <h2 className="footer-title">À bientôt dans vos équipes !</h2>
        <p className="footer-para">Si vous êtes arrivé jusqu&#39;ici, c&#39;est que mon profil vous intéresse.</p>
        <p className="footer-para">Alors n&#39;hésitez plus, contactez-moi pour me recruter dès maintenant !</p>
      </article>
      <a href="#header">
        <img src={returnArrow} alt="Retourner en haut de la page" className="back-to-top" />
      </a>
    </footer>
  );
}

export default Footer;
