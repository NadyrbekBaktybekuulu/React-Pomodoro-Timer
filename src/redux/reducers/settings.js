import {
  BIG_BREAK_TIME,
  SMALL_BREAK_WORK,
  POMODOROS_IN_DAY,
  POMODOROS_IN_ROUND,
  WORKING_TIME,
} from '../../constants/initialConfig';

const initialState = {
  workingTime: WORKING_TIME,
  smallBreakTime: SMALL_BREAK_WORK,
  bigBreakTime: BIG_BREAK_TIME,
  pomodorosInRound: POMODOROS_IN_ROUND,
  pomodorosInDay: POMODOROS_IN_DAY,
  chceckedSoundCheckboxes: [],
};

const updateTimeSettings = (state, type, key) => {
  if (
    (state[key] === 1 && type === 'DECREASE') ||
    (state[key] === 60 && type === 'INCREASE')
  ) {
    return state;
  }

  let quantity = 1;

  if (type === 'DECREASE') {
    quantity = -1;
  }

  return {
    ...state,
    [key]: state[key] + quantity,
  };
};

const updateSoundCheckboxes = (state, name) => {
  const idx = state.chceckedSoundCheckboxes.findIndex((item) => item === name);
  const wasChececked = idx !== -1;

  if (wasChececked) {
    return [
      ...state.chceckedSoundCheckboxes.slice(0, idx),
      ...state.chceckedSoundCheckboxes.slice(idx + 1),
    ];
  }

  return [...state.chceckedSoundCheckboxes, name];
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INCREASE':
      return updateTimeSettings(state, type, payload);
    case 'DECREASE':
      return updateTimeSettings(state, type, payload);
    case 'TOGGLE_SOUND_CHECKBOXES':
      return {
        ...state,
        chceckedSoundCheckboxes: updateSoundCheckboxes(state, payload),
      };

    default:
      return state;
  }
};

export default reducer;
