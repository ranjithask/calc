import cloneDeep from 'lodash/cloneDeep';
import * as constants from '../constants';

const calc = (
  state = {
    instruction: ''
  },
  action
) => {
  const { type, data } = action;
  let newState;
  switch (type) {
    case constants.APPEND:
      newState = cloneDeep(state);
      newState.instruction += data;
      return newState;
    case constants.DELETE:
      newState = cloneDeep(state);
      newState.instruction = '';
      return newState;
  }
  return state;
};

export default calc;
