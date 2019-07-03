import React from 'react';
import { createUseStyles } from 'react-jss';
import ProfileImage from 'assets/img/banner/girl.webp';
import ReactLogo from 'assets/img/banner/react-logo.png';
import AngularLogo from 'assets/img/banner/angular-logo.png';
import ReduxLogo from 'assets/img/banner/redux-logo.png';
import LaravelLogo from 'assets/img/banner/laravel-logo.png';
import GitLogo from 'assets/img/banner/git-logo.png';
import NodeLogo from 'assets/img/banner/node-logo.png';
import DockerLogo from 'assets/img/banner/docker-logo.png';
import Button from 'components/button';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Banner = () => {
  const classes = useStyles();
  return (
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
};

export default Banner;
