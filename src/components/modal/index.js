import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import Button from 'components/button';
import styles from './Style';

const useStyles = createUseStyles(styles);

const Modal = ({
  open,
  onClose,
  children,
  width,
  additionalClasses,
}) => {
  const classes = useStyles();
  if (!open) return null;
  return (
    <Fragment>
      {/* eslint-disable-next-line */}
      <div  className={classes.overlay} onClick={onClose} />
      <div
        className={classNames(classes.container, {
          [additionalClasses.container]: !!additionalClasses.container,
        })}
        style={{ width: `${width}px` }}
      >
        {children}
        <div className={classes.buttonContainer}>
          <Button additionalClass={classes.button} onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  children: PropTypes.node,
  additionalClasses: PropTypes.shape({
    container: PropTypes.string,
  }),
};

Modal.defaultProps = {
  additionalClasses: {},
  children: null,
  width: 400,
};

export default Modal;
