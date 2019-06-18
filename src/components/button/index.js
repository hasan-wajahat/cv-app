import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from './Style';

const Button = ({
  onClick, classes, children, additionalClass,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames(classes.button, {
      [additionalClass]: !!additionalClass,
    })}
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
  additionalClass: PropTypes.string,
};

Button.defaultProps = {
  additionalClass: null,
};

export default withStyles(styles)(Button);
