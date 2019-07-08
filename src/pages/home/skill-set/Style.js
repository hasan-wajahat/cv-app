import { STANDARD_COLUMN_MARGIN, TEXT_COLORS, STANDARD_CONTAINER_MAX_WIDTH } from 'utility/CssConstants';
import { minWidthQuery, maxWidthQuery } from 'utility/Generic';

const TABLET = '800';
const MOBILE = '660';

export default {
  container: {
    margin: `0 ${STANDARD_COLUMN_MARGIN}`,

    [minWidthQuery(1300)]: {
      maxWidth: STANDARD_CONTAINER_MAX_WIDTH,
      margin: '0 auto',
    },

    [maxWidthQuery(MOBILE)]: {
      margin: '20px',
    },
  },
  expertiseText: {
    color: TEXT_COLORS.lightBlack,

    [maxWidthQuery(660)]: {
      margin: '0',
    },
  },
  cardRow: {
    display: 'flex',
    marginBottom: '40px',

    [maxWidthQuery(TABLET)]: {
      flexWrap: 'wrap',
      marginBottom: 0,
    },

    '& div:first-child': {
      marginRight: '20px',

      [maxWidthQuery(TABLET)]: {
        margin: '20px 0',
      },
    },
  },
  bigCard: ({ backgroundImage, animationDirection } = {}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px 30px',
    color: 'white',
    backgroundImage,
    borderRadius: '10px',
    flex: '1 1 0',
    // hide initially to have better effect
    opacity: animationDirection ? 1 : 0,
    // animation only starts once animationName is set
    animationName: animationDirection ? `$${animationDirection}` : undefined,
    animationDuration: '1s',

    [maxWidthQuery(TABLET)]: {
      flexBasis: 'auto',
    },

    [maxWidthQuery(MOBILE)]: {
      padding: '20px',
    },

    '& h2': {
      margin: 0,
    },
  }),
  '@keyframes slideRight': {
    from: {
      transform: 'translateX(-100%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
  '@keyframes slideLeft': {
    from: {
      transform: 'translateX(100%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
  learnButton: {
    background: 'transparent',
    borderColor: 'white',
    maxWidth: '140px',
    color: 'white',
    marginBottom: 0,
    '&:hover': {
      background: 'white',
      color: TEXT_COLORS.lightBlack,
    },
  },
};
