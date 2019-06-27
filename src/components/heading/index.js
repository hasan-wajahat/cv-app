import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Heading = ({ text, additionalClass }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.heading, {
      [additionalClass]: !!additionalClass,
    })}
    >
      {text}
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
};

Heading.defaultProps = {
  additionalClass: null,
};

export default Heading;
