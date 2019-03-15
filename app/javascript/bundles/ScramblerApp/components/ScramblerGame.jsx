import PropTypes from 'prop-types';
import React from 'react';

const ScramblerGame = ({ name, updateName }) => (
  <div>
    <h3>
      Scrambler
    </h3>
    <hr />
    <h4>Word: {name}</h4>
    <form >
      <label htmlFor="name">
        Guess the word:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

ScramblerGame.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default ScramblerGame;
