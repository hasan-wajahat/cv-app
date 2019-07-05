import { TEXT_COLORS } from 'utility/CssConstants';

export default {
  container: {
    paddingTop: '20px',
    margin: '0 auto',
    maxWidth: '600px',
    textAlign: 'center',

    '& h2': {
      margin: '30px 0',
      color: TEXT_COLORS.black,
    },

    '& h3': {
      fontSize: '18px',
      fontWeight: '500',
      color: TEXT_COLORS.lightBlack,
    },
  },
};
