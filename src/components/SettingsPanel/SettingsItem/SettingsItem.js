import React from 'react';
import PropTypes from 'prop-types';

import Count from '../../Count/Count';

import classes from './SettingsItem.scss';

const SettingsItem = ({
  title,
  value,
  isTime,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className={classes.SettingsItem}>
      <span className={classes.SettingsName}>{title}</span>
        <Count
          value={value}
          isTime={isTime}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
    </div>
  );
};

SettingsItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  isTime: PropTypes.bool,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

SettingsItem.defaultProps = {
  title: 'Hello!',
  value: 0,
  isTime: false,
};

export default SettingsItem;
