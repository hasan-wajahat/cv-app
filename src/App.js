import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import TopBar from 'components/TopBar';

const styles = {
  mainPage: {
    height: '100%',
    background: '#eef1f5',
    overflow: 'auto',
  },
};

const App = ({ classes }) => (
  <div className={classes.mainPage}>
    <TopBar />
    <h1>hasan app</h1>
  </div>
);

App.propTypes = {
  classes: PropTypes.shape({
    mainPage: PropTypes.object,
  }).isRequired,
};

export default withStyles(styles)(App);
