import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Heading = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.heading}>
      {text}
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
