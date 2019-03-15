import { createStore } from 'redux';
import scramblerGameReducer from '../reducers/scramblerGameReducer';

const configureStore = (railsProps) => (
  createStore(scramblerGameReducer, railsProps)
);

export default configureStore;
