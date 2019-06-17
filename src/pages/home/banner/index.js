import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import ProfileImage from 'assets/img/girl.png';
import ReactLogo from 'assets/img/react-logo.png';
import AngularLogo from 'assets/img/angular-logo.png';
import ReduxLogo from 'assets/img/redux-logo.png';
import LaravelLogo from 'assets/img/laravel-logo.png';
import GitLogo from 'assets/img/git-logo.png';
import NodeLogo from 'assets/img/node-logo.png';
import DockerLogo from 'assets/img/docker-logo.png';
import Button from 'components/button';
import styles from './Style';

const Banner = ({ classes }) => (
  <div className={classes.banner}>

    <div className={classes.flexContainer}>
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

    <div className={classes.skillSet}>
      <img src={ReactLogo} alt="" />
      <img src={AngularLogo} alt="" />
      <img src={ReduxLogo} alt="" />
      <img src={LaravelLogo} alt="" />
      <img src={GitLogo} alt="" />
      <img src={NodeLogo} alt="" />
      <img src={DockerLogo} alt="" />
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
