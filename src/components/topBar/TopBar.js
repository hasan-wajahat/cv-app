import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { NavLink } from 'react-router-dom';
import styles from './Style';

const TopBar = ({ classes }) => (
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

TopBar.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(TopBar);
