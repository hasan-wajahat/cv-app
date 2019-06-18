import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import Heading from 'components/heading';
import Button from 'components/button';
import reactBackground from 'assets/img/professional-background.jpg';
import styles from './Style';

const useStyles = createUseStyles(styles);

const BigCard = ({
  text, colorStart, colorEnd, backgroundUrl,
}) => {
  const cardStyles = {
    backgroundImage: `linear-gradient(to right, ${colorStart}, ${colorEnd}), url(${backgroundUrl})`,
  };
  const classes = useStyles(cardStyles);

  return (
    <div className={classes.bigCard}>
      <h2>{text.heading}</h2>
      <p>{text.details}</p>
      <Button additionalClass={classes.learnButton} onClick={() => {}}>
      Learn More
      </Button>
    </div>
  );
};

BigCard.propTypes = {
  text: PropTypes.shape({
    heading: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
  colorStart: PropTypes.string.isRequired,
  colorEnd: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string.isRequired,
};

const REACT_TEXT = {
  heading: 'React',
  details: ' I have built state of the art, performant and responsive web-apps using react. Utiltizing state management tools like Redux/Mobx',
};

const ANGULAR_TEXT = {
  heading: 'Angular',
  details: ' I have built state of the art, performant and responsive web-apps using react. Utiltizing state management tools like Redux/Mobx',
};

const SkillSet = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Heading text="expertise in" />
      <p className={classes.expertiseText}>
      My expertise are in the following domain
      </p>
      <div className={classes.cardRow}>
        <BigCard
          text={REACT_TEXT}
          colorStart="rgba(105, 137, 247)"
          colorEnd="rgba(105, 137, 247, 0.8)"
          backgroundUrl={reactBackground}
        />
        <BigCard
          text={ANGULAR_TEXT}
          colorStart="rgba(105, 137, 247)"
          colorEnd="rgba(105, 137, 247, 0.8)"
          backgroundUrl={reactBackground}
        />
      </div>
    </div>
  );
};

export default SkillSet;
