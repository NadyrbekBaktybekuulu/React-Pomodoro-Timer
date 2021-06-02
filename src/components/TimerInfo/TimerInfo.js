import PropTypes from 'prop-types';
import React from 'react';
import classes from './TimerInfo.scss';

const TimerInfo = ({ minutes, seconds }) => {
  return (
    <div className={classes.TimerInfo}>
      <div className={classes.Time}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
    </div>
  );
};

TimerInfo.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
};

export default TimerInfo;
