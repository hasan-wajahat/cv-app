import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import ProfileImage from 'assets/img/girl.png';
import Button from 'components/button/Button';
import styles from './Style';

const Banner = ({ classes }) => (
  <div className={classes.banner}>
    <div className={classes.details}>
      <div className={classes.textDetails}>
        <p>Hello</p>
        <h2>I&rsquo;m Hasan</h2>
        <h3>a Senior web Developer</h3>
        <Button onClick={() => {}}>
          Hire Me
        </Button>
      </div>
    </div>
    <div className={classes.image}>
      <div className={classes.blueBar} />
      <img src={ProfileImage} alt="" />
    </div>
  </div>
);

Banner.propTypes = {
  classes: PropTypes.shape({
    banner: PropTypes.string,
    details: PropTypes.string,
    textDetails: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Banner);
