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
      background: Color('white').darken(0.15).hex(),
    },
    '&:active': {
      background: Color('white').darken(0.2).hex(),
      borderColor: Color(TEXT_COLORS.lightBlack).darken(0.8).hex(),
    },
  },
};
