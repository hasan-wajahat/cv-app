import { STANDARD_COLUMN_MARGIN, TEXT_COLORS } from 'utility/CssConstants';

export default {
  container: {
    padding: '20px',
    paddingLeft: STANDARD_COLUMN_MARGIN,
  },
  link: {
    marginRight: '30px',
    color: TEXT_COLORS.lightBlack,
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      color: TEXT_COLORS.black,
    },
    '& .active': {
      color: TEXT_COLORS.black,
    },
  },
  activeLink: {
    color: TEXT_COLORS.black,
  },
};
