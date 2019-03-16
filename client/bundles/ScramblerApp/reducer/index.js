import { combineReducers } from 'redux';

import { UPDATE_WORD } from '../actions';

const word = (state = '', action) => {
  switch (action.type) {
    case UPDATE_WORD: {
      const { word } = action.payload;
      return word;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  word,
});