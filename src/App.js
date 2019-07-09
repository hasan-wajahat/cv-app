import React from 'react';
import { createUseStyles } from 'react-jss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BACKGROUND_COLOR, TEXT_COLORS } from 'utility/CssConstants';
import Home from 'pages/home';
import { maxWidthQuery } from 'utility/Generic';

const styles = {
  mainPage: {
    height: '100%',
    background: BACKGROUND_COLOR,
    overflow: 'auto',
    color: TEXT_COLORS.black,
    [maxWidthQuery('800')]: {
      '-webkit-overflow-scrolling': 'touch',
    },
  },
};

const useStyles = createUseStyles(styles);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainPage}>
      <Router>
        {/* TopBar will be added later */}
        {/* <TopBar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
