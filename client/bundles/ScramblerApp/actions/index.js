export const UPDATE_WORD = 'UPDATE_WORD';

export function updateWord(word) {
  return {
    type: UPDATE_WORD,
    payload: { word },
  };
}