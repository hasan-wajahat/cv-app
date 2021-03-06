import React from 'react';
import { createUseStyles } from 'react-jss';
import ProfileImage from 'assets/img/banner/hasan.webp';
import ProfileImageSmall from 'assets/img/banner/hasan_small.webp';
import ProfileImageBackup from 'assets/img/banner/hasan.png';
import ProfileImageSmallBackup from 'assets/img/banner/hasan_small.png';
import ReactLogo from 'assets/img/banner/react-logo.png';
import AngularLogo from 'assets/img/banner/angular-logo.png';
import ReduxLogo from 'assets/img/banner/redux-logo.png';
import LaravelLogo from 'assets/img/banner/laravel-logo.png';
import GitLogo from 'assets/img/banner/git-logo.png';
import NodeLogo from 'assets/img/banner/node-logo.png';
import DockerLogo from 'assets/img/banner/docker-logo.png';
import Button from 'components/button';
import useWindowSize from 'hooks/WindowSize';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Banner = () => {
  const { width } = useWindowSize();
  const classes = useStyles(width);

  return (
    <div className={classes.banner}>

      <div className={classes.flexContainer}>
        <div className={classes.details}>
          <div className={classes.textDetails}>
            <p>Hello</p>
            <h2>I&rsquo;m Hasan</h2>
            <h3>A passionate web developer.</h3>
            <h3>With over 5 years of experience</h3>
            <h3>developing web apps.</h3>
            <Button onClick={() => {
              window.location.href = 'mailto:hasan_wajahat@hotmail.com';
            }}
            >
              Hire Me
            </Button>
          </div>
        </div>
        <div className={classes.image}>
          {/* blue bar added to cover area above profile image */}
          <div className={classes.blueBar} />
          <picture>
            <source type="image/webp" media="(min-width: 660px)" srcSet={ProfileImage} />
            <source type="image/webp" media="(max-width: 659px)" srcSet={ProfileImageSmall} />
            <source type="image/png" media="(max-width: 659px)" srcSet={ProfileImageSmallBackup} />
            <img src={ProfileImageBackup} alt="" />
          </picture>
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
