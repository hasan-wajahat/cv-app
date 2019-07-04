import React, { Fragment, useState } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import Heading from 'components/heading';
import Button from 'components/button';
import card1Background from 'assets/img/skill-set/professional-background-1.jpg';
import card2Background from 'assets/img/skill-set/professional-background-2.jpg';
import card3Background from 'assets/img/skill-set/professional-background-3.jpg';
import card4Background from 'assets/img/skill-set/professional-background-4.jpg';
import styles from './Style';

const useStyles = createUseStyles(styles);

// Reusable card component for showing different skill sets
const BigCard = ({ cardDetails, animationDirection, isVisible }) => {
  const cardStyles = {
    backgroundImage: `linear-gradient(to right, ${cardDetails.colorStart}, ${cardDetails.colorEnd}), url(${cardDetails.backgroundUrl})`,
    // sets animationName in class if isVisible, sets keyframe to slideRight or slideLeft
    animationDirection: isVisible ? animationDirection : null,
  };
  const classes = useStyles(cardStyles);

  return (
    <div className={classes.bigCard}>
      <div>
        <h2>{cardDetails.heading}</h2>
        <p>{cardDetails.details}</p>
      </div>
      <Button additionalClass={classes.learnButton} onClick={() => {}}>
        Learn More
      </Button>
    </div>
  );
};

BigCard.propTypes = {
  cardDetails: PropTypes.shape({
    heading: PropTypes.string,
    details: PropTypes.string, // text for details
    colorStart: PropTypes.string.isRequired, // color start for gradient
    colorEnd: PropTypes.string.isRequired, // color end for gradient
    backgroundUrl: PropTypes.string.isRequired,
  }).isRequired,
  animationDirection: PropTypes.string.isRequired, // slideRight or slideLeft for animation
  isVisible: PropTypes.bool.isRequired, // set to true when card first visible to add animation
};

const CARDS = [
  {
    heading: 'Front End',
    details: 'I have built state of the art, performant and responsive web-apps using React and other popular frameworks.',
    backgroundUrl: card1Background,
    colorStart: 'rgba(105, 137, 247)',
    colorEnd: 'rgba(134, 127, 228, 0.6)',
  },
  {
    heading: 'Backend End',
    details: 'I have used Laravel and ExpressJS to build all sort of restful API\'s. Also built server rendered sites with frontend frameworks.',
    backgroundUrl: card2Background,
    colorStart: 'rgba(50, 102, 238)',
    colorEnd: 'rgba(80, 195, 183, 0.6)',
  },
  {
    heading: 'Test Coverage',
    details: 'I am a big believer in testing. In which ever project I work, I always try to get maximum test coverage on front and backend.',
    backgroundUrl: card3Background,
    colorStart: 'rgb(83, 109, 254)',
    colorEnd: 'rgba(92, 107, 192, 0.6)',
  },
  {
    heading: 'Performant Sites',
    details: 'I excel at making responsive, performant and intuitive web apps.',
    backgroundUrl: card4Background,
    colorStart: 'rgb(124, 77, 255)',
    colorEnd: 'rgba(179, 136, 255, 0.6)',
  },
];

const SkillSet = () => {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className={classes.container}>
      <Heading text="expertise in" />
      <p className={classes.expertiseText}>
        My expertise are in the following domain
      </p>
      {/* sets true if card rows are visible */}
      <VisibilitySensor
        // starts on partial visiblity
        partialVisibility
        onChange={visibility => setVisibility(visibility)}
        // add offset so that card are shown once the user has scrolled a little
        offset={{ top: 80 }}
        active={!isVisible} // disable when once active
      >
        <Fragment>
          {/*
            loops through cards to create row,
            the loop is skipped on odd card,
            and row created with only with even card
           */}
          {CARDS.map((card, index) => (
            !!(index % 2) && (
              <div key={card.heading} className={classes.cardRow}>
                <BigCard
                  cardDetails={CARDS[index - 1]}
                  animationDirection="slideRight"
                  isVisible={isVisible}
                />
                <BigCard
                  cardDetails={card}
                  animationDirection="slideLeft"
                  isVisible={isVisible}
                />
              </div>
            )))}
        </Fragment>
      </VisibilitySensor>
    </div>
  );
};

export default SkillSet;
