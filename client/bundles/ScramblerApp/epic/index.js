import { Observable } from 'rxjs';
import * as most from 'most';
import { updateWord, UPDATE_WORD } from '../actions';

const handleUpdateWord = (action$, store, extra) => {
  return action$
    .filter((action) => action.type === UPDATE_WORD)
    .flatMap((action) => {
      const { word } = action.payload;
      return Observable.concat(
        Observable.of(updateWord(word)),
      );
    });
}

const combineEpics = (...epics) => (...args) =>
  most.merge(
    ...epics.map(epic => epic(...args))
  );

export default combineEpics(
  handleUpdateWord
);