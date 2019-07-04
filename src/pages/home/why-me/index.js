import React from 'react';
import { createUseStyles } from 'react-jss';
import Heading from 'components/heading';
import ImageGirl from 'assets/img/girl_point.jpg';
import styles from './Style';

const useStyles = createUseStyles(styles);

const WhyMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={ImageGirl} alt="" />
      </div>
      <div className={classes.textContainer}>
        <Heading text="Why me" additionalClass={classes.heading} />
        <p className={classes.text}>
          &ensp;I am an experienced web developer who has built apps ranging
          from enterprise level apps to small pet projects like this cv-app.
          Over the years I have mastered all major frontend frameworks
          (React, Angular, Vue) and have built complex backend apps
          using multiple frameworks (Laravel, Express).
          <br />
          &ensp;But what sets me apart is not my technical knowledge but my attitude
          towards web development. I was not forced on this line, in fact I chose
          this field after trying other things out. Because of which I have a certain
          passion for my job which differentiates me from many other developers out there.
          <br />
          &ensp;I have had the privilege of being part of and leading amazing developers
          and managers. Having worked with remote teams spread all across the world I am
          well suited to the handle the unique challenges of distributed multi-cultural
          teams. Also having worked as the lead front-end developer has taught me the
          required balance between business and technical demands of any product.
        </p>
      </div>
    </div>
  );
};

export default WhyMe;
