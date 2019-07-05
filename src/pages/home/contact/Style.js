import Color from 'color';
import { TEXT_COLORS } from 'utility/CssConstants';

const lightBlack = Color(TEXT_COLORS.lightBlack);

export default {
  container: {
    paddingTop: '20px',
    margin: '0 auto 80px auto',
    maxWidth: '600px',
    textAlign: 'center',

    '& h2': {
      margin: '30px 0 20px 0',
      color: TEXT_COLORS.black,
    },

    '& h3': {
      fontSize: '18px',
      fontWeight: '500',
      color: TEXT_COLORS.lightBlack,
    },
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',

    '& a': {
      marginRight: '80px',
      '&:last-child': {
        marginRight: '0',
      },
    },
  },
  icon: {
    color: lightBlack.fade(0.4).rgb().string(),
    '& :hover': {
      color: lightBlack.darken(0.2).hex(),
    },
  },
};
