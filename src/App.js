import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {
  mainPage: {
    height: '100%',
    background: 'blue',
    paddingTop: '10px',
  },
};

const App = ({ classes }) => (
  <div className={classes.mainPage}>
    <h1>hasan app</h1>
  </div>
);

App.propTypes = {
  classes: PropTypes.shape({
    mainPage: PropTypes.object,
  }).isRequired,
};

export default withStyles(styles)(App);
