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
import Modal from 'components/modal';
import styles from './Style';
import {
  FrontendModal, BackendModal,
  TestModal, PerformanceModal,
} from './SkillSetModals';

const useStyles = createUseStyles(styles);

// Reusable card component for showing different skill sets
const BigCard = ({
  cardDetails, animationDirection, isVisible, onClick,
}) => {
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
      <Button
        additionalClass={classes.learnButton}
        onClick={() => { onClick({ visible: true, modal: cardDetails.modal }); }}
      >
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
    modal: PropTypes.func.isRequired,
  }).isRequired,
  animationDirection: PropTypes.string.isRequired, // slideRight or slideLeft for animation
  isVisible: PropTypes.bool.isRequired, // set to true when card first visible to add animation
  onClick: PropTypes.func.isRequired,
};

const CARDS = [
  {
    heading: 'Front End',
    details: 'I have built state of the art, performant and responsive web-apps using React and other popular frameworks.',
    backgroundUrl: card1Background,
    colorStart: 'rgba(105, 137, 247)',
    colorEnd: 'rgba(134, 127, 228, 0.6)',
    modal: FrontendModal,
  },
  {
    heading: 'Backend End',
    details: 'I have used Laravel and ExpressJS to build all sorts of restful API\'s. Also built server rendered sites with frontend frameworks.',
    backgroundUrl: card2Background,
    colorStart: 'rgba(50, 102, 238)',
    colorEnd: 'rgba(80, 195, 183, 0.6)',
    modal: BackendModal,
  },
  {
    heading: 'Test Coverage',
    details: 'I am a big believer in testing. In which ever project I work, I always try to get maximum test coverage on front and backend.',
    backgroundUrl: card3Background,
    colorStart: 'rgb(83, 109, 254)',
    colorEnd: 'rgba(92, 107, 192, 0.6)',
    modal: TestModal,
  },
  {
    heading: 'Performant Sites',
    details: 'I excel at making responsive, performant and intuitive web apps.',
    backgroundUrl: card4Background,
    colorStart: 'rgb(121, 134, 203)',
    colorEnd: 'rgb(77, 208, 225, 0.6)',
    modal: PerformanceModal,
  },
];

const SkillSet = () => {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);
  const [skillModal, setSkillModal] = useState({ visible: false, modal: null });

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
        // add minTopValue so that card are shown once the user has scrolled a little
        minTopValue={50}
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
                  onClick={setSkillModal}
                />
                <BigCard
                  cardDetails={card}
                  animationDirection="slideLeft"
                  isVisible={isVisible}
                  onClick={setSkillModal}
                />
              </div>
            )))}
        </Fragment>
      </VisibilitySensor>
      <Modal
        width={600}
        open={skillModal.visible}
        onClose={() => setSkillModal({ visible: false, modal: null })}
      >
        <skillModal.modal />
      </Modal>
    </div>
  );
};

export default SkillSet;
