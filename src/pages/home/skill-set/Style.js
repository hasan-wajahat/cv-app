import { STANDARD_COLUMN_MARGIN, TEXT_COLORS } from 'utility/CssConstants';

export default {
  container: {
    margin: `0 ${STANDARD_COLUMN_MARGIN}`,
  },
  expertiseText: {
    color: TEXT_COLORS.lightBlack,
  },
  cardRow: {
    display: 'flex',
    '& div:first-child': {
      marginRight: '20px',
    },
  },
  bigCard: ({ backgroundImage } = {}) => ({
    padding: '40px 30px',
    color: 'white',
    backgroundImage,
    borderRadius: '10px',
    flexGrow: 1,
    '& h2': {
      margin: 0,
    },
  }),
  learnButton: {
    background: 'transparent',
    borderColor: 'white',
    color: 'white',
    marginBottom: 0,
    '&:hover': {
      background: 'white',
      color: TEXT_COLORS.lightBlack,
    },
  },
};
