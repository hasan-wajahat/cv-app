import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from 'components/topBar';
import { BACKGROUND_COLOR, TEXT_COLORS } from 'utility/CssConstants';
import Home from 'pages/home';

const styles = {
  mainPage: {
    height: '100%',
    background: BACKGROUND_COLOR,
    overflow: 'auto',
    color: TEXT_COLORS.black,
  },
};

const App = ({ classes }) => (
  <div className={classes.mainPage}>
    <Router>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={Home} />
      </Switch>
    </Router>
  </div>
);

App.propTypes = {
  classes: PropTypes.shape({
    mainPage: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(App);
