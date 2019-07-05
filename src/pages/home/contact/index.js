import React from 'react';
import Button from 'components/button';
import { createUseStyles } from 'react-jss';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>
        Contact Me
      </h3>
      <h2>
        hasan_wajahat@hotmail.com
      </h2>
      <Button onClick={() => {}}>
        Hire Me
      </Button>
    </div>
  );
};

export default Contact;
