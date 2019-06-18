import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import styles from './Style';

const useStyles = createUseStyles(styles);

export default function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
      Home
      </NavLink>
      <NavLink
        to="/about"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
      About
      </NavLink>
      <NavLink
        to="/work"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
      Work
      </NavLink>
    </div>
  );
}
