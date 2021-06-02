import React from 'react';
import PropTypes from 'prop-types';

import classes from './CountButton.scss';

const CountButton = ({ icon, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={classes.Button}>
      {icon}
    </button>
  );
};

CountButton.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CountButton;
