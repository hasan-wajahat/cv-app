import { STANDARD_CONTAINER_MAX_WIDTH, TEXT_COLORS, STANDARD_COLUMN_MARGIN } from 'utility/CssConstants';
import { blueScrollBar } from 'utility/CommonStyling';
import { maxWidthQuery } from 'utility/Generic';

const BIG_SCREEN = 1000;
const MOBILE = 660;

export default {
  container: {
    paddingTop: '20px',
    // calculate margin left because can not use auto,
    // we calculate what auto would be equal if total
    // size width is same as the expertise section
    marginLeft: `calc((100% - ${STANDARD_CONTAINER_MAX_WIDTH})/2)`,
    marginBottom: '40px',
    display: 'flex',
    '& >div': {
      flex: '1 1 0',
    },

    [maxWidthQuery(1300)]: {
      marginLeft: STANDARD_COLUMN_MARGIN,
    },

    [maxWidthQuery(BIG_SCREEN)]: {
      paddingTop: 0,
      display: 'block',
      margin: `0 ${STANDARD_COLUMN_MARGIN} 20px ${STANDARD_COLUMN_MARGIN}`,
    },

    [maxWidthQuery(MOBILE)]: {
      margin: '20px',
    },
  },
  textContainer: {
    maxWidth: `calc(${STANDARD_CONTAINER_MAX_WIDTH}/2)`,

    [maxWidthQuery(BIG_SCREEN)]: {
      maxWidth: '100%',
      marginBottom: '20px',
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
  imageContainer: {
    overflowX: 'auto',
    display: 'flex',
    paddingBottom: '5px',
    ...blueScrollBar(),

    '& img': {
      height: '400px',
      maxHeight: '400px',
      marginRight: '20px',

      '&:last-child': {
        paddingRight: '20px',
      },
    },
  },
};
