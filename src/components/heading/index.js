import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './Style';

const Heading = ({ classes, text }) => (
  <div className={classes.heading}>
    {text}
  </div>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    heading: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Heading);
