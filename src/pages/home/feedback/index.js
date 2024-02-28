import React from 'react';
import { createUseStyles } from 'react-jss';
import Heading from 'components/heading';
import EricImage from 'assets/img/feedback/eric.jpg';
import ChunImage from 'assets/img/feedback/chun.jpg';
import AnonymousImage from 'assets/img/feedback/anonymous.png';
import styles from './Style';

const EMPLOYER_DATA = [
  {
    name: 'Eric Zimmerman',
    title: 'Co-Founder & CEO, XYB',
    image: EricImage,
    description: 'Hasan is a very talented developer. Over the 2+ years we\'ve worked together, he\'s never stopped growing his skill set and exceeding expectations. He\'s always been very conscientious and has taken great cares in both his craft and client satisfaction. I would highly recommend him- his positive attitude and continuous-learning mindset sets him apart as someone I genuinely enjoy working with.',
  },
  {
    name: 'Hyunil Chon',
    title: 'Developer Team Lead, C2Monster',
    image: ChunImage,
    description: 'I have really enjoyed having Hasan in my team, he was a quick learner and good team player. He is very enthusiastic about his trade which is always a good sign in young developers.',
  },
  {
    name: 'Jae Kim',
    title: 'CEO Online Hair Saloon',
    image: AnonymousImage,
    description: 'Hasan is an exceptional freelancer. He\'s 100% fluent in English, well-rounded, and hard-working. He will not BS you with false promises - if there\'s something he\'s not best fit for, he\'ll let you know ahead of time and won\'t waste your time. An outstanding trustworthy freelancer who will not disappoint.',
  },
];

const useStyles = createUseStyles(styles);

const Feedback = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Heading text="From My Employers" />
      <div className={classes.cardContainer}>
        {EMPLOYER_DATA.map(employ => (
          <div key={employ.name} className={classes.card}>
            <div className={classes.cardHeading}>
              <div>
                <img src={employ.image} alt="" />
              </div>
              <div>
                <h3>
                  {employ.name}
                </h3>
                <p>
                  {employ.title}
                </p>
              </div>
            </div>
            <p>
              {employ.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
