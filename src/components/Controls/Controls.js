import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { startTimer, stopTimer, resetTimer } from '../../redux/actions/timer';

import classes from './Controls.scss';


class Controls extends React.Component {
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

  ToggleFirstBtn() {
    const { clicked } = this.state;
      switch (clicked) {
        case 'one':
          return (classes.hide);
        case 'two':
          return (classes.hide);
        case 'three':
          return (classes.hide);
        case 'four':
          return (classes.show);
        default:
          return (classes.show);
      }
  }

  ToggleSecondBtn() {
    const { clicked } = this.state;
      switch (clicked) {
        case 'one':
          return (classes.show);
        case 'two':
          return (classes.hide);
        case 'three':
          return (classes.show);
        case 'four':
          return (classes.hide);
        default:
          return (classes.hide);
      }
  }

  ToggleThirdFourthBtn() {
    const { clicked } = this.state;
      switch (clicked) {
        case 'one':
          return (classes.hide);
        case 'two':
          return (classes.show);
        case 'three':
          return (classes.hide);
        case 'four':
          return (classes.hide);
        default:
          return (classes.hide);
      }
  }
  

  render() {
    const { start, pause, reset } = this.props;
    return (
    <div className={classes.Controls}>
      <button id="one" type="button" 
          className={this.ToggleFirstBtn()}
          onClick={(e) => {
            this.handleClick(e); 
            start(e);
          }} aria-label="Start">
         Start
      </button>

      <button id="two" type="button" 
          className={this.ToggleSecondBtn()}
          onClick={(e) => {
            this.handleClick(e); 
            pause(e);
          }} aria-label="Pause">
         Pause
      </button>

      <button id="three" type="button" 
          className={this.ToggleThirdFourthBtn()}
          onClick={(e) => {
            this.handleClick(e); 
            start(e);
          }} aria-label="Start">
         Continue
      </button>

      <button id="four" type="button" 
          className={this.ToggleThirdFourthBtn()}
          onClick={(e) => {
            this.handleClick(e); 
            reset(e);
          }} aria-label="Reset">
         Stop
      </button>
      
    </div>
  );}
}

const mapStateToProps = ({ timer: { isStarted } }) => {
  return { isStarted };
};

const mapDispatchToProps = (dispatch, { time }) => {
  return {
    start: () => dispatch(startTimer()),
    pause: () => dispatch(stopTimer()),
    reset: () => dispatch(resetTimer(time)),
  };
};

Controls.propTypes = {
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps )(Controls);
