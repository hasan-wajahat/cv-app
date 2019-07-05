import React from 'react';
import Button from 'components/button';
import { createUseStyles } from 'react-jss';
import {
  FaGithub, FaLinkedin, FaAngellist, FaFacebookSquare,
} from 'react-icons/fa';
import styles from './Style';

const ICON_SIZE = 36;

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
      <Button onClick={() => {
        window.location.href = 'mailto:hasan_wajahat@hotmail.com';
      }}
      >
        Hire Me
      </Button>

      <div className={classes.iconRow}>
        <a
          className={classes.icon}
          href="https://github.com/hasan-wajahat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={ICON_SIZE} />
        </a>
        <a
          className={classes.icon}
          href="https://www.linkedin.com/in/hasan-wajahat-43423644/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={ICON_SIZE} />
        </a>
        <a
          className={classes.icon}
          href="https://angel.co/hasan-wajahat?public_profile=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAngellist size={ICON_SIZE} />
        </a>
        <a
          className={classes.icon}
          href="https://www.facebook.com/hasan.wajahat1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={ICON_SIZE} />
        </a>
      </div>

    </div>
  );
};

export default Contact;
