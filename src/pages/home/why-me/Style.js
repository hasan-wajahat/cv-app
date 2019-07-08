import { TEXT_COLORS, STANDARD_COLUMN_MARGIN } from 'utility/CssConstants';
import { maxWidthQuery } from 'utility/Generic';

const BIG_SCREEN = 1000;
const MOBILE = 660;

export default {
  container: {
    paddingTop: '20px',
    marginBottom: '40px',
    display: 'flex',
    '& >div': {
      flex: '1 1 0',
    },

    [maxWidthQuery(BIG_SCREEN)]: {
      paddingTop: 0,
      margin: `0 ${STANDARD_COLUMN_MARGIN} 40px ${STANDARD_COLUMN_MARGIN}`,
    },

    [maxWidthQuery(MOBILE)]: {
      margin: '20px',
    },
  },
  imageContainer: {
    [maxWidthQuery(BIG_SCREEN)]: {
      display: 'none',
    },

    '& img': {
      width: '500px',
      maxWidth: '100%',
    },
  },
  text: {
    maxWidth: '400px',
    textAlign: 'left',
    color: TEXT_COLORS.lightBlack,
    '& a': {
      color: TEXT_COLORS.lightBlack,
    },

    [maxWidthQuery(BIG_SCREEN)]: {
      maxWidth: '100%',
    },
  },
  heading: {
    marginTop: '40px',
  },
};
