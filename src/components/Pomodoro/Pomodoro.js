import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Controls from '../Controls';
import Timer from '../Timer';
import ErrorBoundry from '../ErrorBoundry';

import classes from './Pomodoro.scss';

const Pomodoro = ({ workingTime }) => {
  return (
    <>
      <main className={classes.Main}>
        <ErrorBoundry>
          <Timer />
        </ErrorBoundry>
        <Controls time={workingTime} />
      </main>
    </>
  );
};

const mapStateToProps = ({ settings: { workingTime } }) => {
  return { workingTime };
};

Pomodoro.propTypes = {
  workingTime: PropTypes.number,
};

Pomodoro.defaultProps = {
  workingTime: 25,
};

export default connect(mapStateToProps)(Pomodoro);
