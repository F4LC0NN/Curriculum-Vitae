import valleyImage from '../../../assets/LVV.png';
import hotelImage from '../../../assets/scribe.png';
import resortImage from '../../../assets/DSA.png';

const jobList = [
  {
    index: '1',
    title: 'Chargé de Relations Publiques',
    location: 'La Vallée Village',
    date: '2019 - 2020',
    tasks: {
      one: 'Vendre les offres Retails et Luxe',
      two: 'Assurer les services luxes (Hands-Free Shopping, The Apartment)',
      three: 'Seconder le duty-manager dans la gestion d\'équipe (15 pers.) et le reporting',
      four: 'Former les boutiques partenaires sur les offres commerciales et \nles programmes de fidélité',
    },
    imageUrl: valleyImage,
    imageAlt: 'La vallée village - Entrée',
    imageId: 'img01',
  },
  {
    index: '2',
    title: 'Responsable services de nuit',
    location: 'Hôtel Scribe',
    date: 'Janv. 2019 - Août 2019',
    tasks: {
      one: 'Assurer toutes les prestations d\'un hôtel de nuit',
      two: 'Prendre la bagagerie et le service voiturier / chasseur',
      three: 'Assurer le Room-Service et le Housekeeping',
      four: 'Réceptionner les marchandises pour les équipes du matin.\nPréparer et livrer les petits-déjeuners en chambre.',
    },
    imageUrl: hotelImage,
    imageAlt: 'Hôtel Scribe - Restaurant',
    imageId: 'img02',
  },
  {
    index: '3',
    title: 'Chargé de mission Guide VIP',
    location: 'Disney Special Activities',
    date: '2018 - 2019',
    tasks: {
      one: 'Accompagner la clientèle "Haut-de-gamme" durant la journée',
      two: 'Faciliter les accès dans les parcs, attractions, restaurants et spectacles',
      three: 'Anticiper les demandes de la clientèle. \nTravailler avec la coordination pour délivrer le meilleur service possible',
      four: 'Adapter la prestation selon les habitudes, les traditions et les coutumes',
    },
    imageUrl: resortImage,
    imageAlt: 'Disneland Paris - Parade',
    imageId: 'img03',
  },
];

export default jobList;
