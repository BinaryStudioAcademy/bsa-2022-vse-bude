import { LotType } from '~/common/enums/enums';
import { images } from '~/assets/images/images';

const lotOver = [
  {
    type: LotType.OVER,
    price: '3 200',
    imgSrc: images.puff,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    title: 'Gray puff “Jusk”',
    key: 1,
  },
  {
    type: LotType.OVER,
    price: '10 450',
    imgSrc: images.picture,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    title: "Maria Prymachenko's pain...",
    key: 2,
  },
];

const lotUpcoming = [
  {
    type: LotType.UPCOMING,
    price: '3 200',
    imgSrc: images.puff,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    title: 'Gray puff “Jusk”',
    key: 1,
  },
  {
    type: LotType.UPCOMING,
    price: '10 450',
    imgSrc: images.picture,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    title: "Maria Prymachenko's pain...",
    key: 2,
  },
];

export { lotOver, lotUpcoming };
