import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import Heading from 'components/heading';
import Button from 'components/button';
import card1Background from 'assets/img/professional-background-1.jpg';
import card2Background from 'assets/img/professional-background-2.jpg';
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

const CARD_1 = {
  heading: 'Front-End',
  details: 'I have built state of the art, performant and responsive web-apps using React and other popular frameworks.',
};

const CARD_2 = {
  heading: 'Backend-End',
  details: 'I have used Laravel and ExpressJS to build all sort of restful API\'s. Also built server rendered sites with frontend frameworks.',
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
          text={CARD_1}
          colorStart="rgba(105, 137, 247)"
          colorEnd="rgba(134, 127, 228, 0.6)"
          backgroundUrl={card1Background}
        />
        <BigCard
          text={CARD_2}
          colorStart="rgba(50, 102, 238)"
          colorEnd="rgba(80, 195, 183, 0.6)"
          backgroundUrl={card2Background}
        />
      </div>

      <div className={classes.cardRow}>
        <BigCard
          text={CARD_1}
          colorStart="rgba(105, 137, 247)"
          colorEnd="rgba(134, 127, 228, 0.6)"
          backgroundUrl={card1Background}
        />
        <BigCard
          text={CARD_2}
          colorStart="rgba(50, 102, 238)"
          colorEnd="rgba(80, 195, 183, 0.6)"
          backgroundUrl={card2Background}
        />
      </div>
    </div>
  );
};

export default SkillSet;
