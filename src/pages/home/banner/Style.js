import { TEXT_COLORS } from 'utility/CssConstants';

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
    '& img': {
      marginRight: '20px',
      width: '80px',
      height: '80px',
    },
  },
};
