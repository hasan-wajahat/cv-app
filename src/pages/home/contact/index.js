import React from 'react';
import Button from 'components/button';
import { createUseStyles } from 'react-jss';
import {
  FaGithub, FaLinkedin, FaAngellist,
  FaFacebookSquare, FaTwitter,
} from 'react-icons/fa';
import cv from 'assets/documents/cv.pdf';
import styles from './Style';

const ICON_SIZE = 36;

const SOCIAL_MEDIAS = [
  {
    href: 'https://github.com/hasan-wajahat',
    icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/hasan-wajahat-43423644/',
    icon: FaLinkedin,
  },
  {
    href: 'https://angel.co/hasan-wajahat?public_profile=1',
    icon: FaAngellist,
  },
  {
    href: 'https://www.facebook.com/hasan.wajahat1',
    icon: FaFacebookSquare,
  },
  {
    href: 'https://twitter.com/hasanwajahat90',
    icon: FaTwitter,
  },
];

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
      <a className={classes.downloadLink} href={cv} download>
        Download CV
      </a>

      <div className={classes.iconRow}>
        {SOCIAL_MEDIAS.map(media => (
          <a
            key={media.href}
            className={classes.icon}
            href={media.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <media.icon size={ICON_SIZE} />
          </a>
        ))}
      </div>

    </div>
  );
};

export default Contact;
