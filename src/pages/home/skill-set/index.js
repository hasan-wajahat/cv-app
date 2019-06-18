import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Heading from 'components/heading';
import Button from 'components/button';
import reactBackground from 'assets/img/professional-background.jpg';
import styles from './Style';

// eslint-disable-next-line
const BigCard = ({ text, classes }) => (
  <div
    style={{
      backgroundImage: `linear-gradient(to right, rgba(105, 137, 247), rgba(105, 137, 247, 0.8)), url(${reactBackground})`,
    }}
    className={classes.bigCard}
  >
    <h3>{text.heading}</h3>
    <p>{text.details}</p>
    <Button additionalClass={classes.learnButton} onClick={() => {}}>
      Learn More
    </Button>
  </div>
);

const REACT_TEXT = {
  heading: 'React',
  details: ' I have built state of the art, performant and responsive web-apps using react. Utiltizing state management tools like Redux/Mobx',
};

const ANGULAR_TEXT = {
  heading: 'Angular',
  details: ' I have built state of the art, performant and responsive web-apps using react. Utiltizing state management tools like Redux/Mobx',
};

const SkillSet = ({ classes }) => (
  <div className={classes.container}>
    <Heading text="expertise in" />
    <p className={classes.expertiseText}>
      My expertise are in the following domain
    </p>
    <div className={classes.cardRow}>
      <BigCard
        classes={classes}
        text={REACT_TEXT}
      />
      <BigCard
        classes={classes}
        text={ANGULAR_TEXT}
      />
    </div>
  </div>
);

SkillSet.propTypes = {
  classes: PropTypes.shape({
    heading: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(SkillSet);
