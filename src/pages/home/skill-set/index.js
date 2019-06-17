import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import Heading from 'components/heading';
import styles from './Style';

const SkillSet = ({ classes }) => (
  <div className={classes.container}>
    <Heading text="specializing in" />
  </div>
);

SkillSet.propTypes = {
  classes: PropTypes.shape({
    heading: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(SkillSet);
