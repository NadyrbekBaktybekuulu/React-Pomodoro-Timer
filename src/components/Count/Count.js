import React from 'react';
import PropTypes from 'prop-types';

import PlusIcon from '../../assets/images/icons/add.svg';
import MinusIcon from '../../assets/images/icons/minus.svg';

import CountButton from './CountButton';

import classes from './Count.scss';

const Count = ({ value, isTime, onDecrease, onIncrease }) => {
  return (
    <div>

      {isTime ? (
        <span className={classes.Value}>
          {value}&nbsp;
          <div>
            <CountButton icon={<PlusIcon />} onClick={onIncrease} />
            <CountButton icon={<MinusIcon />} onClick={onDecrease} />
          </div>
        </span>
      ) : (
        <span className={classes.Value}>
          {value}&nbsp;
          <div>
            <CountButton 
              className="plus" 
              icon={<PlusIcon />} 
              onClick={onIncrease} />
            <CountButton icon={<MinusIcon />} onClick={onDecrease} />
          </div>
        </span>
      )}

    </div>
  );
};

Count.propTypes = {
  value: PropTypes.number,
  isTime: PropTypes.bool,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

Count.defaultProps = {
  value: 0,
  isTime: false,
};

export default Count;
