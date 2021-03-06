import {
  STANDARD_CONTAINER_MAX_WIDTH, TEXT_COLORS,
  BOX_SHADOW_COLOR, STANDARD_COLUMN_MARGIN,
} from 'utility/CssConstants';
import { blueScrollBar } from 'utility/CommonStyling';
import { maxWidthQuery } from 'utility/Generic';

const MOBILE = 660;

export default {
  container: {
    paddingTop: '20px',
    marginLeft: `calc((100% - ${STANDARD_CONTAINER_MAX_WIDTH})/2)`,
    marginBottom: '60px',

    [maxWidthQuery(1300)]: {
      margin: `0 ${STANDARD_COLUMN_MARGIN} 40px ${STANDARD_COLUMN_MARGIN}`,
    },

    [maxWidthQuery(MOBILE)]: {
      paddingTop: 0,
      margin: '20px 20px 40px 20px',
    },
  },
  cardContainer: {
    marginTop: '40px',
    overflowX: 'auto',
    display: 'flex',
    paddingBottom: '5px',
    ...blueScrollBar(),

    '& p': {
      color: TEXT_COLORS.lightBlack,
    },

    '& > div:first-child': {
      marginLeft: '2px',
    },

    '& > div:nth-child(even)': {
      background: 'linear-gradient(to bottom right, rgba(118, 144, 244), rgba(178, 156, 229))',

      '& h3, & p': {
        color: 'white',
      },
    },
  },
  card: {
    background: 'white',
    padding: '20px',
    marginRight: '20px',
    marginTop: '2px',
    borderRadius: '10px',
    width: '400px',
    maxWidth: 'calc(100% - 30px)',
    flexShrink: '0',
    boxShadow: `0px 0px 2px 2px ${BOX_SHADOW_COLOR}`,
  },
  cardHeading: {
    display: 'flex',
    marginBottom: '20px',

    '& img': {
      borderRadius: '50%',
      width: '50px',
      marginRight: '10px',
    },

    '& h3': {
      fontSize: '14px',
      margin: '8px 0 0 0',
    },

    '& p': {
      fontSize: '12px',
      margin: '0',
    },
  },
};
