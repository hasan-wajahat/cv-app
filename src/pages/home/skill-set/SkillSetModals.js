import React from 'react';
import { createUseStyles } from 'react-jss';
import { TEXT_COLORS } from 'utility/CssConstants';
import PerformanceMetricImage from 'assets/img/skill-set/performance-metric.jpg';

const styles = {
  heading: {
    marginTop: 0,
  },
  mainText: {
    marginBottom: '10px',

    '& p': {
      lineHeight: 'unset',
      margin: '0 0 5px 0',
      color: TEXT_COLORS.lightBlack,
      '&::before': {
        paddingRight: '5px',
        content: '"\\2014"',
      },
    },
    '& a': {
      marginLeft: '5px',
      color: TEXT_COLORS.lightBlack,
    },
    '& img': {
      marginTop: '10px',
      maxWidth: '100%',
    },
  },
};

const useStyles = createUseStyles(styles);

export const FrontendModal = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}>
        Front End
      </h2>
      <div className={classes.mainText}>
        <p>
          Built Large SPA in both React and Angular. Have worked with all major frontend
          frameworks including AngularJS, VueJS.
        </p>
        <p>
          Built apps with state management tools like Redux, Mobx, NgRX.
        </p>
        <p>
          Have intimate knowledge of JS because learned my way from vanilla JS. Having worked
          with es5, jquery; I have better appreciation for modern browser tooling and understand
          core JS principles. But also comfortable with modern JS from es6 to es10.
        </p>
        <p>
          Fully understand and use tools like bundlers (Webpack) and transpilers (Babel).
        </p>
        <p>
          I have used both Restful API&apos;s and GraphQL/Apollo queries.
        </p>
        <p>
          Familiar with different graphical and data visualization
          libraries like &ldquo;nivo&rdquo;.
        </p>
      </div>
    </div>
  );
};

export const BackendModal = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}>
        Backend End
      </h2>
      <div className={classes.mainText}>
        <p>
          Built multiple backend applications using different languages including JS, PHP and Ruby.
          I have worked considerably in the following backend frameworks: Express, Laravel,
          Code Igniter and ROR.
        </p>
        <p>
          Have built backends using simply node and PHP so that gives me a core understanding of
          how API&apos;s actually work.
        </p>
        <p>
          Have worked with both relational and non-relational DB&apos;s. I am very comfortable
          with MySql, MariaDb and MongoDB. I have also performed optimization tasks
          for large tables.
        </p>
        <p>
          Have built applications ranging from simpler CRUD to complex
          micro-service based backend serving complex hierarchy data.
        </p>
      </div>
    </div>
  );
};

export const TestModal = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}>
        Test Coverage
      </h2>
      <div className={classes.mainText}>
        <p>
          I always attempt to get maximum test coverage not only for backend
          but also for frontend.
        </p>
        <p>
          For frontend I use Jest and Mocha for test coverage. In case of React it is Jest/Enzyme
          and for Vue Jest/vue-test-utils and Mocha for Angular.
        </p>
        <p>
          For backend I typically write unit test and integration tests. I have used php-unit for
          writing extensive backend tests.
        </p>
        <p>
          I have used Cypress to write end-to-end tests for apps.
        </p>
        <p>
          While writing code I follow TDD as much as possible to create
          testable and sustainable code.
        </p>
      </div>
    </div>
  );
};

export const PerformanceModal = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}>
        Performant Sites
      </h2>
      <div className={classes.mainText}>
        <p>
         I excel at writing clean, and high quality code and creating fast loading
         sites with smooth UI. Please have a look at the code for this site:
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/hasan-wajahat/cv-app">
           https://github.com/hasan-wajahat/cv-app.
          </a>
        </p>
        <p>
          I have have made PWA&apos;s as well. Apps that work offline and can be saved.
          In fact you can reload this app as well offline.
        </p>
        <p>
          I use techniques like code-splitting and lazy loading to reduce JS bundle sized and
          improve performance. In order to avoid the possible black hole of npm, I rely
          mostly on native tools and building out things by myself where practical.
          This app is an example of the philosophy.
        </p>
        <p>
          I am a big performance geek, spending time streamlining the app and minimizing extra
          renders. I frequently use memoization, componentShouldUpdate(), react-developer tools
          to create fast apps.
        </p>
        <p>
          I build extremely responsive web-apps. As most of the traffic of today is mobile centric,
          my apps work well on small mobiles and desktops.
        </p>
        <p>
          Below you can see the metrcis of this app.
        </p>
        <img src={PerformanceMetricImage} alt="" />
      </div>
    </div>
  );
};
