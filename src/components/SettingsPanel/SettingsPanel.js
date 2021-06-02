import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SettingIcon from '../../assets/images/icons/settings.svg';

import {
  increase,
  decrease,
} from '../../redux/actions/settings';

import SettingsItem from './SettingsItem';

import classes from './SettingsPanel.scss';

const settingsItems = {
  timerGroup: [
    {
      settingName: 'workingTime',
      title: 'Pomodoro',
      isTime: true,
    },
    {
      settingName: 'smallBreakTime',
      title: 'Short break',
      isTime: true,
    },
    {
      settingName: 'bigBreakTime',
      title: 'Long break',
      isTime: true,
    },
  ],

  countGroup: [
    {
      settingName: 'pomodorosInRound',
      title: 'Number of pomodoro between break',
      isTime: false,
    },
    // {
    //   settingName: 'pomodorosInDay',
    //   title: 'Pomodoros in a day',
    //   isTime: false,
    // },
  ],
};

class SettingsPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clicked: '',
    };

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(e) {
    const { id } = e.currentTarget;
    this.setState({ 
      clicked: id,
    });
  }

  ToggleSettings() {
    const { clicked } = this.state;
      switch (clicked) {
        case 'openSettings':
          return (classes.open);
        case 'closeSettings':
          return (classes.hide);
        default:
          return (classes.hide);
      }
  }

  render() {
    const { settings, onDecrease, onIncrease } = this.props;

    return (
      <div className={classes.AppHeader}>
        <button 
          id="openSettings"
          type="button"
          className={classes.SettingsBtn}
          onClick={(e) => this.handleClick(e)}
          aria-label="Settings"
        >
          <SettingIcon />
        </button>
        <div id={this.ToggleSettings()} className={classes.SettingsPanel}>
          {Object.keys(settingsItems).map((key) => {
            return (
              <div className={classes.Group} key={key}>
                {settingsItems[key].map(
                  ({ settingName, title, isTime, isSound }) => {
                    return (
                      <SettingsItem
                        key={settingName}
                        id={settingName}
                        title={title}
                        value={settings[settingName]}
                        isTime={isTime}
                        isSound={isSound}
                        onDecrease={() => onDecrease(settingName)}
                        onIncrease={() => onIncrease(settingName)}
                      />
                    );
                  }
                )}
              </div>
            );
          })}

          <button 
            id='closeSettings'
            type='button'
            onClick={(e) => this.handleClick(e)}
            className={classes.CloseSettings}
          >
            Close
          </button>
        </div>
    
      </div>
    );
  }
};




const mapStateToProps = ({ settings }) => {
  return { settings };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (settingName) => dispatch(increase(settingName)),
    onDecrease: (settingName) => dispatch(decrease(settingName)),
  };
};

SettingsPanel.propTypes = {
  settings: PropTypes.shape({
    workingTime: PropTypes.number,
    pomodorosInDay: PropTypes.number,
    bigBreakTime: PropTypes.number,
    smallBreakTime: PropTypes.number,
    pomodorosInRound: PropTypes.number,
    chceckedSoundCheckboxes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
