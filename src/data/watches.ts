import watch1 from '../assets/watch1.webp';
import watch2 from '../assets/watch2.webp';
import watch3 from '../assets/watch3.webp';
import watch4 from '../assets/watch4.webp';

export interface Watch {
  id: string;
  name: string;
  category: string;
  reference: string;
  price: string;
  movement: string;
  blurb: string;
  image: string;
  bg: string;
  panel: string;
}

// Product photography sourced from Unsplash, free to use under the Unsplash License.
export const WATCHES: Watch[] = [
  {
    id: 'meridian',
    name: 'The Meridian',
    category: 'Dress',
    reference: 'REF. CB-114',
    price: '$8,200',
    movement: 'Automatic, 42-hour reserve',
    blurb:
      'A slim case and a diamond-set bezel, built for evenings that run late.',
    image:watch1,
    bg: '#2A1620',
    panel: '#3B1F2E',
  },
  {
    id: 'tidewater',
    name: 'The Tidewater',
    category: 'Dive',
    reference: 'REF. CB-208',
    price: '$6,950',
    movement: 'Automatic, 300m water resistant',
    blurb:
      'A tool watch with a ceramic bezel, pressure-tested for open water.',
    image: watch2,
    bg: '#0F1E2B',
    panel: '#16283A',
  },
  {
    id: 'aurelian',
    name: 'The Aurelian',
    category: 'Classic',
    reference: 'REF. CB-322',
    price: '$11,400',
    movement: 'Manual wind, hand-guilloched dial',
    blurb:
      'Solid gold and a hand-engraved face, made for a single owner at a time.',
    image:watch3,
    bg: '#2B2015',
    panel: '#3A2C1D',
  },
  {
    id: 'vanguard',
    name: 'The Vanguard',
    category: 'Racing',
    reference: 'REF. CB-517',
    price: '$7,600',
    movement: 'Automatic chronograph',
    blurb:
      'A column-wheel chronograph with a tachymeter, built for the pit lane.',
    image:watch4,
    bg: '#16241D',
    panel: '#203327',
  },
];

export const MOVEMENT_IMAGE =
  'https://images.unsplash.com/photo-1646724810360-abfa1bb76d6d?auto=format&fit=crop&w=1600&q=80';

export const ATELIER_IMAGE =
  'https://images.unsplash.com/photo-1704783339057-3fb087d3bc98?auto=format&fit=crop&w=1800&q=80';
