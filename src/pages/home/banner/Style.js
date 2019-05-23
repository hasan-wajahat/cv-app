import { TEXT_COLORS } from 'utility/CssConstants';

export default {
  banner: {
    display: 'flex',
    '& >div': {
      flex: '1 1 0',
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
  },
  textDetails: {
    marginTop: '80px',
    '& p': {
      color: TEXT_COLORS.lightBlack,
      textTransform: 'uppercase',
    },
    '& h2': {
      fontSize: '40px',
      margin: '10px 0',
    },
    '& h3': {
      fontWeight: 'normal',
    },
  },
  blueBar: {
    position: 'absolute',
    top: 0,
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
    },
  },
};
