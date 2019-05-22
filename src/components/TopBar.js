import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { NavLink } from 'react-router-dom';
import { STANDARD_SPACE_LEFT, TEXT_COLORS } from 'utility/CssConstants';

const styles = {
  container: {
    padding: '20px',
    paddingLeft: STANDARD_SPACE_LEFT,
  },
  link: {
    marginRight: '30px',
    color: TEXT_COLORS.lightBlack,
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      color: TEXT_COLORS.black,
    },
    '& .active': {
      color: TEXT_COLORS.black,
    },
  },
  activeLink: {
    color: TEXT_COLORS.black,
  },
};

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
