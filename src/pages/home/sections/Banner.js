import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import ProfileImage from 'assets/img/girl.png';
import Color from 'color';
import { TEXT_COLORS, BACKGROUND_COLOR } from 'utility/CssConstants';

const styles = {
  details: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  textDetails: {
    marginTop: '80px',
    '& p': {
      color: TEXT_COLORS.lightBlack,
      textTransform: 'uppercase',
    },
    '& h2': {
      fontSize: '40px',
      margin: '10px 0',
    },
    '& h3': {
      fontWeight: 'normal',
    },
  },
  button: {
    background: BACKGROUND_COLOR,
    padding: '10px 30px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    outline: 'none !important',
    borderColor: TEXT_COLORS.lightBlack,
    margin: '20px 0',
    '&:hover': {
      background: Color(TEXT_COLORS.lightBlack).lighten(0.2).hex(),
    },
  },
  image: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '50%',
    backgroundColor: '#4dc1dd',
    textAlign: 'center',
    '& img': {
      width: '500px',
      maxWidth: '100%',
    },
  },
};

const Banner = ({ classes }) => (
  <div className={classes.banner}>
    <div className={classes.details}>
      <div className={classes.textDetails}>
        <p>Hello</p>
        <h2>I&rsquo;m Hasan</h2>
        <h3>a Senior web Developer</h3>
        <button className={classes.button} type="button" onClick={() => {}}>
          Hire Me
        </button>
      </div>
    </div>
    <div className={classes.image}>
      <img src={ProfileImage} alt="" />
    </div>
  </div>
);

Banner.propTypes = {
  classes: PropTypes.shape({
    banner: PropTypes.string,
    details: PropTypes.string,
    textDetails: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Banner);
