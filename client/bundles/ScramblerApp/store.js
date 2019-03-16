import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { from } from 'rxjs';
import * as most from 'most';
import reducer from './reducer';
import epic from './epic';

const rootEpic = (action$, state$, ...rest) => {
  // action$ and state$ are converted from Observables to Most.js streams
  const output = epic(
    most.from(action$),
    most.from(state$),
    ...rest
  );

  // convert Most.js stream back to Observable
  return from(output);
};

export default function setupStore(initialState) {
  const epicMiddleware = createEpicMiddleware();
  
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(epicMiddleware),
  );

  epicMiddleware.run(rootEpic);

  return store;
}