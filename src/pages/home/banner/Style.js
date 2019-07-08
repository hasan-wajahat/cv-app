import { TEXT_COLORS, BOX_SHADOW_COLOR } from 'utility/CssConstants';

export default {
  banner: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  flexContainer: {
    display: 'flex',
    '& >div': {
      flex: '1 1 0',
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
  },
  // we vary size of text based on screen width,
  // to fill screen
  textDetails: width => ({
    marginTop: '80px',
    '& p': {
      fontSize: `${14 * width / 1200}px`,
      color: TEXT_COLORS.lightBlack,
      textTransform: 'uppercase',
    },
    '& h2': {
      fontSize: `${40 * width / 1200}px`,
      margin: '10px 0',
    },
    '& h3': {
      fontSize: `${18 * width / 1200}px`,
      fontWeight: 'normal',
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
    backgroundColor: '#4dc1dd',
    textAlign: 'center',
    '& img': {
      width: '500px',
      maxWidth: '100%',
      minHeight: '550px',
    },
  },
  skillSet: {
    display: 'flex',
    background: 'white',
    padding: '10px 20px',
    maxWidth: '80%',
    margin: '0 auto',
    borderRadius: '10px',
    position: 'relative',
    bottom: '40px',
    boxShadow: `0px 0px 2px 2px ${BOX_SHADOW_COLOR}`,

    '& img': {
      marginRight: '20px',
      width: '80px',
      height: '80px',
    },
  },
};
