import { TEXT_COLORS } from 'utility/CssConstants';

export default {
  container: {
    paddingTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    '& >div': {
      flex: '1 1 0',
    },
  },
  imageContainer: {
    '& img': {
      width: '600px',
      maxWidth: '100%',
    },
  },
  textContainer: {
    // maxWidth: `calc(${STANDARD_CONTAINER_MAX_WIDTH}/2)`,
  },
  text: {
    maxWidth: '400px',
    textAlign: 'left',
    color: TEXT_COLORS.lightBlack,
    '& a': {
      color: TEXT_COLORS.lightBlack,
    },
  },
  heading: {
    marginTop: '40px',
  },
};
