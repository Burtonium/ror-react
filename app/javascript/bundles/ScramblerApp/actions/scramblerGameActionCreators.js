/* eslint-disable import/prefer-default-export */

import { SCRAMBLER_GAME_UPDATE } from '../constants/scrambleGameConstants';

export const updateName = (text) => ({
  type: SCRAMBLER_GAME_UPDATE,
  text,
});
