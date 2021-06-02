import React from 'react';

import Pomodoro from '../Pomodoro';

import AppHeader from '../SettingsPanel/SettingsPanel';

import classes from './App.scss';

const App = () => {
  return (
    <div className={classes.App}>
      <AppHeader />
      <Pomodoro />
    </div>
  );
};

export default App;
