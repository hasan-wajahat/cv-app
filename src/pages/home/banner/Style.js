import { TEXT_COLORS, BOX_SHADOW_COLOR } from 'utility/CssConstants';
import { maxWidthQuery } from 'utility/Generic';

const BIG_SCREEN = 1000;
const BIG_MOBILE = 660;
const MOBILE = 480;

export default {
  banner: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  flexContainer: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 0',

    [maxWidthQuery(BIG_MOBILE)]: {
      order: 2,
    },
  },
  // we vary size of text based on screen width,
  // to fill screen
  textDetails: width => ({
    marginTop: '80px',

    [maxWidthQuery(BIG_SCREEN)]: {
      marginTop: '20px',
    },

    '& p': {
      fontSize: `${14 * width / 1200}px`,
      color: TEXT_COLORS.lightBlack,
      textTransform: 'uppercase',

      [maxWidthQuery(BIG_SCREEN)]: {
        fontSize: '12px',
      },
    },
    '& h2': {
      fontSize: `${40 * width / 1200}px`,
      margin: '10px 0',

      [maxWidthQuery(BIG_SCREEN)]: {
        fontSize: '34px',
      },
    },
    '& h3': {
      fontSize: `${18 * width / 1200}px`,
      fontWeight: 'normal',

      [maxWidthQuery(BIG_SCREEN)]: {
        fontSize: '14px',
      },
    },
  }),

  blueBar: {
    position: 'absolute',
    top: '-60px',
    right: 0,
    width: '50%',
    height: '60px',
    backgroundColor: '#4dc1dd',
  },

  image: {
    flex: '1 1 0',
    backgroundImage: 'linear-gradient(to right, #1bafd0, #80d5ee)',
    textAlign: 'center',

    [maxWidthQuery(BIG_MOBILE)]: {
      order: 1,
      backgroundImage: 'none',
      maxWidth: '250px',
    },

    [maxWidthQuery(MOBILE)]: {
      maxWidth: '150px',
    },

    [maxWidthQuery(360)]: {
      display: 'none',
    },

    '& img': {
      width: '500px',
      maxWidth: '100%',
      minHeight: '550px',

      [maxWidthQuery(BIG_SCREEN)]: {
        width: '400px',
        minHeight: '400px',
      },

      [maxWidthQuery(BIG_MOBILE)]: {
        margin: '20px 0 0 20px',
        width: '400px',
        minHeight: 'unset',
        backgroundColor: '#1bafd0',
        borderRadius: '50%',
      },

      [maxWidthQuery(MOBILE)]: {
        marginTop: '50%',
        margin: '50% 0 0 5px',
      },
    },
  },
  skillSet: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    padding: '10px 20px',
    maxWidth: '80%',
    margin: '0 auto',
    borderRadius: '10px',
    position: 'relative',
    bottom: '40px',
    boxShadow: `0px 0px 2px 2px ${BOX_SHADOW_COLOR}`,

    [maxWidthQuery(850)]: {
      bottom: '0',
    },

    [maxWidthQuery(BIG_MOBILE)]: {
      maxWidth: '100%',
      flexWrap: 'wrap',
      margin: '0 10px',
    },

    '& img': {
      marginRight: '20px',
      width: '80px',
      height: '80px',

      [maxWidthQuery(850)]: {
        marginRight: '10px',
        width: '60px',
        height: '60px',
      },
    },
  },
};
