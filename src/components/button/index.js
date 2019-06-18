import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Button = ({ onClick, children, additionalClass }) => {
  const classes = useStyles();
  return (
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
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
};

Button.defaultProps = {
  additionalClass: null,
};

export default Button;
