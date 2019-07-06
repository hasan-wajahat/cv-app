import { TEXT_COLORS, BACKGROUND_COLOR } from 'utility/CssConstants';
import Color from 'color';

export default {
  button: {
    background: BACKGROUND_COLOR,
    padding: '15px 30px',
    minWidth: '130px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    outline: 'none !important',
    borderColor: TEXT_COLORS.lightBlack,
    margin: '20px 0',
    borderRadius: '4px',
    fontWeight: 'bold',
    '&:hover': {
      background: '#F5F5F5',
    },
    '&:active': {
      background: '#EEEEEE',
      borderColor: Color(TEXT_COLORS.lightBlack).darken(0.8).hex(),
    },
  },
};
