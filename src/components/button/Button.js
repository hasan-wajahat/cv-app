import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './Style';

const Button = ({ onClick, classes, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={classes.button}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    button: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Button);
