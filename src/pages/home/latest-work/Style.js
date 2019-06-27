import { STANDARD_CONTAINER_MAX_WIDTH, TEXT_COLORS } from 'utility/CssConstants';

export default {
  container: {
    paddingTop: '20px',
    // calculate margin left because can not use auto,
    // we calculate what auto would be equal if total
    // size width is same as the expertise section
    marginLeft: `calc((100% - ${STANDARD_CONTAINER_MAX_WIDTH})/2)`,
    display: 'flex',
    '& >div': {
      flex: '1 1 0',
    },
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
