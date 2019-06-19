import { STANDARD_COLUMN_MARGIN, TEXT_COLORS } from 'utility/CssConstants';
import { minWidthQuery } from 'utility/Generic';

export default {
  container: {
    margin: `0 ${STANDARD_COLUMN_MARGIN}`,
    [minWidthQuery(1300)]: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
  },
  expertiseText: {
    color: TEXT_COLORS.lightBlack,
  },
  cardRow: {
    display: 'flex',
    marginBottom: '40px',

    '& div:first-child': {
      marginRight: '20px',
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
    opacity: animationDirection ? 1 : 0,
    animationName: animationDirection ? `$${animationDirection}` : undefined,
    animationDuration: '1s',
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
    maxWidth: '138px',
    color: 'white',
    marginBottom: 0,
    '&:hover': {
      background: 'white',
      color: TEXT_COLORS.lightBlack,
    },
  },
};
