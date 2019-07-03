import React from 'react';
import { createUseStyles } from 'react-jss';
import Heading from 'components/heading';
import ImageGirl from 'assets/img/girl_point.jpg';
import styles from './Style';

const useStyles = createUseStyles(styles);

const WhyMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={ImageGirl} alt="" />
      </div>
      <div className={classes.textContainer}>
        <Heading text="Why me" additionalClass={classes.heading} />
        <p className={classes.text}>
          For the last couple of years I have been developing high
          quality web apps for &thinsp;
          <a href="https://equislife.org/" target="_blank" rel="noopener noreferrer">
            Equis Financial
          </a>
          &thinsp; which is a major player in the insurance field.
          Most of it has been on React and Angular on the frontend
          and Laravel and Express on the backend.
          <br />
          <br />
          Along with that I have done open source projects of my own,
          which include a table library for react.
        </p>
      </div>
    </div>
  );
};

export default WhyMe;
