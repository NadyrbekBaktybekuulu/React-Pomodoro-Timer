const increase = (settingName) => {
  return { type: 'INCREASE', payload: settingName };
};

const decrease = (settingName) => {
  return { type: 'DECREASE', payload: settingName };
};

const toogleSoundCheckboxes = (settingName) => {
  return { type: 'TOGGLE_SOUND_CHECKBOXES', payload: settingName };
};

export { increase, decrease, toogleSoundCheckboxes };
