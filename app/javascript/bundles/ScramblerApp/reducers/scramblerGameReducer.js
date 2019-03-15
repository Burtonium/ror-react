import { combineReducers } from 'redux';
import { SCRAMBLER_GAME_UPDATE } from '../constants/scrambleGameConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case SCRAMBLER_GAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const scramblerGameReducer = combineReducers({ name });

export default scramblerGameReducer;
