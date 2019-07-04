import React from 'react';
import { createUseStyles } from 'react-jss';
import Heading from 'components/heading';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Feedback = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Heading text="From My Employers" />
    </div>
  );
};

export default Feedback;
