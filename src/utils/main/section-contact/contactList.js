import telImage from '../../../assets/phone.svg';
import mailImage from '../../../assets/mail.svg';
import linkedinImage from '../../../assets/linkedin.svg';
import githubImage from '../../../assets/github.svg';
import websiteImage from '../../../assets/web.svg';
import locationImage from '../../../assets/locate.svg';

const contactList = [
  {
    index: '1',
    imageUrl: telImage,
    imageAlt: 'Icône téléphone',
    text: '0634 55 53 17',
    link: 'tel:+33634555317',
  },
  {
    index: '2',
    imageUrl: mailImage,
    imageAlt: 'Icône email',
    text: 'thomasruben25@gmail.com',
    link: 'mailto:thomasruben25@gmail.com',
  },
  {
    index: '3',
    imageUrl: linkedinImage,
    imageAlt: 'Icône LinkedIn',
    text: 'in/ruben-thomas-web',
    link: 'https://www.linkedin.com/in/ruben-thomas-web',
  },
  {
    index: '4',
    imageUrl: githubImage,
    imageAlt: 'Icône GitHub',
    text: 'github.com/F4LC0NN',
    link: 'https://github.com/F4LC0NN',
  },
  {
    index: '5',
    imageUrl: websiteImage,
    imageAlt: 'Icône portfolio',
    text: 'trcreativ.com',
    text2: '(portfolio graphiste)',
    link: 'https://trcreativ.com/',
  },
  {
    index: '6',
    imageUrl: locationImage,
    imageAlt: 'Icône localisation',
    text: 'Région Ain, Lyon, Paris',
    link: 'https://bit.ly/3sqh72d',
  },
];

export default contactList;
