import React from 'react';
import { createUseStyles } from 'react-jss';
import Heading from 'components/heading';
import Image1 from 'assets/img/agent-resources.jpg';
import Image2 from 'assets/img/reports.jpg';
import Image3 from 'assets/img/leaderboard.jpg';
import Image4 from 'assets/img/pending-management.jpg';
import styles from './Style';

const useStyles = createUseStyles(styles);

const LatestWork = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Heading text="Latest Work" additionalClass={classes.heading} />
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
      <div className={classes.imageContainer}>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
    </div>
  );
};

export default LatestWork;
