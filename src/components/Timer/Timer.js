import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import usePageTitle from '../../hook/usePageTitle';
import useWindowWidth from '../../hook/useWindowWidth';
import * as actions from '../../redux/actions/timer';

import TimerInfo from '../TimerInfo';
import Timeline from '../Timeline';

import classes from './Timer.scss';

const padTime = (time) => {
  return time.toString().padStart(2, '0');
};

const Timer = ({
  settings,
  timer,
  updateTick,
  updateTimer,
  updateOnResize,
}) => {
  const { workingTime, pomodorosInDay } = settings;
  const {
    isStarted,
    dashOffset,
    timeLeft,
    completedPomodoros,
    radius,
    circumference,
    mode,
  } = timer;

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  const windowWidth = useWindowWidth();

  usePageTitle({ minutes, seconds }, mode);

  useEffect(() => {
      updateOnResize({ radius: 145, workingTime });
  }, [updateOnResize, windowWidth, workingTime]);

  useEffect(() => {
    let intervalID;
    if (isStarted) {
      intervalID = setInterval(() => {
        updateTick(settings);
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [settings, isStarted, updateTick]);

  // обновить когда изменяем рабочее время
  useEffect(() => {
    updateTimer(workingTime);
  }, [updateTimer, workingTime]);

  return (
    <div className={classes.Timer}>
      <Timeline
        radius={radius}
        circumference={circumference}
        dashOffset={dashOffset}
      />
      <TimerInfo
        timeLeft={timeLeft}
        minutes={minutes}
        seconds={seconds}
        completedPomodoros={completedPomodoros}
        pomodorosInDay={pomodorosInDay}
      />
    </div>
  );
};

const mapStateToProps = ({ settings, timer }) => {
  return {
    settings,
    timer,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setTimer, setTick, resize } = bindActionCreators(actions, dispatch);

  return {
    updateTick: (settings) => setTick(settings),
    updateTimer: (workingTime) => setTimer(workingTime),
    updateOnResize: (payload) => resize(payload),
  };
};

Timer.propTypes = {
  settings: PropTypes.shape({
    workingTime: PropTypes.number,
    pomodorosInDay: PropTypes.number,
    bigBreakTime: PropTypes.number,
    smallBreakTime: PropTypes.number,
    pomodorosInRound: PropTypes.number,
    chceckedSoundCheckboxes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  timer: PropTypes.shape({
    isStarted: PropTypes.bool,
    dashOffset: PropTypes.number,
    timeLeft: PropTypes.number,
    completedPomodoros: PropTypes.number,
    circumference: PropTypes.number,
    radius: PropTypes.number,
    mode: PropTypes.string.isRequired,
  }).isRequired,
  updateTick: PropTypes.func.isRequired,
  updateTimer: PropTypes.func.isRequired,
  updateOnResize: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
